import React, { useState, useEffect } from 'react';

export default function AboutUs() {
  const [opacity, setOpacity] = useState(0);

  // Observer to detect when the section is in the viewport
  useEffect(() => {
    const section = document.getElementById('about-us-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is in view, fade in (opacity 1)
          if (entry.isIntersecting) {
            setOpacity(1);
          } else {
            setOpacity(0);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    // Start observing the About Us section
    if (section) {
      observer.observe(section);
    }

    // Cleanup observer when component unmounts
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="about-us-section"
      className="min-h-screen flex items-center justify-center px-5 py-20 relative"
      style={{
        opacity: opacity,
        transition: 'opacity 2s ease-out', // Slower 2-second fade-in/out smooth transition
      }}
    >
      {/* Background */}
      <div
        className="absolute left-0 top-0 w-1/3 h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/assets/bg4.png')" }}
      ></div>

      <div className="max-w-[1200px] ml-[33.33%]">
        <div className="flex gap-10 items-center">
          {/* Face Image with Margin Left and Bigger Size */}
          <div
            style={{
              marginLeft: '-380px', // Move it a little more to the left
              marginRight: '20px', // Optional: Adjust this for right margin
              opacity: opacity,
              transition: 'opacity 2s ease-out', // Ensure image fades in with other elements
            }}
          >
            <img
              src='/assets/face.png'
              alt="Woman Face"
              style={{
                width: '450px', // Bigger image size
                height: 'auto',
                borderRadius: '10px',
              }}
            />
          </div>

          <div
            className="text-navy max-w-[550px]"
            style={{
              opacity: opacity,
              transition: 'opacity 2s ease-out', // Ensure text fades in with other elements
            }}
          >
            {/* About Us Heading with fanwood font */}
            <h2 className="font-fanwood text-5xl mb-16 text-darkblue">About Us</h2> {/* Increased font size */}

            {/* Who Are We Section without bold */}
            <div className="mb-10 mt-[-20px]">
              <h2 className="font-lato text-2xl mb-4 text-darkblue">Who Are We</h2> {/* Removed font-semibold */}
              <p className="font-lato font-light text-lg leading-7 text-darkblue"> {/* Increased font size */}
                Claré uses AI-driven technology to provide personalized skincare solutions, helping individuals understand their skin and achieve healthier, clearer skin effortlessly.
              </p>
            </div>

            {/* How It Works Section without bold */}
            <div className="mt-10">
              <h2 className="font-lato text-2xl mb-4 text-darkblue">How It Works</h2> {/* Removed font-semibold */}
              <ul className="list-disc pl-5 space-y-3 font-lato font-light text-lg text-darkblue"> {/* Increased font size */}
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
