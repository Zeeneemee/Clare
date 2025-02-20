import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SkinAnalysisLanding({ scrollY = 0 }) {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(1), 100); // Apply fade-in effect after 100ms
    return () => clearTimeout(timer);
  }, []); // Ensures it only runs on mount

  const scrollOpacity = Math.max(1 - scrollY / 300, 0); // Ensures opacity is not negative

  return (
    <header
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative transition-opacity duration-1000 ease-in-out"
      style={{
        backgroundImage: "url('/assets/bg6.png')",
        opacity: fadeIn * scrollOpacity, 
      }}
    >
      <div className="text-center text-white z-10">
        <h1
          className="text-4xl font-fanwood font-light mb-4 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: fadeIn }}
        >
          Understand Your Skin Like Never Before
        </h1>
        <p
          className="font-lato italic text-xl text-white mt-2 font-light transition-opacity duration-1000 ease-in-out"
          style={{ opacity: fadeIn }}
        >
          Upload a photo and let our AI analyze your skin for personalized recommendations.
        </p>
        <button
          className="mt-12 px-16 py-6 border-2 border-white rounded-full font-lato text-xl font-light hover:bg-white hover:text-navy transition-all duration-300"
          onClick={() => navigate("/camera")}
          style={{ opacity: fadeIn }}
        >
          Upload Your Photo
        </button>
      </div>
    </header>
  );
}
