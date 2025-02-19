import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SkincareSet = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black p-10">
      <div className="flex max-w-6xl w-full space-x-10 mt-10"> {/* Standardized margin */}
        {/* Left: Product Image */}
        <div className="w-1/2 p-5 mt-6"> {/* Removed translate-x for consistency */}
          <img
            src={process.env.PUBLIC_URL + "/assets/setthree.png"}
            alt="CUTISTEM™ Skin Care Set"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="w-1/2 p-5 mt-6"> {/* Matched mt-6 for perfect alignment */}
          <h1 className="font-fanwood text-3xl text-darkblue mb-4 font-normal">
            CUTISTEM™ Skin Care Set
          </h1>
          <p className="font-lato text-2xl text-gray-700 mb-4">$70.00</p>
          <p className="font-lato font-light text-md text-gray-600 mb-6">
            A complete skincare routine in one set. Includes a Day Cream, Night Serum, and Hand Cream for plump, smooth, and radiant skin. Let Mother Nature take care of your skin with our specially curated combination of natural ingredients.
          </p>
          <h2 className="font-lato font-bold text-lg text-darkblue mb-3">Benefits:</h2>
          <ul className="list-disc list-inside font-lato font-light text-gray-600 mb-4">
            <li>Deep hydration and nourishment</li>
            <li>Boosts skin elasticity and radiance</li>
            <li>Protects and repairs skin throughout the day and night</li>
          </ul>
          <h2 className="font-lato font-bold text-lg text-darkblue mb-3">Included Products:</h2>
          <ul className="list-disc list-inside font-lato font-light text-gray-600 mb-4">
            <li>Day Cream</li>
            <li>Night Serum</li>
            <li>Hand Cream</li>
          </ul>

          {/* Back Button under Included Products */}
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

export default SkincareSet;
