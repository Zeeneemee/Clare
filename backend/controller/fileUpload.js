const multer = require("multer");
const { existsSync, renameSync } = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const latestFilePath = path.join(__dirname, "uploads", "latest-image.png");

    // Check if "latest-image.png" exists and rename it to a unique name
    if (existsSync(latestFilePath)) {
      const timestamp = Date.now();
      const newFileName = `image-${timestamp}.png`;
      const newFilePath = path.join(__dirname, "uploads", newFileName);

      // Rename the previous latest image to a unique name
      renameSync(latestFilePath, newFilePath);
    }

    // Save the new image as "latest-image.png"
    cb(null, "latest-image.png");
  },
});

const upload = multer({ storage });

module.exports = upload;
