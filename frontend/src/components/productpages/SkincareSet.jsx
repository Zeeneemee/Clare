import React from "react";

const SkincareSet = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-10 py-16">
      <div className="max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 transform -translate-x-5">
          <img
            src={process.env.PUBLIC_URL + "/assets/setthree.png"}
            alt="CUTISTEM™ Skin Care Set"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 mt-10">
          <h1 className="text-3xl font-fanwood text-darkblue mb-4 font-normal">
            CUTISTEM™ Skin Care Set
          </h1>
          <h2 className="text-2xl font-lato text-gray-700 mb-4">$70.00</h2>
          <p className="text-md font-lato font-light text-gray-600 mb-6">
            A complete skincare routine in one set. Includes a Day Cream, Night Serum, and Hand Cream for plump, smooth, and radiant skin. Let Mother Nature take care of your skin with our specially curated combination of natural ingredients.
          </p>
          <h3 className="text-lg font-lato font-bold text-darkblue mb-2">
            Benefits:
          </h3>
          <ul className="list-disc ml-6 font-lato font-light text-gray-600">
            <li>Deep hydration and nourishment</li>
            <li>Boosts skin elasticity and radiance</li>
            <li>Protects and repairs skin throughout the day and night</li>
          </ul>
          <h3 className="text-lg font-lato font-bold text-darkblue mt-4 mb-2">
            Included Products:
          </h3>
          <ul className="list-disc ml-6 font-lato font-light text-gray-600">
            <li>Day Cream</li>
            <li>Night Serum</li>
            <li>Hand Cream</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkincareSet;
