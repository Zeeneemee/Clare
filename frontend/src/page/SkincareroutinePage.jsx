import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Routine() {
  const [fadeIn, setFadeIn] = useState(0);
  const [activeRoutine, setActiveRoutine] = useState("morning");

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(1), 100);
    return () => clearTimeout(timer);
  }, []);

  // Morning and Night Routine Data
  const morningRoutine = [
    { step: 1, title: "Cleanse", description: "Use a gentle cleanser to remove overnight oils and prepare your skin for treatments.", product: "CeraVe Hydrating Facial Cleanser" },
    { step: 2, title: "Tone", description: "Apply a hydrating toner to balance your skin’s pH and improve absorption of other products.", product: "Thayers Witch Hazel Toner" },
    { step: 3, title: "Serum", description: "Use a brightening serum with Vitamin C for a radiant glow throughout the day.", product: "TruSkin Vitamin C Serum" },
    { step: 4, title: "Moisturize", description: "Lock in hydration with a lightweight moisturizer for all-day nourishment.", product: "Neutrogena Hydro Boost Gel Cream" },
    { step: 5, title: "Sunscreen", description: "Apply a broad-spectrum SPF 30+ sunscreen to protect your skin from UV damage.", product: "EltaMD UV Clear SPF 46" },
  ];

  const nightRoutine = [
    { step: 1, title: "Double Cleanse", description: "Start with an oil cleanser to remove sunscreen and makeup, then a gentle cleanser.", product: "DHC Deep Cleansing Oil + CeraVe Hydrating Facial Cleanser" },
    { step: 2, title: "Exfoliate", description: "Use a chemical exfoliant (AHA/BHA) 2-3 times a week to remove dead skin cells.", product: "Paula’s Choice BHA Exfoliant" },
    { step: 3, title: "Serum", description: "Apply a hydrating serum like Hyaluronic Acid for deep skin hydration overnight.", product: "The Ordinary Hyaluronic Acid 2% + B5" },
    { step: 4, title: "Moisturize", description: "Apply a rich moisturizer to lock in hydration while you sleep.", product: "CeraVe PM Facial Moisturizing Lotion" },
    { step: 5, title: "Overnight Treatment", description: "Use a retinol or night mask for skin repair and anti-aging benefits.", product: "Laneige Water Sleeping Mask" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-10 transition-opacity duration-1000 ease-in-out" style={{ opacity: fadeIn }}>
      {/* Title Section */}
      <div className="mx-8 text-center md:hidden mt-24">
        <h1 className="font-fanwood font-normal text-darkblue text-2xl leading-[62.93px]">
          Personalized Skincare Routine
        </h1>
        <p className="font-lato font-light italic text-sm text-gray-500 mb-4">
          Our AI has analyzed your skin and generated a detailed report with personalized insights and recommendations.
        </p>
      </div>

      <h1 className="hidden md:block font-fanwood font-normal text-darkblue text-4xl leading-[62.93px] text-center mb-1 mt-[100px]">
        Personalized Skincare Routine
      </h1>
      <p className="hidden md:block font-lato font-light italic text-lg text-center text-gray-500 mb-8">
        Our AI has analyzed your skin and generated a detailed report with
        personalized <br /> insights and recommendations.
      </p>

      {/* Mobile Toggle Buttons */}
      <div className="flex space-x-4 mb-6 mt-10 md:hidden">
        <button
          className={`px-6 py-3 rounded-full transition hover:opacity-80 text-sm font-lato font-light ${activeRoutine === "morning" ? "bg-[#14213D] text-white" : "bg-white text-[#14213D] border border-[#14213D]"}`}
          onClick={() => setActiveRoutine("morning")}
        >
          Morning Routine
        </button>
        <button
          className={`px-6 py-3 rounded-full transition hover:opacity-80 text-sm font-lato font-light ${activeRoutine === "night" ? "bg-[#14213D] text-white" : "bg-white text-[#14213D] border border-[#14213D]"}`}
          onClick={() => setActiveRoutine("night")}
        >
          Night Routine
        </button>
      </div>

      {/* Routine Container */}
      <div className="w-full max-w-3xl md:hidden">
        {activeRoutine === "morning" && <MobileRoutineCard steps={morningRoutine} />}
        {activeRoutine === "night" && <MobileRoutineCard steps={nightRoutine} />}
      </div>

      {/* Desktop Routine Cards */}
      <div className="hidden md:flex w-full max-w-6xl flex-col lg:flex-row gap-10">
        <RoutineCard title="Morning Routine" steps={morningRoutine} />
        <RoutineCard title="Night Routine" steps={nightRoutine} />
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-3 md:space-x-6 mt-6">
        <Link
          to="/result"
          className="font-lato font-light text-sm md:text-base px-16 md:px-20 py-3 border border-black text-black rounded-full hover:bg-gray-100 transition"
        >
          Back
        </Link>
        <Link
          to="/signup"
          className="font-lato font-light text-sm md:text-base px-16 md:px-20 py-3 bg-[#14213D] text-white rounded-full hover:opacity-80 transition"
        >
          Next
        </Link>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-3 mt-5 md:hidden">
        <div className="w-20 h-1 bg-[#003366] rounded-full"></div>
        <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
        <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
      </div>
      <div className="hidden md:flex gap-3 mt-5">
        <div className="w-24 h-1 bg-[#14213D] rounded-full"></div>
        <div className="w-24 h-1 bg-[#14213D] rounded-full"></div>
        <div className="w-24 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}

// Mobile Routine Card Component
const MobileRoutineCard = ({ steps }) => {
  return (
    <div className="relative pl-8 space-y-8">
      <div className="absolute left-6 top-4 w-1 bg-gray-300" style={{ height: `calc(100% - 16px)` }}></div>
      {steps.map((step, index) => (
        <MobileRoutineStep key={index} stepData={step} />
      ))}
    </div>
  );
};

// Mobile Routine Step Component
const MobileRoutineStep = ({ stepData }) => {
  return (
    <div className="relative flex items-start space-x-2 w-full">
      <div className="absolute -left-3 top-1.5 w-3 h-3 bg-[#14213D] rounded-full"></div>
      
      <div className="flex-1">
        <div className="flex items-center mb-1">
          <div className="bg-[#14213D] text-white font-lato text-xs px-3 py-1 rounded-md">
            Step {stepData.step}
          </div>
          <h3 className="font-lato text-[#14213D] text-sm ml-2">{stepData.title}</h3>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-1 max-w-[210px]">
            <p className="text-[#909090] font-lato font-light text-xs mb-2 mt-2 leading-5">{stepData.description}</p>
            <div className="mt-2">
              <p className="text-[#909090] font-lato text-xs font-medium">Product: {stepData.product}</p>
            </div>
          </div>
          <div className="w-24 h-24 bg-gray-300 rounded-md mt-2"></div>
        </div>
      </div>
    </div>
  );
};

// Desktop Routine Card Component
const RoutineCard = ({ title, steps }) => {
  return (
    <div className="flex-1 bg-white shadow-md rounded-lg p-6 border border-[#CAC7C7]">
      <h2 className="font-lato font-normal text-xl mb-4">{title}</h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <DesktopRoutineStep
            key={step.step}
            stepData={step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

// Desktop Routine Step Component
const DesktopRoutineStep = ({ stepData, isLast }) => {
  return (
    <div className="relative flex items-start space-x-4">
      <div className="relative flex flex-col items-center">
        {!isLast && (
          <div className="absolute top-5 bottom-[-105px] w-0.5 bg-gray-300"></div>
        )}
        <span className="relative z-10 bg-[#14213D] text-white px-2 py-1 text-xs font-lato rounded-full">
          Step {stepData.step}
        </span>
      </div>

      <div className="flex-1 max-w-[310px]">
        <h3 className="font-lato text-[#14213D]">{stepData.title}</h3>
        <p className="font-lato font-light text-[#909090] text-sm mt-1">{stepData.description}</p>
        <p className="font-lato text-[#909090] text-sm mt-2">
          Product: {stepData.product}
        </p>
      </div>

      <div className="w-28 h-28 bg-gray-300 rounded-md relative left-[-4px]"></div>
    </div>
  );
};