const mongoose = require("mongoose");
require("dotenv").config();

// ✅ Load MongoDB credentials from `.env`
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${userName}:${password}@clare.foyag.mongodb.net/?retryWrites=true&w=majority&appName=Clare`;

// ✅ Configure Mongoose Connection with Proper Options
const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // Wait up to 10 seconds before failing
      socketTimeoutMS: 45000, // Keep idle connections open longer
    });

    console.log("✅ Connected to MongoDB successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Exit process if connection fails
  }
};

// ✅ Connect to DB before starting the server
connectToDatabase();

module.exports = mongoose;
