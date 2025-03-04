import React, { useState, useEffect } from 'react';

export default function SkinProfileInfo() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const section = document.getElementById('skin-profile-info-section');

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
      id="skin-profile-info-section"
      className="min-h-screen flex items-center justify-center px-5 pt-20 md:pt-32 mt-16 pb-20 md:pb-32"
      style={{
        backgroundColor: '#14213D',
        opacity,
        transition: 'opacity 0.4s ease-in-out',
      }}
    >
      <div className="max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center text-left mx-5">
        {/* Left Column - Title and Description */}
        <div className="flex flex-col justify-center items-start space-y-6 md:space-y-8 mt-5 md:mt-10">
          <h2 className="font-fanwood text-3xl md:text-5xl text-white">
            A Complete Skin Profile
          </h2>
          <p className="font-lato text-lg md:text-xl text-white font-light">
            Claré provides a detailed and complete skin profile, offering you an in-depth understanding of your skin's health and condition, empowering you to take the right steps towards healthier skin.
          </p>
        </div>

        {/* Right Column - List */}
        <div className="flex flex-col space-y-8 md:space-y-12 text-white font-lato font-light text-lg md:text-2xl items-start md:ml-20">
          {[  
            'Under Eye',
            'Skin Age',
            'Acne Severity',
            'Wrinkle',
            'Dark Spots',
            'Pores',
            'Personalized Recommendation',
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full border border-white/50 text-white font-light text-base md:text-lg">
                {index + 1}
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
