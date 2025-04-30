require('dotenv').config();
const multer = require('multer');
const { S3Client } = require('@aws-sdk/client-s3');
const multerS3 = require('multer-s3');
const path = require('path');

// Configure AWS SDK v3 S3 client
const s3Client = new S3Client({
  region: process.env.S3_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESSKEY,
    secretAccessKey: process.env.S3_SECRETKEY,
  },
});

// Ensure bucket is specified
const bucketName = process.env.S3_BUCKET;
if (!bucketName) {
  throw new Error('Environment variable S3_BUCKET is required');
}

// Export Multer instance that streams files directly to S3 (AWS SDK v3)
module.exports = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: bucketName,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: (req, file, cb) => cb(null, { fieldName: file.fieldname }),
    key: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, `${Date.now()}${ext}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
});
