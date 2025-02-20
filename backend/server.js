// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const fs = require("fs");
// const upload = require("./controller/fileUpload");

// const app = express();
// const PORT = 5000;

// // Ensure the uploads folder exists
// const uploadDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// app.use(cors());
// app.use(express.json());

// // Serve uploaded images statically
// app.use("/uploads", express.static(uploadDir));

// // Upload endpoint
// app.post("/upload", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: "No file uploaded." });
//   }

//   res.json({
//     message: "Image uploaded successfully!",
//     file: req.file.filename, // Returns the actual uploaded filename
//   });
// });

// // Test route
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// // Start server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const nodemailer = require("nodemailer"); // Add Nodemailer

const app = express();
const PORT = 5000;

// Ensure the uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up multer for file uploading with validation
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save to the uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Adds timestamp to avoid name conflicts
  },
});

const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const mimeType = fileTypes.test(file.mimetype);
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    return cb(new Error("Only image files are allowed"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10 MB
});

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded images statically
app.use("/uploads", express.static(uploadDir));

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like SMTP if needed
  auth: {
    user: "your-email@gmail.com", // Replace with your email
    pass: "your-email-password", // Replace with your email password or app password
  },
});

// Email sending function
const sendSignUpEmail = (email) => {
  return transporter.sendMail({
    from: '"Your App Name" <your-email@gmail.com>', // Sender's email address
    to: email, // Recipient's email address
    subject: "Welcome to Our Platform!", // Subject of the email
    text: "Hello! Thank you for signing up!", // Email body
  });
};

// POST route for handling sign-ups
app.post("/signup", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Send email after successful signup
    await sendSignUpEmail(email);
    res.status(200).json({ message: "Sign up successful! Email sent." });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email." });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
