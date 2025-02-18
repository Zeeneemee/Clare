import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoadingScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          navigate('/result'); // ✅ Auto-redirect to result page
          return 100;
        }
        return oldProgress + 5; // Increase progress smoothly
      });
    }, 200);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-navy">
      <h1 className="text-4xl font-fanwood mb-8">Analyzing Your Skin...</h1>
      <div className="w-64 h-1 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-navy transition-all duration-200 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
