import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [fadeIn, setFadeIn] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(1), 100); // Fade in after 100ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        let newProgress = prev + Math.random() * 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate("/result"), 500);
          return 100;
        }
        return newProgress;
      });
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div
      className="h-screen flex flex-col items-center justify-center mt-[-50px] transition-opacity duration-1000 ease-in-out"
      style={{ opacity: fadeIn }}
    >
      <h1 className="text-xl sm:text-3xl font-serif text-darkblue mb-6 sm:mb-8 text-center">
        Analyzing Your Skin
      </h1>
      <div className="text-base sm:text-lg font-light text-gray-500 font-sans mb-4 text-center">
        Progress: <span>{Math.round(progress)}%</span>
      </div>
      <div className="w-[150px] sm:w-[280px] h-3 bg-gray-200 rounded-full overflow-hidden relative">
        <div
          className="absolute top-0 left-0 h-full bg-darkblue transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
