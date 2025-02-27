const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const upload = require("./controller/fileUpload");
const app = express();
const { connectToDatabase } = require("./db"); // Import the database connection module
// const { UserData, ImageProcessing } = require("./models");

const PORT = 5000;
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to the database
connectToDatabase().then(() => {
  app.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded." });
    }
    
    const filePath = path.join(__dirname, "uploads", req.file.filename);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return res.status(500).json({ message: "Error reading file." });
      }
      
      // Convert the file buffer to a base64-encoded string
      const base64Data = data.toString("base64");
      // Construct a data URL. Here we assume the image is a JPEG.
      const dataURL = `data:image/jpeg;base64,${base64Data}`;
      
      // Return the data URL in the JSON response
      res.json({
        message: "Image uploaded successfully!",
        dataURL: dataURL
      });
    });
  });
})

app.get('/', (req, res) => {
  res.send("hello world");
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
