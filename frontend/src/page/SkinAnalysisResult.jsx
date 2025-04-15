import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MetricCard from "../components/ui/metric";
import metricDetails from "../lib/skinanalysis"; // Assuming this is the correct path


export default function SkinAnalysisResult() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(0);
  const [bioMetrics, setBioMetrics] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(1), 100);
    
    // Retrieve data from localStorage
    const storedData = {
      processedImage: localStorage.getItem("processedImage"),
      acne: {
        acneImage: localStorage.getItem("acneImage"),
        acneScore: localStorage.getItem("acneScore"),
      },
      wrinkles: {
        wrinklesScore: localStorage.getItem("wrinklesScore"),
        wrinklesPercentage: localStorage.getItem("wrinklePercentage")
      },
      scar: {
        scarImage: localStorage.getItem("scarImage"),
        scarScore: localStorage.getItem("scarScore"),
      },
      undereye: {
        undereyeImage: localStorage.getItem("undereyeImage"),
        undereyeScore: localStorage.getItem("undereyeScore"),
      },
      darkspot: {
        darkspotImage: localStorage.getItem("darkspotImage"),
        darkspotScore: localStorage.getItem("darkspotScore"),
      },
      age: localStorage.getItem("age"),
      gender: localStorage.getItem("gender"),
    };

    setBioMetrics(storedData);
    return () => clearTimeout(timer);
  }, []);

  const getMetricDescription = (metric, score) => {
    if (score < 0 || score > 10) return "Invalid score";
    
    switch(metric) {
      case 'wrinkles':
        if (score <= 2) return metricDetails.wrinkles.content[0];
        if (score <= 5) return metricDetails.wrinkles.content[1];
        if (score <= 8) return metricDetails.wrinkles.content[2];
        return metricDetails.wrinkles.content[3];

      case 'darkspot':
        if (score <= 2) return metricDetails.darkspot.content[0];
        if (score <= 5) return metricDetails.darkspot.content[1];
        if (score <= 8) return metricDetails.darkspot.content[2];
        return metricDetails.darkspot.content[3];

      case 'acne':
        if (score <= 2) return metricDetails.acne.content[0];
        if (score <= 5) return metricDetails.acne.content[1];
        if (score <= 8) return metricDetails.acne.content[2];
        return metricDetails.acne.content[3];

      case 'undereye':
        if (score <= 2) return metricDetails.undereye.content[0];
        if (score <= 5) return metricDetails.undereye.content[1];
        if (score <= 8) return metricDetails.undereye.content[2];
        return metricDetails.undereye.content[3];

      case 'scar':
        if (score <= 3) return metricDetails.scar.content[0];
        if (score <= 6) return metricDetails.scar.content[1];
        if (score <= 9) return metricDetails.scar.content[2];
        return metricDetails.scar.content[3];

      default:
        return "No description available";
    }
  };


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
        {bioMetrics?.processedImage && (
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
      {bioMetrics?.processedImage ? (
        <div className="w-full max-w-7xl z-10 mt-18">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center">
            <div className="mx-8 mb-8 w-full max-w-[380px]">
              <div className="relative">
                <img
                  src={bioMetrics.processedImage}
                  alt="Skin analysis"
                  className="rounded-2xl max-w-full h-auto object-contain shadow-xl"
                />
                <div className="font-lato font-light absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md text-[#797979]">
                  Skin Age: {bioMetrics.age || "Not Detected"}
                </div>
              </div>
            </div>

            <div className="w-full max-w-7xl space-y-2">
              <MetricCard
                color="bg-[#7F7DFF]"
                title="Dark Circles"
                value={bioMetrics.undereye.undereyeScore || 0}
                description= {getMetricDescription("undereye", bioMetrics.undereye.undereyeScore)}
              />
              <MetricCard
                color="bg-[#FFEB40]"
                title="Wrinkles"
                value={bioMetrics.wrinkles.wrinklesPercentage || 0}
                description={getMetricDescription("wrinkles", bioMetrics.wrinkles.wrinklesScore)}
                isWrinkles={true}

                />
              <MetricCard
                color="bg-[#FFA500]"
                title="Dark Spot"
                value={bioMetrics.darkspot.darkspotScore || 0}
                description={getMetricDescription("darkspot", bioMetrics.darkspot.darkspotScore)}
              />
              <MetricCard
                color="bg-[#9CDA8A]"
                title="Acne Severity"
                value={bioMetrics.acne.acneScore || 0}
                description={getMetricDescription("acne", bioMetrics.acne.acneScore)}
                />
              <MetricCard
                color="bg-[#FF8080]"
                title="Scar"
                value={bioMetrics.scar.scarScore || 0}
                description={getMetricDescription("scar", bioMetrics.scar.scarScore)}
              />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center gap-8">
            {/* Left Metrics Column */}
            <div className="flex-1 space-y-8">
              <MetricCard
                color="bg-[#7F7DFF]"
                title="Dark Circles"
                value={bioMetrics.undereye.undereyeScore || 0}
                description={getMetricDescription("undereye", bioMetrics.undereye.undereyeScore)}
              />
              <MetricCard
                color="bg-[#FFEB40]"
                title="Wrinkles"
                value={bioMetrics.wrinkles.wrinklesPercentage || 0}
                description={getMetricDescription("wrinkles", bioMetrics.wrinkles.wrinklesScore)}
                isWrinkles={true}
              />
            </div>

            {/* Center Image Column */}
            <div className="mx-8">
              <div className="relative flex">
                <img
                  src={bioMetrics.processedImage}
                  alt="Skin analysis"
                  className="rounded-2xl max-w-[400px] h-[400px] object-contain shadow-xl"
                />
                <div className="font-lato font-light absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md text-[#797979]">
                  Skin Age: {bioMetrics.age || "Not Detected"}
                </div>
              </div>
            </div>

            {/* Right Metrics Column */}
            <div className="flex-1 space-y-8">
              <MetricCard
                color="bg-[#9CDA8A]"
                title="Acne Severity"
                value={bioMetrics.acne.acneScore || 0}
                description={getMetricDescription("acne", bioMetrics.acne.acneScore)}
              />
              <MetricCard
                color="bg-[#FFA500]"
                title="Dark Spot"
                value={bioMetrics.darkspot.darkspotScore || 0}
                description={getMetricDescription("darkspot", bioMetrics.darkspot.darkspotScore)}
              />
              <MetricCard
                color="bg-[#FF8080]"
                title="Scar"
                value={bioMetrics.scar.scarScore || 0}
                description={getMetricDescription("scar", bioMetrics.scar.scarScore)}
                />
            </div>
          </div>

          {/* Action Section */}
          <div className="text-center mt-6 md:mt-16">
            <button
              onClick={() => navigate("/skincareroutine")}
              className="font-lato font-light text-sm md:text-lg bg-[#14213D] text-white px-16 py-3 rounded-full transition-colors duration-300 hover:opacity-80"
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
      ) : (
        // Optionally, you could display a loading indicator or a message if no image is present
        <div className="z-10">
          <p className="font-lato text-gray-600">No analysis available.</p>
        </div>
      )}
    </div>
  );
}
