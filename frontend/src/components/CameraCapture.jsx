import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CameraCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [captured, setCaptured] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = async (facingMode = "user") => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const captureImage = async () => {
    setCaptured(true);
    setIsButtonVisible(false);
    setShowConfirmation(true);

    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    // Get the video dimensions
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    // Set canvas size to match the video aspect ratio
    canvas.width = videoWidth;
    canvas.height = videoHeight;

    // Draw the video frame on the canvas
    context.drawImage(video, 0, 0, videoWidth, videoHeight);

    video.style.display = "none";
    canvas.style.display = "block";
  };

  const proceed = async () => {
    setFadeOut(true);
    const canvas = canvasRef.current;

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
        localStorage.setItem("img", response);
        navigate("/loading");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }, "image/jpeg");
  };

  const retake = () => {
    setCaptured(false);
    setShowConfirmation(false);
    setIsButtonVisible(true);

    if (videoRef.current) videoRef.current.style.display = "block";
    if (canvasRef.current) canvasRef.current.style.display = "none";
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center relative px-5 py-16 mt-12`}
      style={{ transition: "opacity 1s ease-in-out", opacity: fadeOut ? 0 : 1 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg"
        style={{ backgroundImage: "url('/assets/bg5.png')" }}
      ></div>
      <h1 className="font-fanwood text-4xl text-darkblue mb-4 z-10 relative">
        Clare Analysis Model
      </h1>
      <p className="font-lato font-light text-base text-darkblue text-center max-w-3xl mb-6 z-10 relative">
        Our Clare Analysis Model utilizes cutting-edge AI technology to analyze
        your skin and generate a detailed report with personalized insights.
      </p>
      <div className="relative w-full max-w-md mt-8 z-10">
        <video
          ref={videoRef}
          autoPlay
          className={`w-full h-auto max-w-md rounded-3xl shadow-lg object-cover scale-x-[-1] ${
            captured ? "hidden" : "block"
          }`}
        />
        <canvas
          ref={canvasRef}
          className="w-full h-auto max-w-md rounded-3xl shadow-lg object-cover scale-x-[-1]"
          style={{ display: "none" }}
        />
      </div>
      {showConfirmation ? (
        <div className="mt-8 z-10 relative">
          <p className="font-lato font-light text-lg text-darkblue mb-4">
            Do you want to proceed with this image?
          </p>
          <div className="flex gap-4">
            <button
              onClick={retake}
              className="font-lato text-lg font-light bg-[#ff4d4d] text-white py-3 px-12 rounded-full transition-all duration-300 hover:bg-[#ff8080] hover:text-darkblue"
            >
              Retake
            </button>
            <button
              onClick={proceed}
              className="font-lato text-lg font-light bg-[#003366] text-white py-3 px-12 rounded-full transition-all duration-300 hover:bg-[#ADD8E6] hover:text-darkblue"
            >
              Proceed
            </button>
          </div>
        </div>
      ) : (
        isButtonVisible && (
          <button
            onClick={captureImage}
            className="font-lato text-lg font-light bg-[#003366] text-white py-3 px-12 rounded-full transition-all duration-300 hover:bg-[#ADD8E6] hover:text-darkblue mt-8 z-10 relative"
          >
            Capture Image
          </button>
        )
      )}
    </div>
  );
}
