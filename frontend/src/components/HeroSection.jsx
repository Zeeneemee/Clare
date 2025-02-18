import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

export default function HeroSection({ scrollY }) {
  const navigate = useNavigate(); // ✅ Initialize navigate function
  const [fadeIn, setFadeIn] = useState(0); 
  const scrollOpacity = Math.max(1 - scrollY / 300, 0);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(1), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/assets/bg3.png')",
        opacity: fadeIn * scrollOpacity,
        transition: 'opacity 1s ease-in-out',
      }}
    >
      <div className="text-center text-white z-10">
        <h1 className="text-[250px] font-fanwood font-light mb-[-40px]">
          claré
        </h1>
        <p className="font-lato italic text-xl text-white mt-[-90px] font-light">
          Understand Your Skin with AI-Powered Insights
        </p>
        <button
          className="mt-16 px-16 py-6 border-2 border-white rounded-full font-lato text-xl font-light
                   hover:bg-white hover:text-navy transition-all duration-300"
                   onClick={() => navigate('/camera')} // ✅ Navigates to /loading
        >
          Analyze Your Skin Now
        </button>
      </div>
    </header>
  );
}
