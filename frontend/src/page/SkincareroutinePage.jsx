import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Pagination from "../components/ui/pagination";

export default function Routine() {
  const [fadeIn, setFadeIn] = useState(0);
  const [activeRoutine, setActiveRoutine] = useState("morning");
  const [morningRoutine, setMorningRoutine] = useState([]);
  const [nightRoutine, setNightRoutine] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(1), 100);

    const getSeverity = (score) => {
      if (score <= 3) return "Mild";
      if (score <= 6) return "Moderate";
      return "Severe";
    };

    const acne = parseFloat(localStorage.getItem("acneScore"));
    const darkspot = parseFloat(localStorage.getItem("darkspotScore"));
    const scar = parseFloat(localStorage.getItem("scarScore"));
    const wrinkles = parseFloat(localStorage.getItem("wrinklesScore"));

    const descriptions = {
      Cleanse: () => {
        if (acne > 6)
          return "Use a salicylic acid cleanser to control severe acne and reduce inflammation.";
        if (scar > 6)
          return "Use a brightening cleanser to gently exfoliate and reduce scar pigmentation.";
        return "Use a gentle cleanser to refresh your skin and remove overnight impurities.";
      },
      Tone: () => {
        if (darkspot > 6)
          return "Apply a toner with niacinamide to help fade dark spots and even skin tone.";
        return "Use a hydrating toner to prep the skin for the next steps and restore pH balance.";
      },
      Serum: () => {
        if (wrinkles > 6)
          return "Use a serum with retinol or peptides to target deep wrinkles and boost collagen.";
        if (darkspot > 6)
          return "Apply a Vitamin C serum to brighten the skin and reduce dark spots.";
        return "Use a lightweight serum to enhance skin hydration and glow.";
      },
      Moisturize: () => {
        if (wrinkles > 6)
          return "Use a richer moisturizer to combat dryness and soften fine lines.";
        return "Apply a lightweight moisturizer to keep your skin hydrated all day.";
      },
      Sunscreen: () => {
        return "Apply a broad-spectrum SPF 30+ sunscreen to protect your skin from UV damage.";
      },
      Exfoliate: () => {
        if (scar > 6 || darkspot > 6)
          return "Use a chemical exfoliant (AHA/BHA) 2–3 times a week to remove dead skin cells and improve skin clarity.";
        return null;
      },
      Overnight: () => {
        if (wrinkles > 6)
          return "Use a retinol or peptide night treatment to promote skin renewal and reduce fine lines.";
        if (scar > 6)
          return "Use a night treatment with niacinamide or tranexamic acid to fade acne scars overnight.";
        return null;
      },
    };

    const morningSteps = [
      "Cleanse",
      "Tone",
      "Serum",
      "Moisturize",
      "Sunscreen",
    ];
    const nightSteps = ["Cleanse", "Serum", "Moisturize"];

    const AM = morningSteps.map((title, i) => ({
      step: i + 1,
      title,
      description: descriptions[title]() || "",
      product: "Personalized by AI",
    }));

    const PM = [
      ...nightSteps.map((title, i) => ({
        step: i + 1,
        title,
        description: descriptions[title]() || "",
        product: "Personalized by AI",
      })),
      descriptions["Exfoliate"]() && {
        step: nightSteps.length + 1,
        title: "Exfoliate",
        description: descriptions["Exfoliate"](),
        product: "Personalized by AI",
      },
      descriptions["Overnight"]() && {
        step: nightSteps.length + 2,
        title: "Overnight Treatment",
        description: descriptions["Overnight"](),
        product: "Personalized by AI",
      },
    ].filter(Boolean);

    setMorningRoutine(AM);
    setNightRoutine(PM);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 transition-opacity duration-1000 ease-in-out"
      style={{ opacity: fadeIn }}
    >
      <div className="mx-8 text-center md:hidden mt-24">
        <h1 className="font-fanwood font-normal text-darkblue text-2xl leading-[62.93px]">
          Personalized Skincare Routine
        </h1>
        <p className="font-lato font-light italic text-sm text-gray-500 mb-4">
          Our AI has analyzed your skin and generated a detailed report with
          personalized insights and recommendations.
        </p>
      </div>

      <h1 className="hidden md:block font-fanwood font-normal text-darkblue text-4xl leading-[62.93px] text-center mb-1 mt-[100px]">
        Personalized Skincare Routine
      </h1>
      <p className="hidden md:block font-lato font-light italic text-lg text-center text-gray-500 mb-8">
        Our AI has analyzed your skin and generated a detailed report with
        personalized <br /> insights and recommendations.
      </p>

      <div className="flex space-x-4 mb-6 mt-10 md:hidden">
        <button
          className={`px-6 py-3 rounded-full transition hover:opacity-80 text-sm font-lato font-light ${
            activeRoutine === "morning"
              ? "bg-[#14213D] text-white"
              : "bg-white text-[#14213D] border border-[#14213D]"
          }`}
          onClick={() => setActiveRoutine("morning")}
        >
          Morning Routine
        </button>
        <button
          className={`px-6 py-3 rounded-full transition hover:opacity-80 text-sm font-lato font-light ${
            activeRoutine === "night"
              ? "bg-[#14213D] text-white"
              : "bg-white text-[#14213D] border border-[#14213D]"
          }`}
          onClick={() => setActiveRoutine("night")}
        >
          Night Routine
        </button>
      </div>

      <div className="w-full max-w-3xl md:hidden">
        {activeRoutine === "morning" && (
          <MobileRoutineCard steps={morningRoutine} />
        )}
        {activeRoutine === "night" && (
          <MobileRoutineCard steps={nightRoutine} />
        )}
      </div>

      <div className="hidden md:flex w-full max-w-6xl flex-col lg:flex-row gap-10">
        <RoutineCard title="Morning Routine" steps={morningRoutine} />
        <RoutineCard title="Night Routine" steps={nightRoutine} />
      </div>

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

      <div className="flex justify-center gap-3 mt-5 md:hidden">
        <Pagination current={2}/>
      </div>
      <div className="hidden md:flex gap-3 mt-5">
      <Pagination current={2}/>
      </div>
    </div>
  );
}

