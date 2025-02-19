import React, { useState, useEffect } from 'react';

export default function LandingInfo() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const section = document.getElementById('landing-info-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setOpacity(1);
          } else {
            setOpacity(0);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="landing-info-section"
      className="min-h-screen flex flex-col items-center px-5 pt-48 pb-32 bg-white"
      style={{ opacity, transition: 'opacity 1.5s ease-in-out' }}
    >
      {/* Content Wrapper (Title + Swapped Layout) */}
      <div className="max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
        {/* Left Column - Text */}
        <div className="text-left">
          <h2 className="font-fanwood text-4xl text-darkblue mb-6">
            A Complete Skin Profile
          </h2>

          <p className="font-lato text-xl mb-4 text-darkblue">
            Detect and analyze your skin across different skin concerns
          </p>

          <ul className="list-none mt-4 space-y-2 font-lato font-light text-lg text-darkblue">
            <li>• Fine Lines</li>
            <li>• Firmness</li>
            <li>• Wrinkles</li>
            <li>• Pores</li>
            <li>• Pigmentation</li>
            <li>• Radiance</li>
            <li>• Under Eye Bags</li>
          </ul>
        </div>

        {/* Right Column - Image (Moved Right) */}
        <div className="flex justify-center relative translate-x-4">
          <img
            src="/assets/pic1.png"
            alt="Skin Analysis"
            className="w-[400px] md:w-[500px] rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[60%] h-[80%] border-4 border-white rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* Behind the Tech Section (Moved Down + Extra Margin) */}
      <div className="max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-32">
        {/* Left Column - Image (Moved Left & Pushed Down) */}
        <div className="flex justify-center -translate-x-4 mt-10">
          <img
            src="/assets/pic2.png"
            alt="Skin Expert"
            className="w-[350px] md:w-[450px] rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Column - Text (Moved Down) */}
        <div className="mt-10">
          <h3 className="font-fanwood text-4xl text-darkblue mb-4">
            Behind the Tech
          </h3>
          <p className="font-lato font-light text-lg leading-7 text-darkblue">
            With more than 85% accuracy, Claré is based on 20 years of skin research. Our tool uses a skin strength
            database with 10,000 graded photos to give you an advanced skin analysis in one minute!
          </p>
        </div>
      </div>
    </section>
  );
}
