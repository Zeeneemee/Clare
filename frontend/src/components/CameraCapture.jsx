
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CameraCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [captured, setCaptured] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isRetaking, setIsRetaking] = useState(false);
  const [showConsent, setShowConsent] = useState(true); // Show consent first
  const [consentGiven, setConsentGiven] = useState(false);
  const [bioMetrics,setBioMetrics] = useState([])
 
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("processedImage"); // Clear previous image

    // Check if the user has already accepted terms
    const termsAccepted = localStorage.getItem("termsAccepted") === "true";
    if (termsAccepted) {
      setShowConsent(false); // Hide consent if accepted before
    }

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error("Camera access denied:", err));
  }, []);

  const handleConsent = () => {
    localStorage.setItem("termsAccepted", "true"); // Store acceptance
    setShowConsent(false); // Hide consent popup
  };

  const captureImage = () => {
    setCaptured(true);
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

    const video = videoRef.current;
    video.style.display = "block";
    video.style.display = "block";
    const canvas = canvasRef.current;
    canvas.style.display = "none";
    canvas.style.display = "none";
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
      <h1 className="font-fanwood text-3xl sm:text-4xl text-darkblue mb-4 z-10 relative">
        Clare Analysis Model
      </h1>
      <p className="font-lato font-light italic text-sm sm:text-base text-gray-500 text-center max-w-3xl mb-6 z-10 relative">
        Our Clare Analysis Model utilizes cutting-edge AI technology to analyze
        your skin and generate a detailed report with personalized insights.
      </p>

      <div className="relative w-full max-w-md mt-8 z-10">
        {/* Camera Feed */}
        <video
          ref={videoRef}
          autoPlay
          className={`transform scale-x-[-1] w-full h-[350px] sm:h-[400px] max-w-md rounded-3xl shadow-lg object-cover ${captured ? "hidden" : "block"}`}
      
        />
        <canvas
          ref={canvasRef}
          className="w-full h-auto max-w-md rounded-3xl shadow-lg object-cover"
          style={{ display: "none" }}
        />

        {/* Consent Popup Over Camera */}
        {showConsent && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm">
              <h2 className="text-xl font-semibold">Notice and Consent</h2>
              <p className="text-sm text-gray-600 mt-2">
                This AI simulation service may process, analyze, and collect
                your facial data. By checking the box, you consent to this
                processing.
              </p>
              <div className="mt-4 flex items-center justify-center">
                <input
                  type="checkbox"
                  id="consent"
                  onChange={(e) => setConsentGiven(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <button
                    className="text-blue-500 underline"
                    onClick={() => navigate("/privacy")}
                  >
                    Privacy Policy
                  </button>{" "}
                  and{" "}
                  <button
                    className="text-blue-500 underline"
                    onClick={() => navigate("/terms")}
                  >
                    Terms of Service
                  </button>
                  .
                </label>
              </div>
              <button
                onClick={handleConsent}
                disabled={!consentGiven}
                className={`mt-4 py-2 px-6 rounded-full text-white ${
                  consentGiven
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Capture & Confirmation Buttons */}
      {!showConsent &&
        (showConfirmation ? (
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
          <button
            onClick={captureImage}
            className="font-lato text-sm sm:text-lg font-light bg-[#14213D] text-white py-3 px-12 rounded-full transition-colors duration-300 hover:opacity-80 mt-8 z-10 relative"
          >
            Capture Image
          </button>
        ))}
    </div>
  );
}
