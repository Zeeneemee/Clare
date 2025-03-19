const mongoose = require("mongoose");
const User = require("./user"); // Import User model
const { Schema } = mongoose;

const imageProcessingSchema = new Schema({
  imageId: { type: String, required: true }, // Unique identifier for image
  processed: { type: Boolean, default: false }, // Processing status
  processedAt: { type: Date }, // Timestamp for processing completion
  resultData: {
    processedImage: { type: String }, // Can store Base64 or file path
    analysis: {
      acne: {
        positions: [{ x: Number, y: Number, width: Number, height: Number }],
        score: { type: Number, default: 0 },
        confidence: [{ type: Number, default: 0 }]
      },
      wrinkles: {
        positions: [{ x: Number, y: Number, width: Number, height: Number }],
        score: { type: Number, default: 0 },
        confidence: [{ type: Number, default: 0 }]
      },
      scar: {
        positions: [{ x: Number, y: Number, width: Number, height: Number }],
        score: { type: Number, default: 0 },
        confidence: [{ type: Number, default: 0 }]
      },
      undereye: {
        score: { type: Number, default: 0 },
        label: {type: String}
      },
      darkspot: {
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
