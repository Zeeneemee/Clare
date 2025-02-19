import React from "react";

const NightSerum = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-10 py-16">
      <div className="max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 transform -translate-x-5">
          <img
            src={process.env.PUBLIC_URL + "/assets/nightserum.png"}
            alt="CUTISTEM™ Night Serum"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 mt-10"> {/* Added mt-10 here to move content down */}
          <h1 className="text-3xl font-fanwood text-darkblue mb-4 font-normal">
            CUTISTEM™ Night Serum
          </h1>
          <h2 className="text-2xl font-lato text-gray-700 mb-4">$37.95</h2>
          <p className="text-md font-lato font-light text-gray-600 mb-6">
            A night skin care with stem cells extract to replenish the skin, rejuvenate and protect. With oat extract to balance skin microbiome, hyaluronic acid and co-enzyme Q10 for a better skin repair.
          </p>
          <h3 className="text-lg font-lato font-bold text-darkblue mb-2">
            Benefits:
          </h3>
          <ul className="list-disc ml-6 font-lato font-light text-gray-600">
            <li>Rejuvenates and replenishes skin</li>
            <li>Balances skin microbiome</li>
            <li>Enhances overnight repair</li>
          </ul>
          <h3 className="text-lg font-lato font-bold text-darkblue mt-4 mb-2">
            Key Ingredients:
          </h3>
          <ul className="list-disc ml-6 font-lato font-light text-gray-600">
            <li>Stem Cells Extract</li>
            <li>Oat Extract</li>
            <li>Hyaluronic Acid</li>
            <li>Co-enzyme Q10</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NightSerum;
