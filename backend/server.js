// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const upload = require("./controller/fileUpload");
// const app = express();
// const PORT = 5000;
// app.use(cors());
// app.use(express.json());
// // Upload endpoint
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.post("/upload", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: "No file uploaded." });
//   }
//   res.json({
//     message: "Image uploaded successfully!",
//     file: "latest-image.png",
//   });
// });
// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const upload = require("./controller/fileUpload");

const app = express();
const PORT = 5000;

// Ensure the uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.use(cors());
app.use(express.json());

// Serve uploaded images statically
app.use("/uploads", express.static(uploadDir));

// Upload endpoint
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  res.json({
    message: "Image uploaded successfully!",
    file: req.file.filename, // Returns the actual uploaded filename
  });
});

// Test route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
