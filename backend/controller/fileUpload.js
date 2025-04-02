const multer = require("multer");

// ✅ Configure Multer Storage
const storage = multer.memoryStorage()

const upload = multer({ storage });

module.exports = upload;

