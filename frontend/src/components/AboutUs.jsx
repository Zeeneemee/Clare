import React, { useState, useEffect } from 'react';

export default function AboutUs() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const section = document.getElementById('about-us-section');
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
  }, []);

  return (
    <section
      id="about-us-section"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-5 py-20 relative"
      style={{ opacity, transition: 'opacity 0.4s ease-out' }}
    >
      {/* Mobile Background */}
      <div
        className="md:hidden absolute left-0 bottom-0 w-full h-[360px] bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/assets/bg4.png')" }}
      />

      {/* Desktop Background */}
      <div
        className="hidden md:block absolute left-0 top-0 w-1/3 h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/assets/bg4.png')" }}
      />

      <div className="max-w-[1200px] mx-8 md:ml-[33.33%]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
          {/* Image Container */}
          <div className="order-2 md:order-1 w-full md:w-auto mt-8 md:mt-0 md:ml-[-380px]">
            <div className="relative flex justify-center md:block">
              <img
                src='/assets/face.png'
                alt="Woman Face"
                className="w-[450px] max-w-full h-auto rounded-[10px] shadow-md md:shadow-none mx-auto"
              />
              <div className="md:hidden absolute inset-0 bg-black opacity-30 rounded-lg -z-10" />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 text-navy max-w-[550px]">
            <h2 className="font-fanwood text-3xl md:text-5xl mb-8 md:mb-16 text-darkblue">
              About Us
            </h2>

            <div className="mb-6 md:mb-10 -mt-5">
              <h2 className="font-lato text-lg md:text-2xl mb-3 md:mb-4 text-darkblue">
                Who Are We
              </h2>
              <p className="font-lato font-light text-sm md:text-lg leading-6 md:leading-7 text-darkblue">
                Claré uses AI-driven technology to provide personalized skincare solutions, helping individuals understand their skin and achieve healthier, clearer skin effortlessly.
              </p>
            </div>

            <div className="mt-6 md:mt-10">
              <h2 className="font-lato text-lg md:text-2xl mb-3 md:mb-4 text-darkblue">
                How It Works
              </h2>
              <ul className="list-disc pl-5 space-y-2 md:space-y-3 font-lato font-light text-sm md:text-lg text-darkblue">
                <li><strong>AI-Powered Skin Analysis:</strong> Upload a simple photo and receive a detailed skin evaluation.</li>
                <li><strong>Personalized Recommendations:</strong> Get science-backed skincare routines tailored to your needs.</li>
                <li><strong>Progress Tracking:</strong> Monitor your skin's improvement over time with AI-driven insights.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}