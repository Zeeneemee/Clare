const mongoose = require("mongoose");
const user = require("./user");
const { Schema } = mongoose;

const imageProcessingSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: user, required: true },
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
        positions: { 
          type: [{ x: Number, y: Number, width: Number, height: Number }],
          default: [] 
        },
        score: { type: Number, default: 0 }
      },
      wrinkles: {
        positions: { 
          type: [{ x: Number, y: Number, width: Number, height: Number }],
          default: [] 
        },
        score: { type: Number, default: 0 }
      },
      scar: {
        positions: { 
          type: [{ x: Number, y: Number, width: Number, height: Number }],
          default: [] 
        },
        score: { type: Number, default: 0 }
      },
      undereye: {
        positions: { 
          type: [{ x: Number, y: Number, width: Number, height: Number }],
          default: [] 
        },
        score: { type: Number, default: 0 }
      },
      age: { type: String, default: "" },
      gender: { type: String, default: "Not Detected" }
    }
  }
}, { timestamps: true });

module.exports = mongoose.model("ImageProcessing", imageProcessingSchema);
