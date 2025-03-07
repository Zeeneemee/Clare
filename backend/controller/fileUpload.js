const multer = require("multer");
const { existsSync, renameSync } = require("fs");
const path = require("path");

// ✅ Configure Multer Storage
const storage = multer.memoryStorage()

const upload = multer({ storage });

module.exports = upload;
