const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios"); // Using axios to post to the Flask API
const upload = require("./controller/fileUpload");
const mongoose = require("./db"); // Mongoose connection
const ImageProcessing = require("./models/image"); // Import Model

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
    res.send("✅ Server running. Use POST /upload to upload an image.");
});

app.post("/upload", upload.single("image"), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded." });
    }

    const imageBuffer = req.file.buffer;
    const base64Image = imageBuffer.toString("base64");

    try {
        // Save initial data to MongoDB
        const newImage = new ImageProcessing({
            imageId: Date.now().toString(),
            processed: false,
            processedAt: new Date(),
            resultData: {
                processedImage: `data:image/jpeg;base64,${base64Image}`,
                analysis: {
                    acne: { ResultImage: null, positions: [], confidence: 0, score: 0 },
                    wrinkles: { ResultImage: null, positions: [], confidence: 0, score: 0 },
                    scar: { ResultImage: null, positions: [], confidence: 0, score: 0 },
                    undereye: { ResultImage: null, positions: [], confidence: 0, score: 0 },
                    darkspot: { ResultImage: null, positions: [], confidence: 0, score: 0 },
                    age: "Not Detected",
                    gender: "Not Detected"
                }
            }
        });

        const savedImage = await newImage.save();

        // Post the base64 image to the Flask API endpoint.
        // Update the URL to match your Flask server address and port.
        const FLASK_API_URL = "http://clare.centralindia.cloudapp.azure.com/analyze"; // Example: http://localhost:5000/analyze
        
        
        const flaskResponse = await axios.post(FLASK_API_URL, { image: base64Image });
        const pythonResponse = flaskResponse.data;

        // Update MongoDB with the processed data from the Flask API
        const updatedImage = await ImageProcessing.findByIdAndUpdate(
            savedImage._id,
            {
                processed: true,
                processedAt: new Date(),
                "resultData.originalFilename": req.file.filename,
                "resultData.processedImage": pythonResponse.processedImage,
                "resultData.analysis.acne": pythonResponse.acne || { positions: [], score: 0 },
                "resultData.analysis.wrinkles": pythonResponse.wrinkles || { severity: 0, percentage: 0 },
                "resultData.analysis.scar": pythonResponse.scar || { positions: [], score: 0 },
                "resultData.analysis.undereye": pythonResponse.undereye || { positions: [], score: 0 },
                "resultData.analysis.darkspot": pythonResponse.darkspot || { positions: [], score: 0 },
                "resultData.analysis.age": pythonResponse.age || "Not Detected",
                "resultData.analysis.gender": pythonResponse.gender?.label || "Not Detected"
            },
            { new: true }
        );

        console.log("✅ MongoDB Updated:", updatedImage);

        // Send the response in the required format
        res.json({
            processedImage: updatedImage.resultData.processedImage,
            acne: {
                acnePosition: updatedImage.resultData.analysis.acne.positions,
                acneScore: updatedImage.resultData.analysis.acne.score,
            },
            wrinkles: {
                wrinklesSeverity: updatedImage.resultData.analysis.wrinkles.severity,
                wrinklesPercentage: updatedImage.resultData.analysis.wrinkles.percentage,
            },
            scar: {
                scarPosition: updatedImage.resultData.analysis.scar.positions,
                scarScore: updatedImage.resultData.analysis.scar.score,
            },
            undereye: {
                undereyeLabel: updatedImage.resultData.analysis.undereye.label,
                undereyeScore: updatedImage.resultData.analysis.undereye.score,
            },
            darkspot: {
                darkspotPosition: updatedImage.resultData.analysis.darkspot.positions,
                darkspotScore: updatedImage.resultData.analysis.darkspot.score,
            },
            age: updatedImage.resultData.analysis.age,
            gender: updatedImage.resultData.analysis.gender
        });
    } catch (error) {
        console.error("❌ Error processing image:", error);
        res.status(500).json({ message: "Error processing image." });
    }
});

// Start server only after MongoDB connects
mongoose.connection.once("open", () => {
    console.log("🚀 MongoDB Connected. Starting server...");
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
});

// Handle MongoDB connection errors
mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
});
