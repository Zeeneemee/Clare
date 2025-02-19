import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OurProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate(); // Use navigate for redirection

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting !== isVisible) {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const handleButtonClick = () => {
    navigate("/products"); // Navigate to the products page
  };

  return (
    <section
      className={`bg-white text-black py-[50px] px-5 text-center ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
      } transition-all duration-[1.2s] ease-in-out`}
      ref={sectionRef}
    >
      <h2
        className={`font-fanwood text-4xl text-darkblue mb-10 mt-[120px] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"
        } transition-all duration-[1.2s] ease-in-out`}
      >
        Our Products
      </h2>

      <div
        className={`flex justify-center gap-10 flex-wrap ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-all duration-[1.2s] ease-in-out`}
      >
        {[
          "/assets/daycream.png",
          "/assets/formen.png",
          "/assets/handcream.png",
        ].map((img, index) => (
          <div
            key={index}
            className={`w-[300px] bg-white/90 p-5 rounded-xl text-center transition-all duration-[1.2s] ease-in-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"
            } hover:translate-y-[-5px]`}
          >
            <img
              src={process.env.PUBLIC_URL + img}
              alt={`Product ${index}`}
              className="w-full h-[200px] object-contain mb-5 rounded-xl"
            />
            <h3 className="font-lato font-medium text-xl text-darkblue mb-2.5">
              {index === 0 && "Cutistem™ Day Cream"}
              {index === 1 && "Cutistem™ Moisturiser for Men"}
              {index === 2 && "Cutistem™ Hand Cream"}
            </h3>
            <p className="font-lato font-light text-darkblue text-sm leading-6">
              {index === 0 &&
                "Facial skin care with apple stem cells and dragon fruit extracts to repair, nourish, and protect the skin all day long. Unlock the power of stem cells and get fresher, smoother, brighter skin."}
              {index === 1 &&
                "With stem cells, rice bran, witch hazel extracts, allantoin, niacinamide and anti-UVA/UVB properties, this moisturiser for men promotes a healthy, youthful complexion while reducing irritation and preventing sun damage."}
              {index === 2 &&
                "A hand skin care with apple stem cell extracts, tamarind and calendula extracts to nourish the skin, hydrate, and protect. Unlock the power of stem cells and enjoy smoother, younger-looking hands."}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={handleButtonClick}
        className="font-lato font-light bg-[#003366] text-white px-8 py-3 rounded-full mt-16 transition-colors duration-300 hover:bg-[#ADD8E6] hover:text-[#003366]"
      >
        See More
      </button>
    </section>
  );
};

export default OurProducts;


