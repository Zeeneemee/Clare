import React from "react";

const HandCream = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-10 py-16">
      <div className="max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 transform -translate-x-5">
          <img
            src={process.env.PUBLIC_URL + "/assets/handcream.png"}
            alt="CUTISTEM™ Hand Cream"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 mt-10">
          <h1 className="text-3xl font-fanwood text-darkblue mb-4 font-normal">
            CUTISTEM™ Hand Cream
          </h1>
          <h2 className="text-2xl font-lato text-gray-700 mb-4">$15.90</h2>
          <p className="text-md font-lato font-light text-gray-600 mb-6">
            A rich yet fast-absorbing hand cream infused with apple stem cells, shea butter, and vitamin E to nourish and protect your hands from dryness and environmental damage.
          </p>
          <h3 className="text-lg font-lato font-bold text-darkblue mb-2">
            Benefits:
          </h3>
          <ul className="list-disc ml-6 font-lato font-light text-gray-600">
            <li>Deeply hydrates and softens hands</li>
            <li>Protects against dryness and irritation</li>
            <li>Strengthens skin barrier</li>
          </ul>
          <h3 className="text-lg font-lato font-bold text-darkblue mt-4 mb-2">
            Key Ingredients:
          </h3>
          <ul className="list-disc ml-6 font-lato font-light text-gray-600">
            <li>Apple Stem Cells</li>
            <li>Shea Butter</li>
            <li>Vitamin E</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HandCream;
