
require('dotenv').config();
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

(async () => {
  const client = new S3Client({
    region: process.env.S3_BUCKET_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESSKEY,
      secretAccessKey: process.env.S3_SECRETKEY,
    },
  });

  try {
    await client.send(new PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: 'processed/permission-test.txt',
      Body: Buffer.from('test'),
      ContentType: 'text/plain',
    }));
    console.log('✅ S3 upload succeeded.');
  } catch (err) {
    console.error('❌ S3 upload failed:', err.$metadata?.httpStatusCode, err.message);
  }
})();
