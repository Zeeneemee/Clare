import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CameraCapture() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Start the camera when the component loads
  React.useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error("Camera access denied:", err));
  }, []);

  // Capture Image Function
  const captureImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);

    const imageData = canvas.toDataURL("image/png");
    localStorage.setItem("capturedImage", imageData); // Save image for result screen

    // Navigate to loading page, then after that to result page
    navigate("/loading"); // Redirect to loading page first
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <video ref={videoRef} autoPlay className="w-full max-w-md rounded-lg shadow-md" />
      <button
        onClick={captureImage}
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Capture Image
      </button>
    </div>
  );
}
