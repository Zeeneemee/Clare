import { Link } from "react-router-dom";

export default function Routine() {
  // Morning and Night Routine Data with Unique Steps
  const morningRoutine = [
    {
      step: 1,
      title: "Cleanse",
      description:
        "Use a gentle cleanser to remove overnight oils and prepare your skin for treatments.",
      product: "CeraVe Hydrating Facial Cleanser",
    },
    {
      step: 2,
      title: "Tone",
      description:
        "Apply a hydrating toner to balance your skin’s pH and improve absorption of other products.",
      product: "Thayers Witch Hazel Toner",
    },
    {
      step: 3,
      title: "Serum",
      description:
        "Use a brightening serum with Vitamin C for a radiant glow throughout the day.",
      product: "TruSkin Vitamin C Serum",
    },
    {
      step: 4,
      title: "Moisturize",
      description:
        "Lock in hydration with a lightweight moisturizer for all-day nourishment.",
      product: "Neutrogena Hydro Boost Gel Cream",
    },
    {
      step: 5,
      title: "Sunscreen",
      description:
        "Apply a broad-spectrum SPF 30+ sunscreen to protect your skin from UV damage.",
      product: "EltaMD UV Clear SPF 46",
    },
  ];

  const nightRoutine = [
    {
      step: 1,
      title: "Double Cleanse",
      description:
        "Start with an oil cleanser to remove sunscreen and makeup, then a gentle cleanser.",
      product: "DHC Deep Cleansing Oil + CeraVe Hydrating Facial Cleanser",
    },
    {
      step: 2,
      title: "Exfoliate",
      description:
        "Use a chemical exfoliant (AHA/BHA) 2-3 times a week to remove dead skin cells.",
      product: "Paula’s Choice BHA Exfoliant",
    },
    {
      step: 3,
      title: "Serum",
      description:
        "Apply a hydrating serum like Hyaluronic Acid for deep skin hydration overnight.",
      product: "The Ordinary Hyaluronic Acid 2% + B5",
    },
    {
      step: 4,
      title: "Moisturize",
      description:
        "Apply a rich moisturizer to lock in hydration while you sleep.",
      product: "CeraVe PM Facial Moisturizing Lotion",
    },
    {
      step: 5,
      title: "Overnight Treatment",
      description:
        "Use a retinol or night mask for skin repair and anti-aging benefits.",
      product: "Laneige Water Sleeping Mask",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      {/* Title */}
      <h1 className="font-fanwood text-[48px] leading-[62.93px] text-center mb-3 mt-[150px]">
        Personalized Skincare Routine
      </h1>
      <p className="font-lato font-medium italic text-[20px] text-center text-[#A8A8A8] mb-8">
        Our AI has analyzed your skin and generated a detailed report with
        personalized <br /> insights and recommendations.
      </p>

      {/* Skincare Routine Container */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">
        {/* Morning Routine with Border */}
        <RoutineCard title="Morning Routine" steps={morningRoutine} />

        {/* Night Routine with Border */}
        <RoutineCard title="Night Routine" steps={nightRoutine} />
      </div>

      {/* Navigation Buttons */}
      <div className="flex mt-10 space-x-6">
        <Link
          to="/result"
          className="px-20 py-3 border border-black text-black rounded-full hover:bg-gray-100 transition"
        >
          Back
        </Link>
        <Link
          to="/signup"
          className="px-20 py-3 bg-[#14213D] text-white rounded-full hover:opacity-80 transition"
        >
          Next
        </Link>
      </div>

      {/* Progress Bar */}
      <div className="flex gap-3 mt-5">
        <div className="w-24 h-1 bg-[#14213D] rounded-full"></div>
        <div className="w-24 h-1 bg-[#14213D] rounded-full"></div>
        <div className="w-24 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}

const RoutineCard = ({ title, steps }) => {
  return (
    <div className="flex-1 bg-white shadow-md rounded-lg p-6 border border-[#CAC7C7]">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <RoutineStep
            key={step.step}
            stepData={step}
            isLast={index === steps.length - 1}
            totalSteps={steps.length}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

// Step Component with Unique Details
const RoutineStep = ({ stepData, isLast }) => {
  return (
    <div className="relative flex items-start space-x-4">
      {/* Step Indicator + Vertical Line */}
      <div className="relative flex flex-col items-center">
        {/* Vertical Line (Behind Step Indicator) */}
        {!isLast && (
          <div className="absolute top-5 bottom-[-105px] w-0.5 bg-gray-300"></div>
        )}

        {/* Step Indicator */}
        <span className="relative z-10 bg-[#F4EDE3] text-[#909090] px-2 py-1 text-xs font-semibold rounded-full">
          Step {stepData.step}
        </span>
      </div>

      {/* Step Content */}
      <div className="flex-1">
        <h3 className="font-semibold text-[#909090]">{stepData.title}</h3>
        <p className="text-[#909090] text-sm">{stepData.description}</p>
        <p className="text-[#909090] text-sm font-medium">
          Product: {stepData.product}
        </p>
      </div>

      {/* Placeholder for Image */}
      <div className="w-20 h-20 bg-gray-300 rounded-md"></div>
    </div>
  );
};
