require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('./db');                      // MongoDB connection
const upload = require('./controller/fileUpload');    // Multer-S3 middleware
const ImageProcessing = require('./models/ImageProcessing'); // Mongoose model
const axios = require('axios');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// AWS SDK v3 S3 client
const s3Client = new S3Client({
  region: process.env.S3_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESSKEY,
    secretAccessKey: process.env.S3_SECRETKEY,
  },
});
const BUCKET = process.env.S3_BUCKET;
if (!BUCKET) throw new Error('Environment variable S3_BUCKET is required');

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => res.send('✅ Server running. POST /upload to upload an image.'));

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // 1) Ensure original was uploaded
    if (!req.file || !req.file.location) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }
    const originalImageUrl = req.file.location;
    const imageId = Date.now().toString();

    // 2) Create initial record
    const doc = await new ImageProcessing({
      imageId,
      originalImageUrl,
      processed: false,
      analysis: {}
    }).save();

    // 3) Download image buffer from S3
    const s3Response = await axios.get(originalImageUrl, { responseType: 'arraybuffer' });
    const base64Image = Buffer.from(s3Response.data, 'binary').toString('base64');

    // 4) Send Base64 payload to Flask API as 'image'
    const flaskResp = await axios.post(process.env.FLASK_API_TEST, { image: base64Image });
    const { processedImage, acne, wrinkles, scar, undereye, darkspot, age } = flaskResp.data;

    // 5) Upload processed Base64 image to S3
    let processedImageUrl = processedImage;
    if (processedImage && processedImage.startsWith('data:image')) {
      const buffer = Buffer.from(processedImage.split(',')[1], 'base64');
      const key = `processed/${imageId}.jpg`;
      await s3Client.send(new PutObjectCommand({ Bucket: BUCKET, Key: key, Body: buffer, ContentType: 'image/jpeg' }));
      processedImageUrl = `https://${BUCKET}.s3.${process.env.S3_BUCKET_REGION}.amazonaws.com/${key}`;
    }

    // 6) Update record
    doc.processed = true;
    doc.processedAt = new Date();
    doc.processedImageUrl = processedImageUrl;
    doc.analysis = { acne, wrinkles, scar, undereye, darkspot, age };

    await doc.save();

    // 7) Send back analysis
    res.json({ processedImageUrl, acne, wrinkles, scar, undereye, darkspot, age });
    console.log('✅ Image processed and saved:', { processedImageUrl, acne, wrinkles, scar, undereye, darkspot, age });
  } catch (err) {
    // Capture and log detailed response errors
    let errInfo;
    if (err.response && err.response.data) {
      errInfo = err.response.data;
      if (Buffer.isBuffer(errInfo)) {
        errInfo = errInfo.toString('utf8');
      }
    } else {
      errInfo = err.message;
    }
    console.error('❌ Error in /upload:', errInfo);

    // Forward Flask error status/message or default 500
    const status = err.response?.status || 500;
    const message = (err.response?.data?.error) || (typeof errInfo === 'string' ? errInfo : 'Server error processing image.');
    res.status(status).json({ message });
  }
});

// Start server
mongoose.connection.once('open', () => app.listen(PORT, () => console.log(`✅ Server on port ${PORT}`)));
mongoose.connection.on('error', err => { console.error('MongoDB Error:', err); process.exit(1); });
