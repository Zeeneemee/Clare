require('dotenv').config(); // Load environment variables
const { connectToDatabase, client } = require('./db');

async function createTestDocument() {
  try {
    // Get the "claire" database and a test collection
    const db = client.db('claire');
    const collection = db.collection('testCollection');

    // Create a test document
    const testDoc = {
      name: "Test Document",
      createdAt: new Date()
    };

    // Insert the document into the collection
    const result = await collection.insertOne(testDoc);
    console.log("Test document created with ID:", result.insertedId);
    return result.insertedId;
  } catch (err) {
    console.error("Error creating test document:", err);
  } finally {
    // Close the client connection after testing
    await client.close();
  }
}

// Connect to the database and run the create function
connectToDatabase()
  .then(createTestDocument)
  .catch(err => console.error("Failed to connect and create test document:", err));
