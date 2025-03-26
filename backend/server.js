const express = require("express");
const cors = require("cors");
const path = require("path");
const { spawn } = require("child_process"); // ✅ Use spawn instead of exec
const upload = require("./controller/fileUpload");
const mongoose = require("./db"); // ✅ Mongoose connection
const ImageProcessing = require("./models/image"); // ✅ Import Model

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Function to Convert Image to Base64
app.get("/", (req, res) => {
    res.send("✅ Server running. Use POST /upload to upload an image.");
});
// ✅ POST: Upload Image & Process with Python
app.post("/upload", upload.single("image"), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded." });
    }

    const imageBuffer = req.file.buffer;
    const base64Image = imageBuffer.toString("base64");

    try {
        // ✅ Save Initial Data to MongoDB
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

        // ✅ Spawn Python Process
        const pythonProcess = spawn("python3", ["ml/master.py", base64Image]);
        let stdoutData = "";

        pythonProcess.stdout.on("data", (data) => {
            stdoutData += data.toString();
        });

        pythonProcess.stderr.on("data", (data) => {
            console.error("🐍 Python stderr:", data.toString());
        });

        pythonProcess.on("close", async (code) => {
            let jsonStart = stdoutData.indexOf("{");
            let jsonEnd = stdoutData.lastIndexOf("}");

            if (jsonStart === -1 || jsonEnd === -1) {
                console.error("❌ No valid JSON found in Python response");
                return res.status(500).json({ message: "Invalid response from Python script." });
            }

            let jsonString = stdoutData.substring(jsonStart, jsonEnd + 1).trim();

            try {
                let pythonResponse = JSON.parse(jsonString);

                // ✅ Update MongoDB with Processed Data
                const updatedImage = await ImageProcessing.findByIdAndUpdate(
                    savedImage._id,
                    {
                        processed: true,
                        processedAt: new Date(),
                        "resultData.originalFilename": req.file.filename,
                        "resultData.processedImage": pythonResponse.processedImage,
                        "resultData.analysis.acne": pythonResponse.acne || { positions: [], score: 0 },
                        "resultData.analysis.wrinkles": pythonResponse.wrinkles || { positions: [], score: 0 },
                        "resultData.analysis.scar": pythonResponse.scar || { positions: [], score: 0 },
                        "resultData.analysis.undereye": pythonResponse.undereye || {positions: [], score: 0 },
                        "resultData.analysis.darkspot": pythonResponse.darkspot || { positions: [], score: 0 },
                        "resultData.analysis.age": pythonResponse.age || "Not Detected",
                        "resultData.analysis.gender": pythonResponse.gender?.label || "Not Detected"
                    },
                    { new: true }
                );

                console.log("✅ MongoDB Updated:", updatedImage);

                // ✅ Send Response in Required Format
                res.json({
                    processedImage: updatedImage.resultData.processedImage,
                    acne: {
                        acneImage: updatedImage.resultData.analysis.acne.ResultImage,
                        acnePosition: updatedImage.resultData.analysis.acne.positions,
                        acneScore: updatedImage.resultData.analysis.acne.score,
                    },
                    wrinkles: {
                        wrinklesImage: updatedImage.resultData.analysis.wrinkles.ResultImage,
                        wrinklesPosition: updatedImage.resultData.analysis.wrinkles.positions,
                        wrinklesScore: updatedImage.resultData.analysis.wrinkles.score,
                    },
                    scar: {
                        scarImage: updatedImage.resultData.analysis.scar.ResultImage,
                        scarPosition: updatedImage.resultData.analysis.scar.positions,
                        scarScore: updatedImage.resultData.analysis.scar.score,
                    },
                    undereye: {
                        undereyeImage: updatedImage.resultData.analysis.undereye.ResultImage,
                        undereyeLabel: updatedImage.resultData.analysis.undereye.label,
                        undereyeScore: updatedImage.resultData.analysis.undereye.score,
                    },
                    darkspot: {
                        darkspotImage: updatedImage.resultData.analysis.darkspot.ResultImage,
                        darkspotPosition: updatedImage.resultData.analysis.darkspot.positions,
                        darkspotScore: updatedImage.resultData.analysis.darkspot.score,
                    },
                    age: updatedImage.resultData.analysis.age,
                    gender: updatedImage.resultData.analysis.gender
                });

            } catch (parseError) {
                console.error("❌ Error parsing Python response:", parseError);
                return res.status(500).json({ message: "Invalid JSON format from Python script." });
            }
        });

    } catch (dbError) {
        console.error("❌ Error saving to MongoDB:", dbError);
        res.status(500).json({ message: "Error saving data to database." });
    }
});

// ✅ Start Server Only After MongoDB Connects
mongoose.connection.once("open", () => {
    console.log("🚀 MongoDB Connected. Starting server...");
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
});

// ✅ Handle MongoDB Connection Errors
mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit server if database connection fails
});


