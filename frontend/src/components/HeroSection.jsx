import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection({ scrollY }) {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(0);
  const scrollOpacity = Math.max(1 - scrollY / 300, 0);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(1), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative px-6 pt-24 pb-24 sm:px-12 sm:pt-32 sm:pb-32"
      style={{
        backgroundImage: "url('/assets/bg3.png')",
        opacity: fadeIn * scrollOpacity,
        transition: "opacity 0.4s ease-in-out",
      }}
    >
      <div className="text-center text-white z-10">
        {/* Title */}
        <h1 className="font-fanwood font-light text-8xl sm:text-[250px]">
          claré
        </h1>

        {/* Slogan for Mobile */}
        <p className="font-lato italic text-lg sm:text-xl mt-[-10px] sm:mt-6 font-light sm:hidden">
          Understand Your Skin with <br />
          AI-Powered Insights
        </p>

        {/* Slogan for Desktop */}
        <p className="font-lato italic text-lg sm:text-xl sm:mt-[-28px] font-light hidden sm:block">
          Understand Your Skin with AI-Powered Insights
        </p>

        {/* Button */}
        <button
          className="mt-12 sm:mt-16 px-8 sm:px-16 py-4 sm:py-6 border-2 border-white rounded-full font-lato text-lg sm:text-xl font-light 
             hover:bg-white hover:bg-opacity-80 transition-all duration-300"
          onClick={() => navigate("/skinanalysis")}
        >
          Analyze Your Skin Now
        </button>
      </div>
    </header>
  );
}
