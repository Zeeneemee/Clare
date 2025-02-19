import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CameraCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [captured, setCaptured] = useState(false); // Track if the image was captured
  const [isButtonVisible, setIsButtonVisible] = useState(true); // Track button visibility
  const [fadeOut, setFadeOut] = useState(false); // Control fade-out effect
  const [showConfirmation, setShowConfirmation] = useState(false); // Track confirmation visibility
  const [isRetaking, setIsRetaking] = useState(false); // Track if user is retaking
  const navigate = useNavigate();

  // Start the camera when the component loads
  useEffect(() => {
    localStorage.removeItem("image"); // Clear the previous image
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error("Camera access denied:", err));
  }, []);

  // Capture Image Function (Freeze frame)
  const captureImage = () => {
    // Indicate that the image has been captured and hide elements
    setCaptured(true); // This will hide the video and show the canvas
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    // Set the canvas size to match the video size
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame on the canvas (freezing the frame)
    context.save();
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    // Hide the video and show the canvas
    video.style.display = "none";
    canvas.style.display = "block";

    // Hide the capture button and show confirmation options
    setIsButtonVisible(false);
    setShowConfirmation(true);
  };

  // Proceed to the loading screen with fade-out effect
  const proceed = async () => {
    if (captured && !isRetaking) {
      
      const canvas = canvasRef.current;
      // Convert canvas to Blob
      canvas.toBlob(async (blob) => {
        const formData = new FormData();
        formData.append("image", blob, "captured-image.jpg");
        
        
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });
        navigate("/result");
        const result = await response.json();
        console.log({ result });
  
        if (result.dataURL) {
          localStorage.setItem("image", result.dataURL);
        }
      }, "image/jpeg");
    }
    setFadeOut(true);
  };
  
  // Retake the photo
  const retake = () => {
    setIsRetaking(true);
    setCaptured(false);
    setShowConfirmation(false);
    setIsButtonVisible(true);

    const video = videoRef.current;
    video.style.display = "block"; // Show the video again
    const canvas = canvasRef.current;
    canvas.style.display = "none"; // Hide the canvas

  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center relative px-5 py-16 mt-12`}
      style={{
        transition: "opacity 1s ease-in-out",
        opacity: fadeOut ? 0 : 1, // Control the opacity based on fadeOut state
      }}
    >
      {/* Background Image with blur effect */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg"
        style={{ backgroundImage: "url('/assets/bg5.png')" }}
      ></div>

      {/* Title */}
      <h1 className="font-fanwood text-4xl text-darkblue mb-4 z-10 relative">
        Clare Analysis Model
      </h1>

      {/* Description */}
      <p className="font-lato font-light text-base text-darkblue text-center max-w-3xl mb-6 z-10 relative">
        Our Clare Analysis Model utilizes cutting-edge AI technology to analyze your skin and generate a detailed report with personalized insights. A comprehensive, accurate, and customized experience that helps you unlock the full potential of your skin care regimen.
      </p>

      {/* Camera Frame (Hidden initially) */}
      <div className="relative w-full max-w-md mt-8 z-10">
        <video
          ref={videoRef}
          autoPlay
          className={`transform scale-x-[-1] w-full h-[350px] max-w-md rounded-3xl shadow-lg object-cover ${captured ? "hidden" : "block"}`}
        />
        <canvas
          ref={canvasRef}
          className="w-full h-[350px] max-w-md rounded-3xl shadow-lg object-cover"
          style={{ display: "none" }} // Initially hidden
        />
      </div>

      {/* Confirmation Buttons */}
      {showConfirmation && (
        <div className="mt-8 z-10 relative">
          <p className="font-lato font-light text-lg text-darkblue mb-4">
            Do you want to proceed with this image?
          </p>
          <div className="flex gap-4">
            <button
              onClick={proceed}
              className="font-lato text-lg font-light bg-[#003366] text-white py-3 px-12 rounded-full transition-all duration-300 hover:bg-[#ADD8E6] hover:text-darkblue"
            >
              Proceed
            </button>
            <button
              onClick={retake}
              className="font-lato text-lg font-light bg-[#ff4d4d] text-white py-3 px-12 rounded-full transition-all duration-300 hover:bg-[#ff8080] hover:text-darkblue"
            >
              Retake
            </button>
          </div>
        </div>
      )}

      {/* Capture Button (Visible only when no confirmation is shown) */}
      {isButtonVisible && !showConfirmation && (
        <button
          onClick={captureImage}
          className="font-lato text-lg font-light bg-[#003366] text-white py-3 px-12 rounded-full transition-all duration-300 hover:bg-[#ADD8E6] hover:text-darkblue mt-8 z-10 relative"
        >
          Capture Image
        </button>
      )}
    </div>
  );
}
