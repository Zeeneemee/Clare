const mongoose = require("mongoose");
const ImageProcessing = require("./models/image"); // Your Mongoose model
require("dotenv").config(); // Load environment variables

// ✅ Load MongoDB credentials from .env
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

if (!userName || !password) {
    console.error("❌ ERROR: Missing MongoDB credentials. Check your .env file.");
    process.exit(1);
}

// ✅ Include database name (e.g., "test") in the URI
const uri = `mongodb+srv://${userName}:${password}@clare.foyag.mongodb.net/test?retryWrites=true&w=majority&appName=Clare`;

async function fetchAllData() {
    try {
        console.log("🔄 Connecting to MongoDB...");

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("✅ Connected to MongoDB Atlas");

        // ✅ Fetch all documents where gender is "Male"
        const results = await ImageProcessing.find({ "resultData.analysis.gender": "Female" }).exec();

        console.log("📌 Query Results:", results.length ? results : "No matching documents found.");

    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
    } finally {
        mongoose.connection.close();
        console.log("🔌 MongoDB connection closed.");
    }
}

// ✅ Run the function
fetchAllData();
