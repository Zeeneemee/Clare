import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as faceapi from "face-api.js";
import LoadingScreen from "../components/ui/LoadingScreen";


export default function CameraCapture() {
    const navigate = useNavigate();
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);
  
    const [state, setState] = useState({
      captured: false,
      fadeIn: false,
      showConfirmation: false,
      isLoading: false,
      error: null,
      lightingValid: false,
      distanceValid: false,
      lightingMessage: "",
      distanceMessage: "",
      modelsLoaded: false
    });
    const [capturedDataUrl, setCapturedDataUrl] = useState(null);
  
    // Load face-api models on mount
    useEffect(() => {
      const loadModels = async () => {
        try {
          await faceapi.nets.tinyFaceDetector.loadFromUri(
            process.env.PUBLIC_URL + "/models"
          );
          setState(prev => ({ ...prev, modelsLoaded: true }));
        } catch (err) {
          console.error("Model load error", err);
          setState(prev => ({ ...prev, error: "Failed to load models" }));
        }
      };
      loadModels();
      
    }, []);
  
    // Validate image once selected
    const validateImage = async dataUrl => {
      const img = new Image();
      img.src = dataUrl;
      img.onload = async () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
  
        // Lighting check
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let sum = 0;
        for (let i = 0; i < imageData.data.length; i += 4) {
          sum +=
            (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
        }
        const avg = sum / (imageData.data.length / 4);
        let lightingValid = true;
        let lightingMessage = "Lighting is Good";
        if (avg < 80) {
          lightingValid = false;
          lightingMessage = "Too Dark";
        }
        if (avg > 180) {
          lightingValid = false;
          lightingMessage = "Too Bright";
        }
  
        // Distance check via face-api
        let distanceValid = false;
        let distanceMessage = "";
        try {
          const detection = await faceapi.detectSingleFace(
            canvas,
            new faceapi.TinyFaceDetectorOptions()
          );
          if (detection) {
            const { width, height } = detection.box;
            const size = Math.max(width, height);
            const minSize = Math.min(canvas.width, canvas.height) * 0.3;
            const maxSize = Math.min(canvas.width, canvas.height) * 0.7;
            distanceValid = size >= minSize && size <= maxSize;
            distanceMessage = distanceValid
              ? "Distance is Good"
              : "Move closer or farther away";
          } else {
            distanceMessage = "No face detected";
          }
        } catch (err) {
          console.error("Face detection error", err);
          distanceMessage = "Detection failed";
        }
  
        setState(prev => ({
          ...prev,
          lightingValid,
          distanceValid,
          lightingMessage,
          distanceMessage
        }));
      };
    };
  
    // Trigger hidden file input
    const openFilePicker = () => {
      fileInputRef.current?.click();
    };
    const handleConsent = () => {
        localStorage.setItem("termsAccepted", "true");
        setState(prev => ({ ...prev, showConsent: false }));
      };
    // Handle file selection
    const handleImageSelected = e => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result;
        setCapturedDataUrl(dataUrl);
        setState(prev => ({
          ...prev,
          captured: true,
          showConfirmation: true,
          fadeIn: true
        }));
        validateImage(dataUrl);
      };
      reader.readAsDataURL(file);
    };
  
    const retake = () => {
      setCapturedDataUrl(null);
      setState(prev => ({
        ...prev,
        captured: false,
        showConfirmation: false,
        fadeIn: false,
        lightingValid: false,
        distanceValid: false,
        lightingMessage: "",
        distanceMessage: ""
      }));
    };

  const proceed = async () => {
    if (state.captured) {
      setState(prev => ({ ...prev, isLoading: true, fadeOut: true }));
      const canvas = canvasRef.current;
      canvas.toBlob(async (blob) => {
        const formData = new FormData();
        formData.append("image", blob, "captured-image.jpg");
        try {
          const response = await fetch("https://clare-nrnl.onrender.com/upload", {
            method: "POST",
            body: formData,
          });
          const result = await response.json();
          console.log("✅ Processed Result:", result);
          // Store processed data.
          localStorage.setItem("processedImage", result.processedImage);
          localStorage.setItem("acneScore", result.acne.acneScore);
          localStorage.setItem("wrinklesScore", result.wrinkles.wrinklesSeverity);
          localStorage.setItem("wrinklePercentage",result.wrinkles.wrinklesPercentage)
          localStorage.setItem("scarScore", result.scar.scarScore);
          localStorage.setItem("undereyeScore", result.undereye.undereyeScore);
          localStorage.setItem("undereyeLabel", result.undereye.undereyeLabel);
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

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 ">
    <canvas ref={canvasRef} className="hidden" />
      {state.isLoading ? (
        <LoadingScreen/>
      ) : (
        <div
          className="min-h-screen flex flex-col items-center relative w-full mt-12 py-16 px-5"
          style={{
            transition: "opacity 1s ease-in-out",
            opacity: state.fadeOut ? 0 : state.fadeIn,
          }}
        >
          
          <h1 className="font-fanwood text-3xl sm:text-4xl text-darkblue mb-4 z-10 relative">
            Clare Analysis Model
          </h1>
          <p className="font-lato font-light italic text-sm sm:text-base text-gray-500 text-center max-w-3xl mb-6 z-10 relative">
            Our Clare Analysis Model utilizes cutting-edge AI technology to analyze your skin and generate a detailed report with personalized insights.
          </p>
          

         {/* // upload container */}
          <div className="flex flex-col items-center justify-center w-full mt-6">
          <div>
          {state.showConsent && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl overflow-hidden z-10">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center  max-h-[350px] sm:max-h-[400px] overflow-y-auto">
                  <h2 className="font-lato text-lg font-normal text-darkblue mb-4">
                    Biometric Data Processing Consent
                  </h2>
                  <div className="font-lato font-light text-xs text-gray-700 text-left space-y-4">
                    <p>
                      The Clare Skin Analysis Service ("Clare") may collect, process, and store biometric identifiers including facial geometry, skin characteristics, and related physiological data ("Biometric Data") through our AI-powered diagnostic platform.
                    </p>
                    <p>
                      <strong>Purpose of Collection:</strong> Your Biometric Data will be used exclusively to generate personalized skin health analysis reports, provide AI-driven treatment recommendations, improve diagnostic algorithms through secure processes, and maintain health records for your clinical history.
                    </p>
                    <p>
                      <strong>Data Management:</strong> All biometric information will be encrypted during storage and transmission, retained for a maximum period of 24 months from last access, and anonymized for research and development purposes.
                    </p>
                    <p>
                      Your consent is governed by our{" "}
                      <button onClick={() => navigate("/privacy")} className="text-blue-600 underline mx-1">
                        Privacy Policy
                      </button>{" "}
                      and{" "}
                      <button onClick={() => navigate("/terms")} className="text-blue-600 underline mx-1">
                        Terms of Service
                      </button>, which outline your rights under applicable data protection regulations.
                    </p>
                  </div>
                  <div className="flex items-start mt-4 mb-2">
                    <input
                      type="checkbox"
                      id="biometricConsent"
                      onChange={(e) =>
                        setState(prev => ({ ...prev, consentGiven: e.target.checked }))
                      }
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="biometricConsent" className="font-lato text-xs text-gray-700 text-left">
                      I hereby explicitly authorize Clare to process my Biometric Data as described above. I affirm that this consent is voluntary and informed, understanding that service access requires data processing and that I may withdraw consent through account deletion.
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
          </div>
            <div className="border-[1px] border-solid border-[#AEAEB2] rounded-lg phone:w-[350px] tablet:w-[400px] laptop:w-[50%]  h-[400px] sm:h-[500px] flex flex-col items-center justify-center relative">
            
                <div className={`${capturedDataUrl ? "":"border-[1px]  border-dashed border-[#AEAEB2]"} rounded-md phone:w-[300px] tablet:w-[350px] laptop:w-[80%] h-[80%]  flex flex-col items-center justify-center`}>
                {capturedDataUrl ? (
                    // 📸 Show the uploaded image full‑bleed
                    <img
                    src={capturedDataUrl}
                    alt="Uploaded"
                    className="object-cover w-full h-full transform scale-x-[-1]"
                    />


                ):(
                <div className="flex flex-col items-center justify-center gap-5">
                
                <div class="relative inline-block w-[100px] h-[100px]">
                    <img
                        src="assets/Ellipse 31.webp"
                        alt="ellipse"
                        class="absolute inset-0 w-full h-full"
                    />
                    <img
                        src="assets/mdi_arrow-up-bold.webp"
                        alt="arrow"
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[59px] h-[59px]"
                    />
                    </div>
                    
                    <p className="font-fanwood text-[24px]">Upload or Take Photo</p>   
                    <input
                        type="file"
                        accept="image/*"
                        capture="user"
                        ref={fileInputRef}
                        onChange={handleImageSelected}
                        className="hidden"
                        id="fileInput"
                    />
                        <label
                        htmlFor="fileInput"
                        className=" border-solid border-[1px] border-[#000000] text-black font-lato font-light text-sm sm:text-base px-6 py-3 rounded-full cursor-pointer hover:opacity-80 transition"
                        >
                        Select Photo
                        </label>
                </div>
                )}      
                </div>
                {state.captured && (
                    <div className="flex justify-center items-center relative top-2 gap-10">
                    <div className="flex justify-center items-center w-[100px] gap-2">
                        <label className="font-lato phone:text-[14px]">Lighting: </label>
                        <div className={`${state.lightingValid ? "bg-[#D1FADF]" : "bg-[#FF8080]"} py-1 px-4 w-full h-full rounded-md`}>
                        <p className={`font-lato phone:text-[14px] ${state.lightingValid ? "text-[#039855]" : "text-[#BD0101]"}`}>
                            {state.lightingValid ? "okay" : "adjust"}
                        </p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center w-[100px] gap-2">
                        <label className="font-lato phone:text-[14px]">Distance: </label>
                        <div className={`${state.distanceValid ? "bg-[#D1FADF]" : "bg-[#FF8080]"} py-1 px-4 w-full h-full rounded-md`}>
                        <p className={`font-lato phone:text-[14px] ${state.distanceValid ? "text-[#039855]" : "text-[#BD0101]"}`}>
                            {state.distanceValid ? "okay" : "adjust"}
                        </p>
                        </div>
                    </div>
                    </div>
                )}
          </div>
        </div>
        {!state.showConsent &&
            (state.showConfirmation && (
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
                    disabled={!(state.lightingValid && state.distanceValid)}
                    onClick={proceed}
                    className={`font-lato text-lg font-light ${
                        state.lightingValid && state.distanceValid ? "bg-[#14213D]" : "bg-[#808080] cursor-not-allowed"
                    } text-white py-3 px-12 rounded-full transition-colors duration-300 hover:opacity-80`}
                    >
                    Proceed
                    </button>
                </div>
              </div>
            ) 
            )}

        </div>
      )}
    </div>
  );
}