import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as faceapi from "face-api.js";

export default function CameraCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayCanvasRef = useRef(null);
  const [state, setState] = useState({
    captured: false,
    fadeOut: false,
    fadeIn: 0,
    showConfirmation: false,
    showConsent: localStorage.getItem("termsAccepted") !== "true",
    consentGiven: false,
    lighting: "Analyzing...",
    facePosition: "No Face ❌",
    modelsLoaded: false,
    error: null
  });
  const navigate = useNavigate();
  const detectionInterval = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(prev => ({ ...prev, fadeIn: 1 }));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    initializeCamera();
    return () => cleanup();
  }, []);

  const initializeCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "user" } 
      });
      videoRef.current.srcObject = stream;
      await loadModels();
    } catch (error) {
      handleError("Camera initialization failed:", error);
    }
  };

  const loadModels = async () => {
    try {
      await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri(process.env.PUBLIC_URL + '/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri(process.env.PUBLIC_URL + '/models'),
        faceapi.nets.faceExpressionNet.loadFromUri(process.env.PUBLIC_URL + '/models')
      ]);
      setState(prev => ({ ...prev, modelsLoaded: true }));
      startDetection();
    } catch (error) {
      handleError("Model loading failed. Check models in /public/models", error);
    }
  };

  const startDetection = () => {
    detectionInterval.current = setInterval(async () => {
      if (!state.captured && videoRef.current?.readyState >= 4) {
        try {
          const detections = await faceapi.detectAllFaces(
            videoRef.current,
            new faceapi.SsdMobilenetv1Options({ 
              minConfidence: 0.5,
              inputSize: 320 
            })
          );
          const { isValid, facePosition } = checkConditions(detections);
          updateOverlay(detections, isValid);
          setState(prev => ({
            ...prev,
            lighting: calculateLighting(),
            facePosition,
            facePresent: isValid
          }));
        } catch (error) {
          console.error("Detection error:", error);
        }
      }
    }, 100);
  };

  const updateOverlay = (detections, isValid) => {
    const canvas = overlayCanvasRef.current;
    const video = videoRef.current;
    if (!video?.videoWidth) return;

    const ctx = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.4;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    ctx.lineWidth = 4;
    ctx.stroke();

    detections.forEach(detection => {
      const box = detection.box;
      ctx.strokeStyle = isValid ? "rgba(0, 255, 0, 0.5)" : "rgba(255, 0, 0, 0.5)";
      ctx.lineWidth = 4;
      ctx.strokeRect(box.x, box.y, box.width, box.height);
    });

    ctx.restore();
  };

  const checkConditions = (detections) => {
    const video = videoRef.current;
    if (!video) return { isValid: false, facePosition: "Face Undetected" };

    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    if (detections.length === 1) {
      const face = detections[0].box;
      const centerX = videoWidth / 2;
      const centerY = videoHeight / 2;
      const radius = Math.min(videoWidth, videoHeight) * 0.35;

      const faceCenterX = face.x + face.width / 2;
      const faceCenterY = face.y + face.height / 2;
      const buffer = 10;

      const distance = Math.sqrt(
        Math.pow(faceCenterX - centerX, 2) + 
        Math.pow(faceCenterY - centerY, 2)
      );
      const isCentered = distance <= radius + buffer;

      const targetDiameter = radius * 2;
      const minSize = targetDiameter * 0.6;
      const maxSize = targetDiameter * 0.9;
      const widthValid = face.width >= minSize && face.width <= maxSize;
      const heightValid = face.height >= minSize && face.height <= maxSize;

      const padding = Math.max(videoWidth * 0.05, 50);
      const withinFrame = face.x > padding && 
                         face.x + face.width < videoWidth - padding &&
                         face.y > padding && 
                         face.y + face.height < videoHeight - padding;

      const isValid = isCentered && widthValid && heightValid && withinFrame;
      
      return {
        isValid,
        facePosition: isValid ? "Good" : "Adjust"
      };
    }
    return {
      isValid: false,
      facePosition: detections.length > 1 ? "Multiple faces" : "Face Undetected"
    };
  };

  const calculateLighting = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const video = videoRef.current;
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let brightnessSum = 0;

    for (let i = 0; i < imageData.data.length; i += 4) {
      brightnessSum += (imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) / 3;
    }
    
    const avgBrightness = brightnessSum / (imageData.data.length / 4);
    if (avgBrightness < 80) return "Too Dark";
    if (avgBrightness > 180) return "Too Bright";
    return "Good";
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();

    // Added image storage logic
    const imageData = canvas.toDataURL('image/jpeg', 0.9);
    localStorage.setItem('image', imageData);
    
    setState(prev => ({ ...prev, captured: true, showConfirmation: true }));
  };

  const handleConsent = () => {
    localStorage.setItem("termsAccepted", "true");
    setState(prev => ({ ...prev, showConsent: false }));
  };

  const retake = () => {
    setState(prev => ({ ...prev, captured: false, showConfirmation: false }));
  };

  const proceed = () => {
    setState(prev => ({ ...prev, fadeOut: true }));
    setTimeout(() => navigate("/loading"), 1000);
  };

  const handleError = (message, error) => {
    console.error(message, error);
    setState(prev => ({ ...prev, error: error.message, modelsLoaded: false }));
  };

  const cleanup = () => {
    clearInterval(detectionInterval.current);
    videoRef.current?.srcObject?.getTracks().forEach(track => track.stop());
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center relative px-5 py-16 mt-12`}
         style={{ 
           transition: "opacity 1s ease-in-out", 
           opacity: state.fadeOut ? 0 : state.fadeIn
         }}>
      
      <div className="absolute inset-0 bg-cover bg-center blur-lg"
           style={{ backgroundImage: "url('/assets/bg5.png')" }}></div>

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
          playsInline
          className={`transform scale-x-[-1] w-full h-[350px] sm:h-[400px] max-w-md rounded-3xl shadow-lg object-cover ${
            state.captured ? "hidden" : "block"
          }`}
        />
        <canvas
          ref={canvasRef}
          className="w-full h-auto max-w-md rounded-3xl shadow-lg object-cover"
          style={{ display: state.captured ? "block" : "none" }}
        />
        <canvas
          ref={overlayCanvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ display: state.captured ? "none" : "block", zIndex: 10 }}
        />

        {state.showConsent && (
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
                  onChange={(e) => setState(prev => ({ ...prev, consentGiven: e.target.checked }))}
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
                disabled={!state.consentGiven}
                className={`font-lato font-light text-sm py-2 px-6 rounded-full mt-4 transition-colors ${
                  state.consentGiven
                    ? "bg-darkblue text-white hover:bg-opacity-80"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Accept and Continue
              </button>
            </div>
          </div>
        )}

        {!state.showConsent && !state.captured && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg z-20">
            <p className="font-lato text-sm text-white">
              Lighting: {state.lighting} | 
              Position: {state.facePosition}
            </p>
          </div>
        )}
      </div>

      {!state.showConsent && (state.showConfirmation ? (
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
          disabled={!state.facePresent || state.lighting !== "Good" || !state.modelsLoaded}
        >
          {state.modelsLoaded ? "Capture Image" : "Loading Models..."}
        </button>
      ))}

      {state.error && (
        <div className="font-lato font-light text-red-500 mt-4 z-10">
          Error: {state.error}. Please refresh the page.
        </div>
      )}
    </div>
  );
}