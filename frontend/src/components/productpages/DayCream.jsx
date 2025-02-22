import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const DayCream = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [fadeIn, setFadeIn] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(1), 100); // Apply fade-in effect after 100ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-white text-black p-10 transition-opacity duration-1000 ease-in-out"
      style={{ opacity: fadeIn }}
    >
      <div className="flex max-w-6xl w-full space-x-10 mt-10">
        {/* Left: Product Image */}
        <div className="w-1/2 p-5 mt-6">
          <img
            src={process.env.PUBLIC_URL + "/assets/daycream.png"}
            alt="CUTISTEM™ Day Cream"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="w-1/2 p-5 mt-6">
          <h1
            className="font-fanwood text-3xl text-darkblue mb-4 font-normal transition-opacity duration-1000 ease-in-out"
            style={{ opacity: fadeIn }}
          >
            CUTISTEM™ Day Cream
          </h1>
          <p
            className="font-lato text-2xl text-gray-700 mb-4 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: fadeIn }}
          >
            $25.90
          </p>
          <p
            className="font-lato font-light text-md text-gray-600 mb-6 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: fadeIn }}
          >
            Facial skin care with apple stem cells and dragon fruit extracts to repair, nourish, and protect the skin all day long. Unlock the power of stem cells and get fresher, smoother, brighter skin.
          </p>
          <h2
            className="font-lato font-bold text-lg text-darkblue mb-3 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: fadeIn }}
          >
            Benefits:
          </h2>
          <ul
            className="list-disc list-inside font-lato font-light text-gray-600 mb-4 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: fadeIn }}
          >
            <li>Hydrates and nourishes the skin</li>
            <li>Protects against UVA/UVB damage</li>
            <li>Promotes a smoother, brighter complexion</li>
          </ul>
          <h2
            className="font-lato font-bold text-lg text-darkblue mb-3 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: fadeIn }}
          >
            Key Ingredients:
          </h2>
          <ul
            className="list-disc list-inside font-lato font-light text-gray-600 mb-4 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: fadeIn }}
          >
            <li>Apple Stem Cells</li>
            <li>Dragon Fruit Extract</li>
            <li>Anti-UVA/UVB Agents</li>
          </ul>

          {/* Back Button under Key Ingredients */}
          <button
            onClick={() => navigate(-1)}
            className="text-lg font-lato font-light text-darkblue hover:text-blue-600 transition-all duration-300 mt-4 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: fadeIn }}
          >
            &lt; Back To Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default DayCream;
