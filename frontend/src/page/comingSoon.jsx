// src/pages/ComingSoon.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
const [userImage, setUserImage] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const userImage = localStorage.getItem("processedImage");
    return setUserImage(userImage);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 ">
      <h1 className="font-fanwood text-5xl text-darkblue mb-4">Coming Soon</h1>
      <img src={userImage} alt="Coming Soon" className="rounded-md w-1/2 md:w-1/3 mb-6" />
      <p className="font-fanwood  text-lg text-gray-600 mb-8 text-center max-w-xl">
        We’re hard at work on something awesome. In the meantime, we’d love your feedback to make it even better!
      </p>
      <button
        onClick={() => navigate("/feedback")}
        className="font-lato font-light bg-darkblue text-white px-6 py-3 rounded-full hover:opacity-80 transition"
      >
        Give Feedback
      </button>
    </div>
  );
}
