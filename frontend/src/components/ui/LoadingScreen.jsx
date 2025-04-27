import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingScreen = ({ isLoaded }) => {
  const [fadeIn, setFadeIn] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeIn(1), 100); // Fade in after 100ms

    if (isLoaded) {
      const navigationTimer = setTimeout(() => {
        navigate("/result");
      }, 500); // Short delay for smoother transition once loaded

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(navigationTimer);
      };
    }

    return () => clearTimeout(fadeTimer);
  }, [isLoaded, navigate]);

  return (
    <div
      className="h-screen flex flex-col items-center justify-center mt-[-50px] transition-opacity duration-1000 ease-in-out"
      style={{ opacity: fadeIn }}
    >
      <h1 className="text-xl sm:text-3xl font-serif text-darkblue mb-6 sm:mb-8 text-center">
        Analyzing Your Skin
      </h1>
      <div className="text-base sm:text-lg font-light text-gray-500 font-sans mb-4 text-center">
        Loading...
      </div>
      <div className="relative w-12 h-12">
        <div className="absolute w-full h-full border-4 border-darkblue border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
