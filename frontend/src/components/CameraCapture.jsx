import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CameraCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [captured, setCaptured] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isRetaking, setIsRetaking] = useState(false);
  const [showConsent, setShowConsent] = useState(true);
  const [consentGiven, setConsentGiven] = useState(false);
  const [fadeIn, setFadeIn] = useState(0);  // Fade-in state
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("image");
    const termsAccepted = localStorage.getItem("termsAccepted") === "true";
    if (termsAccepted) {
      setShowConsent(false);
    }

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error("Camera access denied:", err));

    // Fade-in effect after component mounts
    const timer = setTimeout(() => setFadeIn(1), 100); // Apply fade-in effect after 100ms
    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []);

  const handleConsent = () => {
    localStorage.setItem("termsAccepted", "true");
    setShowConsent(false);
  };

  const captureImage = () => {
    setCaptured(true);
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.save();
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    video.style.display = "none";
    canvas.style.display = "block";
    setShowConfirmation(true);
  };

  const proceed = async () => {
    if (captured && !isRetaking) {
      const canvas = canvasRef.current;
      canvas.toBlob(async (blob) => {
        const formData = new FormData();
        formData.append("image", blob, "captured-image.jpg");

        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });

        navigate("/result");
        const result = await response.json();
        if (result.dataURL) {
          localStorage.setItem("image", result.dataURL);
        }
      }, "image/jpeg");
    }
    setFadeOut(true);
  };

  const retake = () => {
    setCaptured(false);
    setShowConfirmation(false);
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
        opacity: fadeOut ? 0 : fadeIn,  // Apply fade-in effect based on fadeIn state
      }}
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

        {showConsent && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl overflow-hidden">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center w-full max-h-[350px] sm:max-h-[400px] overflow-y-auto">
              <h2 className="font-lato text-lg font-normal text-darkblue mb-4">
                Biometric Data Processing Consent
              </h2>
              
              <div className="font-lato font-light text-xs text-gray-700 text-left space-y-4">
                <p>
                  The Clare Skin Analysis Service ("Clare") may collect, process, 
                  and store biometric identifiers including facial geometry, 
                  skin characteristics, and related physiological data 
                  ("Biometric Data") through our AI-powered diagnostic platform.
                </p>

                <p>
                  <strong>Purpose of Collection:</strong> Your Biometric Data will be 
                  used exclusively to generate personalized skin health analysis reports, 
                  provide AI-driven treatment recommendations, improve diagnostic 
                  algorithms through secure processes, and maintain health records 
                  for your clinical history.
                </p>

                <p>
                  <strong>Data Management:</strong> All biometric information will be 
                  encrypted during storage and transmission, retained for a maximum 
                  period of 24 months from last access, and anonymized for 
                  research and development purposes.
                </p>

                <p>
                  Your consent is governed by our{" "}
                  <button 
                    onClick={() => navigate('/privacy')}
                    className="text-blue-600 underline mx-1"
                  >
                    Privacy Policy
                  </button> 
                  and{" "}
                  <button
                    onClick={() => navigate('/terms')}
                    className="text-blue-600 underline mx-1"
                  >
                    Terms of Service
                  </button>, 
                  which outline your rights under applicable data protection regulations.
                </p>
              </div>

              <div className="flex items-start mt-4 mb-2">
                <input
                  type="checkbox"
                  id="biometricConsent"
                  onChange={(e) => setConsentGiven(e.target.checked)}
                  className="mt-1 mr-3"
                />
                <label htmlFor="biometricConsent" className="font-lato text-xs text-gray-700 text-left">
                  I hereby explicitly authorize Clare to process my Biometric Data 
                  as described above. I affirm that this consent is voluntary and 
                  informed, understanding that service access requires data processing 
                  and that I may withdraw consent through account deletion.
                </label>
              </div>

              <button
                onClick={handleConsent}
                disabled={!consentGiven}
                className={`font-lato font-light text-sm py-2 px-6 rounded-full mt-4 transition-colors ${
                  consentGiven
                    ? "bg-darkblue text-white hover:bg-opacity-80"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Accept and Continue
              </button>
            </div>
          </div>
        )}
      </div>

      {!showConsent &&
        (showConfirmation ? (
          <div className="mt-8 z-10 relative">
            <p className="font-lato font-light text-lg text-darkblue mb-4">
              Do you want to proceed with this image?
            </p>
            <div className="flex gap-4">
              <button
                onClick={retake}
                className="font-lato text-lg font-light bg-[#ff4d4d] text-white py-3 px-12 rounded-full transition-all duration-300 hover:opacity-80"
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
