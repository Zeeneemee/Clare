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
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);
    localStorage.removeItem("image");
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error("Camera access denied:", err));
  }, []);

  const captureImage = () => {
    setCaptured(true);
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    canvas.width = videoWidth;
    canvas.height = videoHeight;

    context.save();
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    video.style.display = "none";
    canvas.style.display = "block";
    setShowConfirmation(true);
  };

  const proceed = async () => {
    if (captured) {
      // Convert canvas to data URL and save to localStorage
      const canvas = canvasRef.current;
      const imageDataURL = canvas.toDataURL('image/png');
      localStorage.setItem('image', imageDataURL);
      
      navigate("/loading");
    }
    setFadeOut(true);
  };

  const retake = () => {
    setCaptured(false);
    setShowConfirmation(false);
    setIsButtonVisible(true);

    const video = videoRef.current;
    video.style.display = "block";
    const canvas = canvasRef.current;
    canvas.style.display = "none";
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center relative px-5 py-16 mt-12`}
      style={{
        transition: "opacity 1s ease-in-out",
        opacity: fadeIn ? 1 : 0,
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg"
        style={{ backgroundImage: "url('/assets/bg5.png')" }}
      ></div>
      <h1 className="font-fanwood text-4xl text-darkblue mb-4 z-10 relative">
        Clare Analysis Model
      </h1>
      <p className="font-lato font-light italic text-base text-gray-500 text-center max-w-3xl mb-6 z-10 relative">
        Our Clare Analysis Model utilizes cutting-edge AI technology to analyze
        your skin and generate a detailed report with personalized insights.
      </p>
      <div className="relative w-full max-w-md mt-8 z-10">
        <video
          ref={videoRef}
          autoPlay
          className={`transform scale-x-[-1] w-full h-[350px] max-w-md rounded-3xl shadow-lg object-cover ${captured ? "hidden" : "block"}`}
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
              className="font-lato text-lg font-light bg-[#ff4d4d] text-white py-3 px-12 rounded-full transition-colors duration-300 hover:opacity-80"
            >
              Retake
            </button>
            <button
              onClick={proceed}
              className="font-lato text-lg font-light bg-[#14213D] text-white py-3 px-12 rounded-full transition-colors duration-300 hover:opacity-80"
            >
              Proceed
            </button>
          </div>
        </div>
      ) : (
        isButtonVisible && (
          <button
            onClick={captureImage}
            className="font-lato text-lg font-light bg-[#14213D] text-white py-3 px-12 rounded-full transition-colors duration-300 hover:opacity-80 mt-8 z-10 relative"
          >
            Capture Image
          </button>
        )
      )}
    </div>
  );
}
