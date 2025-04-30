const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageProcessingSchema = new Schema({
  imageId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  originalImageUrl: {
    type: String,
    required: true
  },
  processedImageUrl: {
    type: String,
    default: null
  },

  processed: {
    type: Boolean,
    default: false
  },
  processedAt: {
    type: Date
  },

  analysis: {
    acne: {
      positions: [{
        x: Number, y: Number, width: Number, height: Number
      }],
      score: { type: Number, default: 0 },
      confidence: [{ type: Number }]
    },
    wrinkles: {
      positions: [{
        x: Number, y: Number, width: Number, height: Number
      }],
      score: { type: Number, default: 0 },
      percentage: { type: Number, default: 0 }
    },
    scar: {
      positions: [{
        x: Number, y: Number, width: Number, height: Number
      }],
      score: { type: Number, default: 0 },
      confidence: [{ type: Number }]
    },
    undereye: {
      score: { type: Number, default: 0 },
      label: { type: String, default: "" }
    },
    darkspot: {
      positions: [{
        x: Number, y: Number, width: Number, height: Number
      }],
      score: { type: Number, default: 0 },
      confidence: [{ type: Number }]
    },
    age: { type: String, default: "" },
    gender: { type: String, default: "Not Detected" }
  }

}, { timestamps: true });

module.exports = mongoose.model("s3", imageProcessingSchema);
