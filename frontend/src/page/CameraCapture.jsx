import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MediaQuery from "react-responsive";

// Custom Hook for Fade In on Scroll
const useSectionObserver = (sectionId) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setOpacity(entry.isIntersecting ? 1 : 0);
        });
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [sectionId]);

  return opacity;
};

const DesktopVersion = () => {
  const opacity = useSectionObserver("skin-analysis-section");

  return (
    <header
      id="skin-analysis-section"
      className="transition-opacity duration-1000 ease-in-out relative overflow-hidden"
      style={{ opacity }}
    >
      {/* White Section */}
      <div className="min-h-screen flex flex-col items-center justify-center w-full max-w-7xl mx-auto mt-52 space-y-8 bg-white">
        <h2 className="w-full text-3xl font-lato font-semibold text-[#14213D] text-left ml-[200px]">
          Get your personalized skin analysis and routine within 3 easy steps.
        </h2>
        <div className="flex flex-row justify-center items-center gap-28 -mt-40">
          {[1, 2, 3].map((num) => (
            <img
              key={num}
              src={`/assets/${num}.png`}
              alt={`Step ${num}`}
              className="w-[320px] h-auto rounded-2xl"
            />
          ))}
        </div>
        <div className="h-24" />
      </div>

      {/* Dark Section */}
      <div className="w-full flex flex-col items-center justify-center py-24 bg-[#14213D]">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-24">
          <div className="flex flex-col items-center p-6">
            <img src="/assets/qr.png" alt="QR Code" className="w-60 md:w-64 mb-6" />
            <p className="text-center text-white text-lg font-lato font-light max-w-md">
              To get your personalized skincare report and routine, scan the QR code with your phone to access our analysis model.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden relative w-[680px] h-[680px]">
            <video
              src="/assets/picdem.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

const TabletVersion = () => {
  const navigate = useNavigate();
  const opacity = useSectionObserver("skin-analysis-section");

  return (
    <header
      id="skin-analysis-section"
      className="transition-opacity duration-1000 ease-in-out relative overflow-hidden"
      style={{ opacity }}
    >
      {/* White Section */}
      <div className="min-h-screen flex flex-col items-center justify-center w-full max-w-7xl mx-auto mt-52 space-y-8 bg-white">
        <h2 className="w-full text-2xl font-lato font-semibold text-[#14213D] text-left ml-[140px] -mt-28">
          Get your personalized skin analysis and routine within 3 easy steps.
        </h2>
        <div className="flex flex-row justify-center items-center gap-12 -mt-40">
          {[1, 2, 3].map((num) => (
            <img
              key={num}
              src={`/assets/${num}.png`}
              alt={`Step ${num}`}
              className="w-[280px] h-auto rounded-2xl"
            />
          ))}
        </div>
        <div className="h-24" />
      </div>

      {/* Dark Section */}
      <div className="w-full flex flex-col items-center justify-center py-24 bg-[#14213D]">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-12">
          <div className="flex flex-col items-center p-6">
            <img src="/assets/clare.png" alt="Clare" className="w-32 h-auto mb-6" />
            <p className="text-center text-white text-lg font-lato font-light max-w-md -mt-2">
              Upload or take a selfie and let our AI analyze your skin for personalized recommendations.
            </p>
            <button
              onClick={() => navigate("/camera")}
              className="mt-10 px-10 py-4 border-2 border-white rounded-full font-lato text-white text-lg font-light hover:bg-white hover:bg-opacity-80 transition-all duration-300"
            >
              Upload Your Photo
            </button>
          </div>
          <div className="rounded-3xl overflow-hidden relative w-[500px] h-[500px]">
            <video
              src="/assets/picdem.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

const PhoneVersion = () => {
  const navigate = useNavigate();
  const opacity = useSectionObserver("skin-analysis-section");
  const [fadeIn, setFadeIn] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(1), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      id="skin-analysis-section"
      className="transition-opacity duration-1000 ease-in-out relative overflow-hidden"
      style={{ opacity }}
    >
      {/* White Section */}
      <div className="min-h-screen flex flex-col items-center justify-center w-full max-w-7xl mx-auto mt-48 space-y-8 bg-white">
        <h2 className="w-full max-w-[320px] text-lg font-lato font-semibold text-[#14213D] text-left">
          Get your personalized skin analysis and routine within 3 easy steps.
        </h2>
        <div className="flex flex-col items-center gap-8 -mt-40">
          {[1, 2, 3].map((num) => (
            <img
              key={num}
              src={`/assets/${num}.png`}
              alt={`Step ${num}`}
              className="w-[240px] h-auto rounded-2xl"
            />
          ))}
        </div>
        <div className="h-24" />
      </div>

      {/* Dark Section */}
      <div className="w-full flex flex-col items-center justify-center py-24 bg-[#14213D]">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center p-6">
            <img src="/assets/clare.png" alt="Clare" className="w-32 h-auto mb-6" />
            <p className="text-center text-white text-lg font-lato font-light max-w-md -mt-2">
              Upload or take a selfie and let our AI analyze your skin for personalized recommendations.
            </p>
            <button
              onClick={() => navigate("/camera")}
              className="mt-10 px-10 py-4 border-2 border-white rounded-full font-lato text-white text-lg font-light hover:bg-white hover:bg-opacity-80 transition-all duration-300"
              style={{ opacity: fadeIn }}
            >
              Upload Your Photo
            </button>
          </div>
          <div className="rounded-3xl overflow-hidden relative w-[300px] h-[300px]">
            <video
              src="/assets/picdem.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default function SkinAnalysisLanding() {
  return (
    <>
      <MediaQuery minWidth={1024}>
        <DesktopVersion />
      </MediaQuery>

      <MediaQuery minWidth={768} maxWidth={1023}>
        <TabletVersion />
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <PhoneVersion />
      </MediaQuery>
    </>
  );
}