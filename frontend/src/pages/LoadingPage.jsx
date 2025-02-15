import { useState, useEffect } from "react";

const Results = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        let newProgress = prev + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-xl font-semibold mb-4">Analyzing Your Skin</h1>

      {/* Progress Text */}
      <div className="text-center font-semibold mb-4">
        Progress: <span>{Math.round(progress)}%</span>
      </div>

      {/* Progress Bar */}
      <div className="w-1/3 relative h-8 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Results;
