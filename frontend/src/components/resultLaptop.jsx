import { useRef } from "react";
import useSectionObserver from "../lib/useSectionObserver";

const DesktopVersion = () => {
  const opacity = useSectionObserver("skin-analysis-section");
  const darkSectionRef = useRef(null);

  const handleScrollToDarkSection = () => {
    if (darkSectionRef.current) {
      darkSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="skin-analysis-section"
      className="transition-opacity duration-1000 ease-in-out relative overflow-hidden"
      style={{ opacity }}
    >
      {/* White Section */}
      <div className="min-h-screen flex flex-col items-center justify-center w-full max-w-7xl mx-auto mt-24 space-y-8 bg-white">
        <h2 className="w-full text-3xl font-lato font-semibold text-[#14213D] text-left ml-[200px]">
          Get your personalized skin analysis and routine within 3 easy steps.
        </h2>
        <div className="flex flex-row justify-center items-center gap-28 -mt-40">
          {[1, 2, 3].map((num) => (
            <img
              key={num}
              src={`/assets/${num}.webp`}
              alt={`Step ${num}`}
              className="w-[320px] h-auto rounded-2xl"
            />
          ))}
        </div>
        {/* Button to Scroll */}
          </div>

      {/* Dark Section */}
      <div
        ref={darkSectionRef}
        className="w-full flex flex-col items-center justify-center py-24 bg-[#14213D]"
      >
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-24">
          {/* Center QR Code */}
          <div className="flex flex-col items-center justify-center p-6">
            <img src="/assets/qr.png" alt="QR Code" className="w-60 md:w-64 mb-6" />
            <p className="text-center text-white text-lg font-lato font-light max-w-md">
              To get your personalized skincare report and routine, scan the QR code with your phone to access our analysis model.
            </p>
          </div>

          {/* Video Section */}
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

export default DesktopVersion;
