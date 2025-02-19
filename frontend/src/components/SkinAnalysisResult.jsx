import React from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

export default function SkinAnalysisResult() {
  const navigate = useNavigate();
  const capturedImage = localStorage.getItem("image");

  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center">
    {capturedImage ? (
      <>
        <h1 className="text-2xl font-lato">Your Skin Analysis Result</h1>
        {capturedImage ? (
          <img src={capturedImage} alt="Captured Skin" className="w-64 h-64 mt-4 rounded-lg shadow-lg" />
        ) : (
          <p>No image captured.</p>
        )}
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Go Back
        </button>
      </>
    ) : (
      <LoadingScreen />
    )}

      
    </div>
  );
}
