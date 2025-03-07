const { User } = require("./user");
const { ImageProcessing } = require("./imageProcessing");

// Example: Create a new user
const createUser = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};

// Example: Create a new image processing document that references a user
const createImageProcessing = async (imageData, userId) => {
  const newImageDoc = new ImageProcessing({
    ...imageData,
    userId // Reference to the user
  });
  return await newImageDoc.save();
};

// Usage inside an Express route (pseudo-code):
// const savedUser = await createUser({ userName: "exampleUser", email: "user@example.com" });
// const savedImageDoc = await createImageProcessing(imageData, savedUser._id);
module.exports = { createUser, createImageProcessing };