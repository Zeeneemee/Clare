import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        let newProgress = prev + Math.random() * 20;

        // If progress reaches or exceeds 100, stop the interval and set progress to 100
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }

        return newProgress;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Navigate to /result if progress is between 90 and 120
    if (progress >= 90 && progress <= 120) {
      navigate("/result");
    }
  }, [progress, navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-xl font-fanwood text-[48px] font-normal font-semibold mb-4">
        Analyzing Your Skin
      </h1>

      {/* Progress Text */}
      <div className="text-center font-semibold mb-4">
        Progress: <span>{Math.round(progress)}%</span>
      </div>

      {/* Progress Bar */}
      <div className="w-1/3 relative h-4 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gray-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
