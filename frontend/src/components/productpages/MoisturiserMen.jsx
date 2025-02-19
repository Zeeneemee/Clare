import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const MoisturiserMen = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black p-10">
      <div className="flex max-w-6xl w-full space-x-10 mt-10"> {/* Standardized margin */}
        {/* Left: Product Image */}
        <div className="w-1/2 p-5 mt-6"> {/* Removed translate-x for consistency */}
          <img
            src={process.env.PUBLIC_URL + "/assets/formen.png"}
            alt="CUTISTEM™ Moisturiser for Men"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="w-1/2 p-5 mt-6"> {/* Matched mt-6 for perfect alignment */}
          <h1 className="font-fanwood text-3xl text-darkblue mb-4 font-normal">
            CUTISTEM™ Moisturiser for Men
          </h1>
          <p className="font-lato text-2xl text-gray-700 mb-4">$29.90</p>
          <p className="font-lato font-light text-md text-gray-600 mb-6">
            Specially designed for men's skin, this lightweight yet deeply hydrating moisturiser features apple stem cells and niacinamide to help repair and refresh your skin all day.
          </p>
          <h2 className="font-lato font-bold text-lg text-darkblue mb-3">Benefits:</h2>
          <ul className="list-disc list-inside font-lato font-light text-gray-600 mb-4">
            <li>Provides deep hydration without greasiness</li>
            <li>Repairs and strengthens skin barrier</li>
            <li>Reduces signs of fatigue and dullness</li>
          </ul>
          <h2 className="font-lato font-bold text-lg text-darkblue mb-3">Key Ingredients:</h2>
          <ul className="list-disc list-inside font-lato font-light text-gray-600 mb-4">
            <li>Apple Stem Cells</li>
            <li>Niacinamide</li>
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

export default MoisturiserMen;
