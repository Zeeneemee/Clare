import React from "react";

const MoisturiserMen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-10 py-16">
      <div className="max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 transform -translate-x-5">
          <img
            src={process.env.PUBLIC_URL + "/assets/formen.png"}
            alt="CUTISTEM™ Moisturiser for Men"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 mt-10">
          <h1 className="text-3xl font-fanwood text-darkblue mb-4 font-normal">
            CUTISTEM™ Moisturiser for Men
          </h1>
          <h2 className="text-2xl font-lato text-gray-700 mb-4">$29.90</h2>
          <p className="text-md font-lato font-light text-gray-600 mb-6">
            Specially designed for men's skin, this lightweight yet deeply hydrating moisturiser features apple stem cells and niacinamide to help repair and refresh your skin all day.
          </p>
          <h3 className="text-lg font-lato font-bold text-darkblue mb-2">
            Benefits:
          </h3>
          <ul className="list-disc ml-6 font-lato font-light text-gray-600">
            <li>Provides deep hydration without greasiness</li>
            <li>Repairs and strengthens skin barrier</li>
            <li>Reduces signs of fatigue and dullness</li>
          </ul>
          <h3 className="text-lg font-lato font-bold text-darkblue mt-4 mb-2">
            Key Ingredients:
          </h3>
          <ul className="list-disc ml-6 font-lato font-light text-gray-600">
            <li>Apple Stem Cells</li>
            <li>Niacinamide</li>
            <li>Hyaluronic Acid</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoisturiserMen;
