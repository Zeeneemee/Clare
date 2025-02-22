import React, { useState, useEffect } from 'react';

export default function BehindTechInfo() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const section = document.getElementById('behind-tech-info-section');

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
      { threshold: 0.3 }
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
      id="behind-tech-info-section"
      className="min-h-screen flex flex-col items-center px-5 pt-48 pb-32 bg-white"
      style={{ opacity, transition: 'opacity 1.5s ease-in-out' }}
    >
      {/* Behind the Tech Section */}
      <div className="max-w-[900px] flex flex-col items-center text-center">
        {/* Title and Description */}
        <h3 className="font-fanwood text-5xl text-darkblue mb-4">Behind the Tech</h3>
        <p className="font-lato font-light text-xl leading-7 text-darkblue max-w-[800px]">
          With more than 85% accuracy, Claré is based on 20 years of skin research. Our tool uses a skin strength
          database with 10,000 graded photos to give you an advanced skin analysis in one minute!
        </p>

        {/* Video */}
        <div className="flex justify-center mt-20">
          <video
            src="/assets/pic3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[1000px] md:w-[1200px] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
