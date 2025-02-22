import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SkinAnalysisResult() {
  const navigate = useNavigate();
  const capturedImage = localStorage.getItem("image");
  const [fadeIn, setFadeIn] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(1), 100); // Fade in after 100ms
    return () => clearTimeout(timer);
  }, []); // Ensures it only runs on mount

  return (
    <div
      className="min-h-screen flex flex-col items-center relative px-5 py-16 mt-12 transition-opacity duration-1000 ease-in-out"
      style={{ opacity: fadeIn }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg opacity-30"
        style={{ backgroundImage: "url('/assets/bg5.png')" }}
      ></div>

      {/* Fixed Header Section */}
      <div className="z-10 w-full max-w-7xl text-center mb-12">
        {capturedImage && (
          <>
            <h1 className="font-fanwood text-4xl text-darkblue mb-4">
              Your Skin Report
            </h1>
            <p className="font-lato italic font-light text-base text-gray-500 max-w-3xl mx-auto">
              Our AI has analyzed your skin and generated a detailed report with
              personalized insights and recommendations.
            </p>
          </>
        )}
      </div>

      {/* Content Section Moved Down */}
      {capturedImage && (
        <div className="w-full max-w-7xl z-10 mt-18">
          <div className="flex justify-between items-start gap-8">
            {/* Left Metrics Column */}
            <div className="flex-1 space-y-8">
              <div className="p-6 bg-white shadow-lg rounded-xl border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-[#7F7DFF] rounded-full"></div>
                  <h2 className="font-lato text-lg">Dark Circles</h2>
                </div>
                <div className="font-lato text-2xl mb-2">35%</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-[#7F7DFF] h-2.5 rounded-full"
                    style={{ width: "35%" }}
                  ></div>
                </div>
                <p className="font-lato font-light mt-3 text-gray-500 text-sm">
                  Mild dark circles detected, possibly due to lack of sleep or dehydration.
                </p>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-xl border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-[#FFEB40] rounded-full"></div>
                  <h2 className="font-lato text-lg">Wrinkles</h2>
                </div>
                <div className="font-lato text-2xl mb-2">15%</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-[#FFEB40] h-2.5 rounded-full"
                    style={{ width: "15%" }}
                  ></div>
                </div>
                <p className="font-lato font-light mt-3 text-gray-500 text-sm">
                  Moderate acne detected with visible breakouts and mild inflammation.
                </p>
              </div>
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
              <div className="p-6 bg-white shadow-lg rounded-xl border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-[#9CDA8A] rounded-full"></div>
                  <h2 className="font-lato text-lg">Acne Severity</h2>
                </div>
                <div className="font-lato text-2xl mb-2">65%</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-[#9CDA8A] h-2.5 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <p className="font-lato font-light mt-3 text-gray-500 text-sm">
                  Mild dark circles detected, possibly due to lack of sleep or dehydration.
                </p>
              </div>

              <div className="p-6 bg-white shadow-lg rounded-xl border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 bg-[#FF8080] rounded-full"></div>
                  <h2 className="font-lato text-lg ">Scar</h2>
                </div>
                <div className="font-lato text-2xl mb-2">100%</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-[#FF8080] h-2.5 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <p className="font-lato font-light mt-3 text-gray-500 text-sm">
                  Mild dark circles detected, possibly due to lack of sleep or dehydration.
                </p>
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="text-center mt-16">
            <button
              onClick={() => navigate("/skincareroutine")}
              className="font-lato font-light text-lg bg-[#14213D] text-white px-16 py-3 rounded-full 
                        transition-colors duration-300 hover:opacity-80"
            >
              Suggest My Skincare Routine
            </button>
            <div className="flex justify-center gap-3 mt-8">
              <div className="w-24 h-1 bg-[#003366] rounded-full"></div>
              <div className="w-24 h-1 bg-gray-300 rounded-full"></div>
              <div className="w-24 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
