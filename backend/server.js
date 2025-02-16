const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// Set up Multer storage
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const latestFilePath = path.join(__dirname, "uploads", "latest-image.png");

    // Check if "latest-image.png" exists and rename it to a unique name
    if (fs.existsSync(latestFilePath)) {
      const timestamp = Date.now();
      const oldFilePath = path.join(__dirname, "uploads", "latest-image.png");
      const newFileName = `image-${timestamp}.png`;
      const newFilePath = path.join(__dirname, "uploads", newFileName);

      // Rename the previous latest image to a unique name
      fs.renameSync(oldFilePath, newFilePath);
    }

    // Save the new image as "latest-image.png"
    cb(null, "latest-image.png");
  },
});

const upload = multer({ storage });

// Upload endpoint
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded." });
  }
  res.json({
    message: "Image uploaded successfully!",
    file: req.file.filename,
  });
});

// Serve uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
