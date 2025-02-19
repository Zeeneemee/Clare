import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const HandCream = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black p-10">
      <div className="flex max-w-6xl w-full space-x-10 mt-16"> {/* Adjusted mt-16 to move content down */}
        {/* Left: Product Image */}
        <div className="w-1/2 p-5 transform -translate-x-5 mt-6"> {/* Keep image's margin as is */}
          <img
            src={process.env.PUBLIC_URL + "/assets/handcream.png"}
            alt="CUTISTEM™ Hand Cream"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="w-1/2 p-5 mt-10"> {/* Increased mt-10 to move product section further down */}
          <h1 className="font-fanwood text-3xl text-darkblue mb-4 font-normal">
            CUTISTEM™ Hand Cream
          </h1>
          <p className="font-lato text-2xl text-gray-700 mb-4">$15.90</p>
          <p className="font-lato font-light text-md text-gray-600 mb-6">
            A rich yet fast-absorbing hand cream infused with apple stem cells, shea butter, and vitamin E to nourish and protect your hands from dryness and environmental damage.
          </p>
          <h2 className="font-lato font-bold text-lg text-darkblue mb-3">Benefits:</h2>
          <ul className="list-disc list-inside font-lato font-light text-gray-600 mb-4">
            <li>Deeply hydrates and softens hands</li>
            <li>Protects against dryness and irritation</li>
            <li>Strengthens skin barrier</li>
          </ul>
          <h2 className="font-lato font-bold text-lg text-darkblue mb-3">Key Ingredients:</h2>
          <ul className="list-disc list-inside font-lato font-light text-gray-600 mb-4">
            <li>Apple Stem Cells</li>
            <li>Shea Butter</li>
            <li>Vitamin E</li>
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

export default HandCream;
