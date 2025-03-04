const multer = require("multer");
const { existsSync, renameSync } = require("fs");
const path = require("path");

// ✅ Configure Multer Storage
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    // ✅ Get file extension
    const fileExt = path.extname(file.originalname).toLowerCase();

    // ✅ Generate a unique filename using timestamp
    const timestamp = Date.now();
    const uniqueFileName = `image-${timestamp}${fileExt}`;

    // ✅ Save the new file with a unique name
    cb(null, uniqueFileName);
  },
});

const upload = multer({ storage });

module.exports = upload;
