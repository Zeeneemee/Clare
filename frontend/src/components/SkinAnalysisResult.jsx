import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";


export default function SkinAnalysisResult() {
  const navigate = useNavigate();
  const capturedImage = localStorage.getItem("image");
  const [fadeIn, setFadeIn] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(1), 100);
    return () => clearTimeout(timer);
  }, []);

  const MetricCard = ({ color, title, percentage, description }) => (
    <div className="p-4 md:p-6 bg-white shadow-lg rounded-xl border">
      <div className="flex items-center gap-3 mb-3 md:mb-4">
        <div className={`w-5 h-5 md:w-6 md:h-6 ${color} rounded-full`}></div>
        <h2 className="font-lato text-md md:text-lg">{title}</h2>
      </div>
      <div className="font-lato text-xl md:text-2xl mb-1 md:mb-2">{percentage}%</div>
      <div className="w-full bg-gray-200 rounded-full h-2 md:h-2.5">
        <div
          className={`${color} h-2 md:h-2.5 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="font-lato font-light mt-2 md:mt-3 text-gray-500 text-xs md:text-sm">
        {description}
      </p>
    </div>
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center relative px-5 py-16 mt-12 transition-opacity duration-1000 ease-in-out"
      style={{ opacity: fadeIn }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg opacity-30"
        style={{ backgroundImage: "url('/assets/bg5.png')" }}
      ></div>

      {/* Header Section */}
      <div className="z-10 w-full max-w-7xl text-center mb-12">
        {capturedImage && (
          <>
            <h1 className="font-fanwood text-3xl md:text-4xl text-darkblue mb-4">
              Your Skin Report
            </h1>
            <p className="font-lato italic font-light text-sm md:text-base text-gray-500 max-w-3xl mx-auto">
              Our AI has analyzed your skin and generated a detailed report with
              personalized insights and recommendations.
            </p>
          </>
        )}
      </div>

      {/* Content Section */}
      {capturedImage && (
        <div className="w-full max-w-7xl z-10 mt-18">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center">
            <div className="mx-8 mb-8 w-full max-w-[380px]">
              <div className="relative">
                <img
                  src={capturedImage}
                  alt="Skin analysis"
                  className="rounded-2xl w-full h-[420px] object-cover shadow-xl"
                />
                <div className="font-lato font-light absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md text-[#797979]">
                  Skin Age: 30
                </div>
              </div>
            </div>

            <div className="w-full max-w-7xl space-y-2">
              <MetricCard
                color="bg-[#7F7DFF]"
                title="Dark Circles"
                percentage={35}
                description="Mild dark circles detected, possibly due to lack of sleep or dehydration."
              />
              <MetricCard
                color="bg-[#FFEB40]"
                title="Wrinkles"
                percentage={15}
                description="Moderate acne detected with visible breakouts and mild inflammation."
              />
              <MetricCard
                color="bg-[#9CDA8A]"
                title="Acne Severity"
                percentage={65}
                description="Mild dark circles detected, possibly due to lack of sleep or dehydration."
              />
              <MetricCard
                color="bg-[#FF8080]"
                title="Scar"
                percentage={100}
                description="Mild dark circles detected, possibly due to lack of sleep or dehydration."
              />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-start gap-8">
            {/* Left Metrics Column */}
            <div className="flex-1 space-y-8">
              <MetricCard
                color="bg-[#7F7DFF]"
                title="Dark Circles"
                percentage={35}
                description="Mild dark circles detected, possibly due to lack of sleep or dehydration."
              />
              <MetricCard
                color="bg-[#FFEB40]"
                title="Wrinkles"
                percentage={15}
                description="Moderate acne detected with visible breakouts and mild inflammation."
              />
            </div>

            {/* Center Image Column */}
            <div className="mx-8">
              <div className="relative">
                <img
                  src={capturedImage}
                  alt="Skin analysis"
                  className="rounded-2xl w-[380px] h-[420px] object-cover shadow-xl"
                />
                <div className="font-lato font-light absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md text-[#797979]">
                  Skin Age: 30
                </div>
              </div>
            </div>

            {/* Right Metrics Column */}
            <div className="flex-1 space-y-8">
              <MetricCard
                color="bg-[#9CDA8A]"
                title="Acne Severity"
                percentage={65}
                description="Mild dark circles detected, possibly due to lack of sleep or dehydration."
              />
              <MetricCard
                color="bg-[#FF8080]"
                title="Scar"
                percentage={100}
                description="Mild dark circles detected, possibly due to lack of sleep or dehydration."
              />
            </div>
          </div>

          {/* Action Section */}
          <div className="text-center mt-6 md:mt-16">
            <button
              onClick={() => navigate("/skincareroutine")}
              className="font-lato font-light text-sm md:text-lg bg-[#14213D] text-white px-16 py-3 rounded-full 
                        transition-colors duration-300 hover:opacity-80"
            >
              Suggest My Skincare Routine
            </button>
            <div className="flex justify-center gap-3 mt-6 md:mt-8">
              <div className="w-20 md:w-24 h-1 bg-[#003366] rounded-full"></div>
              <div className="w-20 md:w-24 h-1 bg-gray-300 rounded-full"></div>
              <div className="w-20 md:w-24 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}