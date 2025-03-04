
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CameraCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [captured, setCaptured] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isRetaking, setIsRetaking] = useState(false);
  const [bioMetrics,setBioMetrics] = useState([])
 
  const navigate = useNavigate();

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

  useEffect(()=>{

  })

  // Capture Image Function (Freeze frame)
  const captureImage = () => {
    // Indicate that the image has been captured and hide elements
    setCaptured(true); // This will hide the video and show the canvas
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");
  
    // Get the video dimensions
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;
  
    // Set canvas size to match the video aspect ratio
    canvas.width = videoWidth;
    canvas.height = videoHeight;
  
    // Draw the current video frame on the canvas (freezing the frame)
    context.save();
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
    // Stop all media tracks (turns off the camera)
    if (video.srcObject) {
      const tracks = video.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      video.srcObject = null;
    }
    
    // Hide the video and show the canvas
    video.style.display = "none";
    canvas.style.display = "block";
    setShowConfirmation(true);
  };
  

  // Proceed to the loading screen with fade-out effect
  const proceed = async () => {
    if (captured && !isRetaking) {
      const canvas = canvasRef.current;
      
      // ✅ Convert Canvas to Blob
      canvas.toBlob(async (blob) => {
        const formData = new FormData();
        formData.append("image", blob, "captured-image.jpg");
  
        try {
          const response = await fetch("http://localhost:5000/upload", {
            method: "POST",
            body: formData,
          });
  
          const result = await response.json();
          console.log("✅ Processed Result:", result);
  
          // ✅ Store Data in localStorage
          localStorage.setItem("processedImage", result.processedImage);
          localStorage.setItem("acneImage", result.acne.acneImage);
          localStorage.setItem("acneScore", result.acne.acneScore);
          localStorage.setItem("wrinklesImage", result.wrinkles.wrinklesImage);
          localStorage.setItem("wrinklesScore", result.wrinkles.wrinklesScore);
          localStorage.setItem("scarImage", result.scar.scarImage);
          localStorage.setItem("scarScore", result.scar.scarScore);
          localStorage.setItem("undereyeImage", result.undereye.undereyeImage);
          localStorage.setItem("undereyeScore", result.undereye.undereyeScore);
          localStorage.setItem("darkspotImage", result.darkspot.darkspotImage);
          localStorage.setItem("darkspotScore", result.darkspot.darkspotScore);
          localStorage.setItem("age", result.age);
          localStorage.setItem("gender", result.gender);
  
          // ✅ Update State & Navigate
          setBioMetrics(result);
          navigate("/result");
  
        } catch (error) {
          console.error("❌ Error Uploading Image:", error);
        }
      }, "image/jpeg");
    }
    setFadeOut(true);
  };
  
  
  // Retake the photo
  const retake = () => {
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
          className={`transform scale-x-[-1] w-full h-[350px] max-w-md rounded-3xl shadow-lg object-cover ${captured ? "hidden" : "block"}`}
        />
        <canvas
          ref={canvasRef}
          className="w-full h-auto max-w-md rounded-3xl shadow-lg object-cover"
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
