// models.js
import { Schema, model } from "mongoose";

const imageProcessingSchema = new Schema({
  imageId: { type: String, required: true },
  fileName: { type: String, required: true },
  processed: { type: Boolean, default: false },
  processedAt: { type: Date },
  // Stores both the original file info and ML analysis results
  resultData: {
    originalFilename: { type: String },
    // The processed image can be stored as a Base64 data URL or a URL/path
    processedImage: { type: String },
    analysis: {
      acne: {
        positions: [{ x: Number, y: Number, width: Number, height: Number }],
        score: Number
      },
      wrinkles: {
        positions: [{ x: Number, y: Number, width: Number, height: Number }],
        score: Number
      },
      scar: {
        positions: [{ x: Number, y: Number, width: Number, height: Number }],
        score: Number
      },
      undereye: {
        positions: [{ x: Number, y: Number, width: Number, height: Number }],
        score: Number
      },
      age: Number,
      gender: String
    }
  }
}, { timestamps: true });

const ImageProcessing = model("ImageProcessing", imageProcessingSchema);

export default { ImageProcessing };
