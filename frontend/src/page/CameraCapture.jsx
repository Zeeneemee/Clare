
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

export default function CameraCapture() {
 
  const webcamRef = useRef(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);  const [isRetaking, setIsRetaking] = useState(false);
  const [showConsent, setShowConsent] = useState(true); // Show consent first
  const [consentGiven, setConsentGiven] = useState(false);
  const videoConstraints = {
    width: 1600, // 4K resolution
    height: 900,
    facingMode: "user",
  };
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("processedImage");

    const termsAccepted = localStorage.getItem("termsAccepted") === "true";
    if (termsAccepted) {
      setShowConsent(false);
    }

    let stream = null;
    
    if (!showConsent) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((userStream) => {
          stream = userStream;
        })
        .catch((err) => console.error("Camera access denied:", err));
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [showConsent]);

  const handleConsent = () => {
    localStorage.setItem("termsAccepted", "true"); // Store acceptance
    setShowConsent(false); // Hide consent popup
  };

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot(); // Base64 format
    if (!imageSrc) return;

    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      // Manually draw the image to a high-res canvas
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Set Canvas Size to match iPhone's high-resolution cameras (12 MP)
      canvas.width = 4032; // iPhone 12+ Front Camera
      canvas.height = 3024;

      // Upscale the image and draw to canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Convert to Base64 (or Blob for uploads)
      const highResImage = canvas.toDataURL("image/jpeg", 1.0); // Max quality
      setCapturedImage(highResImage);
      setShowConfirmation(true);
    };
  };
  
  // Proceed to the loading screen with fade-out effect
  const proceed = async () => {
    if ( !isRetaking) {
      // ✅ Convert Canvas to Blob
      const blob = await fetch(captureImage).then(res=>res.blob())
      const formData = new FormData();
      formData.append("image", blob, "captured-image.jpg");
      console.log(formData)

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
          localStorage.setItem("undereyeLabel", result.undereye.undereyeLabel);

          localStorage.setItem("darkspotImage", result.darkspot.darkspotImage);
          localStorage.setItem("darkspotScore", result.darkspot.darkspotScore);
          localStorage.setItem("age", result.age);
          localStorage.setItem("gender", result.gender);
          navigate("/result");
  
        } catch (error) {
          console.error("❌ Error Uploading Image:", error);
        }
          }
      setFadeOut(true)
  }
      
    
  
  // Retake the photo
  const retake = () => {
    setCapturedImage(null);
    setShowConfirmation(false);
  };
  

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center relative px-5 py-16 mt-5`}
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

      <div className="relative w-full mt-8 z-10 flex flex-col justify-center items-center">
      {!capturedImage ? (
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          height={720}
          className="rounded-[10px] "
          mirrored={true}
          screenshotQuality={1}
        />
      ) : (
        <img src={capturedImage} alt="Captured" className="rounded-lg shadow-lg" />
      )}
       

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