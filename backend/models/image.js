const mongoose = require("mongoose");
const User = require("./user"); // Import User model
const { Schema } = mongoose;

const imageProcessingSchema = new Schema({
  imageId: { type: String, required: true }, // Unique identifier for image
  fileName: { type: String, required: true }, // Original filename
  filePath: { type: String, required: true }, // Path to stored file
  processed: { type: Boolean, default: false }, // Processing status
  processedAt: { type: Date }, // Timestamp for processing completion
  resultData: {
    originalFilename: { type: String },
    processedImage: { type: String }, // Can store Base64 or file path
    analysis: {
      acne: {
        ResultImage: { type: String }, // ✅ Stores acne result image (Base64 or file path)
        positions: [{ x: Number, y: Number, width: Number, height: Number }],
        score: { type: Number, default: 0 },
        confidence: [{ type: Number, default: 0 }]
      },
      wrinkles: {
        ResultImage: { type: String },
        positions: [{ x: Number, y: Number, width: Number, height: Number }],
        score: { type: Number, default: 0 },
        confidence: [{ type: Number, default: 0 }]
      },
      scar: {
        ResultImage: { type: String },
        positions: [{ x: Number, y: Number, width: Number, height: Number }],
        score: { type: Number, default: 0 },
        confidence: [{ type: Number, default: 0 }]
      },
      undereye: {
        ResultImage: { type: String },
        positions: [{ x: Number, y: Number, width: Number, height: Number }],
        score: { type: Number, default: 0 },
        confidence: [{ type: Number, default: 0 }]
      },
      darkspot: {
        ResultImage: { type: String },
        positions: [{ x: Number, y: Number, width: Number, height: Number }],
        score: { type: Number, default: 0 },
        confidence: [{ type: Number, default: 0 }]
      },
      age: { type: String, default: "" },
      gender: { type: String, default: "Not Detected" }
    }
  }
}, { timestamps: true });

module.exports = mongoose.model("ImageProcessing", imageProcessingSchema);
