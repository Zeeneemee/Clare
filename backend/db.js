const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const userName = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${userName}:${password}@clare.foyag.mongodb.net/?retryWrites=true&w=majority&appName=Clare`;

// Create a MongoClient with the Stable API options
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    await client.connect();
    await client.db("Clare").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit process if connection fails
  }
}

module.exports = {connectToDatabase, client}; 
