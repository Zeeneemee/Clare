import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const NightRevitaliserMen = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [fadeIn, setFadeIn] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(1), 100); // Apply fade-in effect after 100ms
    return () => clearTimeout(timer);
  }, []); // Ensures it only runs on mount

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-white text-black p-10"
      style={{ opacity: fadeIn, transition: "opacity 1s ease-in-out" }} // Apply fade-in style
    >
      <div className="flex max-w-6xl w-full space-x-10 mt-10"> {/* Standardized margin */}
        {/* Left: Product Image */}
        <div className="w-1/2 p-5 mt-6"> {/* Removed translate-x for consistency */}
          <img
            src={process.env.PUBLIC_URL + "/assets/menanti.png"}
            alt="CUTISTEM™ Night Revitaliser for Men"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="w-1/2 p-5 mt-6"> {/* Matched mt-6 for perfect alignment */}
          <h1 className="font-fanwood text-3xl text-darkblue mb-4 font-normal">
            CUTISTEM™ Night Revitaliser for Men
          </h1>
          <p className="font-lato text-2xl text-gray-700 mb-4">$29.90</p>
          <p className="font-lato font-light text-md text-gray-600 mb-6">
            A skin care with stem cell extract to replenish the skin, rejuvenate and protect. With oat extract to balance skin microbiome. With co-enzyme Q10 for better skin repair, retinol, resveratrol for collagen stimulation and hyaluronic acid to fill-up wrinkles.
          </p>
          <h2 className="font-lato font-bold text-lg text-darkblue mb-3">Benefits:</h2>
          <ul className="list-disc list-inside font-lato font-light text-gray-600 mb-4">
            <li>Stimulates collagen production</li>
            <li>Rejuvenates and protects the skin</li>
            <li>Reduces wrinkles and fine lines</li>
            <li>Improves skin texture and hydration</li>
          </ul>
          <h2 className="font-lato font-bold text-lg text-darkblue mb-3">Key Ingredients:</h2>
          <ul className="list-disc list-inside font-lato font-light text-gray-600 mb-4">
            <li>Oat Extract</li>
            <li>Co-enzyme Q10</li>
            <li>Retinol</li>
            <li>Resveratrol</li>
            <li>Hyaluronic Acid</li>
          </ul>

          {/* Back Button under Key Ingredients */}
          <button
            onClick={() => navigate(-1)} // Goes back to the previous page
            className="text-lg font-lato font-light text-darkblue hover:text-blue-600 transition-all duration-300 mt-4"
          >
            &lt; Back To Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default NightRevitaliserMen;
