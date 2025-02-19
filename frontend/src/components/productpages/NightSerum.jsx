import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const NightSerum = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black p-10">
      <div className="flex max-w-6xl w-full space-x-10 mt-10"> {/* Standardized margin */}
        {/* Left: Product Image */}
        <div className="w-1/2 p-5 mt-6"> {/* Removed translate-x for consistency */}
          <img
            src={process.env.PUBLIC_URL + "/assets/nightserum.png"}
            alt="CUTISTEM™ Night Serum"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="w-1/2 p-5 mt-6"> {/* Matched mt-6 for perfect alignment */}
          <h1 className="font-fanwood text-3xl text-darkblue mb-4 font-normal">
            CUTISTEM™ Night Serum
          </h1>
          <p className="font-lato text-2xl text-gray-700 mb-4">$37.95</p>
          <p className="font-lato font-light text-md text-gray-600 mb-6">
            A night skin care treatment that helps replenish, rejuvenate, and protect your skin overnight. This formula contains oat extract to balance the skin microbiome, along with hyaluronic acid and co-enzyme Q10 to support better skin repair while you sleep.
          </p>
          <h2 className="font-lato font-bold text-lg text-darkblue mb-3">Benefits:</h2>
          <ul className="list-disc list-inside font-lato font-light text-gray-600 mb-4">
            <li>Replenishes and rejuvenates skin overnight</li>
            <li>Balances skin microbiome</li>
            <li>Supports skin repair while you sleep</li>
          </ul>
          <h2 className="font-lato font-bold text-lg text-darkblue mb-3">Key Ingredients:</h2>
          <ul className="list-disc list-inside font-lato font-light text-gray-600 mb-4">
            <li>Stem Cells Extract</li>
            <li>Oat Extract</li>
            <li>Hyaluronic Acid</li>
            <li>Co-enzyme Q10</li>
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

export default NightSerum;