const MobileRoutineCard = ({ steps }) => (
  <div className="relative pl-8 space-y-8">
    <div
      className="absolute left-6 top-4 w-1 bg-gray-300"
      style={{ height: `calc(100% - 16px)` }}
    ></div>
    {steps.map((step, index) => (
      <MobileRoutineStep key={index} stepData={step} />
    ))}
  </div>
);

const MobileRoutineStep = ({ stepData }) => (
  <div className="relative flex items-start space-x-2 w-full">
    <div className="absolute -left-3 top-1.5 w-3 h-3 bg-[#14213D] rounded-full"></div>
    <div className="flex-1">
      <div className="flex items-center mb-1">
        <div className="bg-[#14213D] text-white font-lato text-xs px-3 py-1 rounded-md">
          Step {stepData.step}
        </div>
        <h3 className="font-lato text-[#14213D] text-sm ml-2">
          {stepData.title}
        </h3>
      </div>
      <div className="flex items-start space-x-4">
        <div className="flex-1 max-w-[210px]">
          <p className="text-[#909090] font-lato font-light text-xs mb-2 mt-2 leading-5">
            {stepData.description}
          </p>
          <div className="mt-2">
            <p className="text-[#909090] font-lato text-xs font-medium">
              Product: {stepData.product}
            </p>
          </div>
        </div>
        <div className="w-24 h-24 bg-gray-300 rounded-md mt-2"></div>
      </div>
    </div>
  </div>
);

const RoutineCard = ({ title, steps }) => (
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

const DesktopRoutineStep = ({ stepData, isLast }) => (
  <div className="relative flex items-start space-x-4">
    <div className="relative flex flex-col items-center">
      {!isLast && (
        <div className="absolute top-5 bottom-[-125px] w-0.5 bg-gray-300"></div>
      )}
      <span className="relative z-10 bg-[#14213D] text-white px-2 py-1 text-xs font-lato rounded-full">
        Step {stepData.step}
      </span>
    </div>
    <div className="flex-1 max-w-[310px]">
      <h3 className="font-lato text-[#14213D]">{stepData.title}</h3>
      <p className="font-lato font-light text-[#909090] text-sm mt-1">
        {stepData.description}
      </p>
      <p className="font-lato text-[#909090] text-sm mt-2">
        Product: {stepData.product}
      </p>
    </div>
    <div className="w-28 h-28 bg-gray-300 rounded-md relative left-[-4px]"></div>
  </div>
);
