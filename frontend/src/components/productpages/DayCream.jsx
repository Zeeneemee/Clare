import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const DayCream = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black p-10">
      <div className="flex max-w-6xl w-full space-x-10 mt-16"> {/* Adjusted mt-16 to move content down */}
        {/* Left: Product Image */}
        <div className="w-1/2 p-5 transform -translate-x-5 mt-6"> {/* Keep image's margin as is */}
          <img
            src={process.env.PUBLIC_URL + "/assets/daycream.png"}
            alt="CUTISTEM™ Day Cream"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="w-1/2 p-5 mt-10"> {/* Increased mt-10 to move product section further down */}
          <h1 className="font-fanwood text-3xl text-darkblue mb-4 font-normal">
            CUTISTEM™ Day Cream
          </h1>
          <p className="font-lato text-2xl text-gray-700 mb-4">$25.90</p>
          <p className="font-lato font-light text-md text-gray-600 mb-6">
            Facial skin care with apple stem cells and dragon fruit extracts to repair, nourish, and protect the skin all day long. Unlock the power of stem cells and get fresher, smoother, brighter skin.
          </p>
          <h2 className="font-lato font-bold text-lg text-darkblue mb-3">Benefits:</h2>
          <ul className="list-disc list-inside font-lato font-light text-gray-600 mb-4">
            <li>Hydrates and nourishes the skin</li>
            <li>Protects against UVA/UVB damage</li>
            <li>Promotes a smoother, brighter complexion</li>
          </ul>
          <h2 className="font-lato font-bold text-lg text-darkblue mb-3">Key Ingredients:</h2>
          <ul className="list-disc list-inside font-lato font-light text-gray-600 mb-4">
            <li>Apple Stem Cells</li>
            <li>Dragon Fruit Extract</li>
            <li>Anti-UVA/UVB Agents</li>
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

export default DayCream;
