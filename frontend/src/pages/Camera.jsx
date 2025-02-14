import React, { useRef, useState } from "react";
import axios from "axios";

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);

  // Start the camera
  const startCamera = async (facingMode = "user") => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode },
      });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  // Capture Image
  const captureImage = async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas to blob
    canvas.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append("image", blob, "captured-image.jpg");

      try {
        const response = await axios.post(
          "http://localhost:5000/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        setImage(`http://localhost:5000/uploads/${response.data.file}`);
        alert("Image uploaded successfully!");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }, "image/jpeg");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Camera Capture & Upload</h2>

      <video
        ref={videoRef}
        autoPlay
        style={{ width: "300px", border: "2px solid black" }}
      ></video>
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

      <div>
        <button onClick={() => startCamera("user")}>Start Front Camera</button>
        <button onClick={() => startCamera("environment")}>
          Start Back Camera
        </button>
        <button onClick={captureImage}>Capture & Upload</button>
      </div>

      {image && (
        <img
          src={image}
          alt="Captured"
          style={{ marginTop: "20px", width: "300px" }}
        />
      )}
    </div>
  );
};

export default CameraCapture;
