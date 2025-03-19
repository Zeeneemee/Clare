import React, { useEffect, useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as faceapi from "face-api.js";
import LoadingScreen from "../components/ui/LoadingScreen";
import Consent from "../components/ui/consent";

export default function CameraCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayCanvasRef = useRef(null);
  const detectionInterval = useRef(null);
  const navigate = useNavigate();

  const [state, setState] = useState({
    captured: false,
    fadeOut: false,
    fadeIn: 0,
    showConfirmation: false,
    showConsent: localStorage.getItem("termsAccepted") !== "true",
    consentGiven: false,
    isLoading: false,
    lighting: "Analyzing...",
    facePosition: "No Face ❌",
    modelsLoaded: false,
    facePresent: false,
    error: null,
  });

  // Fade in effect on mount.
  useEffect(() => {
    const timer = setTimeout(() => {
      setState(prev => ({ ...prev, fadeIn: 1 }));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const checkConditions = useCallback((detections) => {
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
      const buffer = 30;

      const distance = Math.sqrt(
        Math.pow(faceCenterX - centerX, 2) + Math.pow(faceCenterY - centerY, 2)
      );
      const isCentered = distance <= radius + buffer;

      const targetDiameter = radius * 2;
      const minSize = targetDiameter * 0.6;
      const maxSize = targetDiameter * 0.9;
      const widthValid = face.width >= minSize && face.width <= maxSize;
      const heightValid = face.height >= minSize && face.height <= maxSize;

      const padding = Math.max(videoWidth * 0.05, 50);
      const withinFrame =
        face.x > padding &&
        face.x + face.width < videoWidth - padding &&
        face.y > padding &&
        face.y + face.height < videoHeight - padding;

      const isValid = isCentered && widthValid && heightValid && withinFrame;

      return {
        isValid,
        facePosition: isValid ? "Good" : "Adjust",
      };
    }
    return {
      isValid: false,
      facePosition: detections.length > 1 ? "Multiple faces" : "Face Undetected",
    };
  }, []);

  const calculateLighting = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.videoWidth || !video.videoHeight) {
      return "Analyzing...";
    }
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let brightnessSum = 0;
    for (let i = 0; i < imageData.data.length; i += 4) {
      brightnessSum += (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
    }
    const avgBrightness = brightnessSum / (imageData.data.length / 4);
    if (avgBrightness < 80) return "Too Dark";
    if (avgBrightness > 180) return "Too Bright";
    return "Good";
  }, []);

  const updateOverlay = useCallback((detections, isValid) => {
    const canvas = overlayCanvasRef.current;
    const video = videoRef.current;
    if (!video?.videoWidth) return;

    const ctx = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw circular guideline.
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.4;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    ctx.lineWidth = 4;
    ctx.stroke();

    // Draw boxes for detected faces.
    detections.forEach(detection => {
      const box = detection.box;
      ctx.strokeStyle = isValid ? "rgba(0, 255, 0, 0.5)" : "rgba(255, 0, 0, 0.5)";
      ctx.lineWidth = 4;
      ctx.strokeRect(box.x, box.y, box.width, box.height);
    });
  }, []);

  const startDetection = useCallback(() => {
    detectionInterval.current = setInterval(async () => {
      if (!state.captured && videoRef.current?.readyState >= 4) {
        try {
          const detections = await faceapi.detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions({ scoreThreshold: 0.5, inputSize: 320 })
          );
          const { isValid, facePosition } = checkConditions(detections);
          updateOverlay(detections, isValid);
          setState(prev => ({
            ...prev,
            lighting: calculateLighting(),
            facePosition,
            facePresent: isValid,
          }));
        } catch (error) {
          console.error("Detection error:", error);
        }
      }
    }, 100);
  }, [state.captured, checkConditions, updateOverlay, calculateLighting]);

  const loadModels = useCallback(async () => {
    try {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(process.env.PUBLIC_URL + "/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri(process.env.PUBLIC_URL + "/models"),
        faceapi.nets.faceExpressionNet.loadFromUri(process.env.PUBLIC_URL + "/models"),
      ]);
      setState(prev => ({ ...prev, modelsLoaded: true }));
      startDetection();
    } catch (error) {
      handleError("Model loading failed. Check models in /public/models", error);
    }
  }, [startDetection]);

  const initializeCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "user" } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch(error => {
          console.error("Error playing video:", error);
        });
      }
      await loadModels();
    } catch (error) {
      handleError("Camera initialization failed:", error);
    }
  }, [loadModels]);

  // Initialize camera when consent has been given.
  useEffect(() => {
    if (!state.showConsent) {
      initializeCamera();
      return () => cleanup();
    }
  }, [state.showConsent]);

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
  
    // Get intrinsic dimensions
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;
    const aspectRatio = videoWidth / videoHeight;
  
    // Set canvas dimensions with correct aspect ratio
    canvas.width = videoWidth;
    canvas.height = videoHeight;
    
    // Store aspect ratio in canvas dataset
    canvas.dataset.aspectRatio = aspectRatio;
  
    // Mirror and draw
    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
    ctx.restore();
  
    setState(prev => ({ ...prev, captured: true, showConfirmation: true }));
  };
  

  const handleConsent = () => {
    localStorage.setItem("termsAccepted", "true");
    setState(prev => ({ ...prev, showConsent: false }));
  };

  const retake = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Reset canvas transformations
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset to identity matrix
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Update state
    setState(prev => ({ ...prev, captured: false, showConfirmation: false }));

    // Restart the camera and detection
   
  };

  const proceed = async () => {
    if (state.captured) {
      setState(prev => ({ ...prev, isLoading: true, fadeOut: true }));
      const canvas = canvasRef.current;
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
          // Store processed data.
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
          setState(prev => ({ ...prev, isLoading: false }));
          navigate("/result");
        } catch (error) {
          console.error("❌ Error Uploading Image:", error);
          setState(prev => ({ ...prev, isLoading: false }));
        }
      }, "image/jpeg");
    }
  };

  const handleError = (message, error) => {
    console.error(message, error);
    setState(prev => ({ ...prev, error: error.message, modelsLoaded: false }));
  };

  const cleanup = () => {
    clearInterval(detectionInterval.current);
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
    setState(prev => ({ ...prev, captured: false, showConfirmation: false }));
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.display = "none";
    }
    if (video) {
      video.style.display = "block";
      navigator.mediaDevices
        .getUserMedia({
          video: { facingMode: "user" } 
        })
        .then((stream) => {
          video.srcObject = stream;
          video.play();
        })
        .catch((error) =>
          console.error("Error restarting camera stream:", error)
        );
    }
  };

  return (
    <div>
      {state.isLoading ? (
        <LoadingScreen />
      ) : (
        <div
          className="min-h-screen flex flex-col items-center justify-center relative px-5 py-16 mt-5"
          style={{
            transition: "opacity 1s ease-in-out",
            opacity: state.fadeOut ? 0 : state.fadeIn,
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
            Our Clare Analysis Model utilizes cutting-edge AI technology to analyze your skin and generate a detailed report with personalized insights.
          </p>

          <div className="relative w-full flex justify-center itmes-center max-w-md mt-8 z-10"
          >
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              disablePictureInPicture
              className={`w-full h-[350px] scale-x-[-1] sm:h-[400px] max-w-md rounded-3xl shadow-lg object-cover ${
                state.captured ? "hidden" : "block "
              }`}
            />
            <canvas
              ref={canvasRef}
              className="w-full h-full max-w-md rounded-3xl shadow-lg object-cover"
              style={{ 
              display: state.captured ? "block" : "none",
              height: 'auto',
              aspectRatio: canvasRef.current?.dataset.aspectRatio || 1,
            }}
            />
            <canvas
              ref={overlayCanvasRef}
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{ display: state.captured ? "none" : "block", zIndex: 10 }}
            />

            {state.showConsent && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl overflow-hidden">
                <Consent state={state} setState={setState} onClick={handleConsent}/>
              </div>
            )}

            {!state.showConsent && !state.captured && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg z-20">
                <p className="font-lato text-sm text-white">
                  Lighting: {state.lighting} | Position: {state.facePosition}
                </p>
              </div>
            )}
          </div>

          {!state.showConsent &&
            (state.showConfirmation ? (
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
                className={`font-lato text-sm sm:text-lg font-light ${
                  state.facePresent && state.lighting === "Good" && state.modelsLoaded
                    ? "bg-[#14213D]"
                    : "bg-[#808080]"
                } text-white py-3 px-12 rounded-full transition-colors duration-300 hover:opacity-80 mt-8 z-10 relative`}
                disabled={
                  !state.facePresent || state.lighting !== "Good" || !state.modelsLoaded
                }
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
      )}
    </div>
  );
}