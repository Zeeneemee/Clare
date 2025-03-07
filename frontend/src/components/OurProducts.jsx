import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OurProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    const sectionCurrent = sectionRef.current
    if (sectionCurrent) observer.observe(sectionCurrent);
    return () => {
      if (sectionCurrent) observer.unobserve(sectionCurrent);
    };
  }, []);

  const handleButtonClick = () => navigate("/products");

  const products = [
    { 
      img: "/assets/daycream.png", 
      title: "Cutistem™ Day Cream", 
      desc: "Facial skin care with apple stem cells and dragon fruit extracts to repair, nourish, and protect the skin all day long. Unlock the power of stem cells and get fresher, smoother, brighter skin." 
    },
    { 
      img: "/assets/formen.png", 
      title: "Cutistem™ Moisturiser for Men", 
      desc: "With stem cells, rice bran, witch hazel extracts, allantoin, niacinamide and anti-UVA/UVB properties, this moisturiser for men promotes a healthy, youthful complexion while reducing irritation and preventing sun damage." 
    },
    { 
      img: "/assets/handcream.png", 
      title: "Cutistem™ Hand Cream", 
      desc: "A hand skin care with apple stem cell extracts, tamarind and calendula extracts to nourish the skin, hydrate, and protect. Unlock the power of stem cells and enjoy smoother, younger-looking hands." 
    },
  ];

  return (
    <section
      className={`bg-white text-black py-[50px] px-5 text-center ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
      } transition-all duration-[0.4s] ease-in-out relative md:top-0`}
      ref={sectionRef}
      style={{ top: "-40px" }}
    >
      <h2
        className={`font-fanwood text-3xl md:text-4xl text-darkblue mb-10 mt-[-40px] md:mt-[-10px] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"
        } transition-all duration-[0.4s] ease-in-out`}
      >
        Our Products
      </h2>

      {/* Product Container */}
      <div
        className={`flex gap-5 justify-start md:justify-center overflow-x-auto md:overflow-visible scrollbar-hide md:flex-wrap ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-all duration-[0.4s] ease-in-out`}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className={`w-[300px] min-w-[280px] md:min-w-0 bg-white/90 p-5 rounded-xl text-center ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"
            } transition-all duration-[1.2s] md:duration-[0.5s] ease-in-out hover:translate-y-[-5px] flex-shrink-0`}
            style={{ scrollSnapAlign: "start" }}
          >
            <img
              src={process.env.PUBLIC_URL + product.img}
              alt={product.title}
              className="w-full h-[200px] object-contain mb-5 rounded-xl"
            />
            <h3 className="font-lato font-medium text-xl text-darkblue mb-2.5">
              {product.title}
            </h3>
            <p className="font-lato font-light text-darkblue text-sm leading-6">
              {product.desc}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={handleButtonClick}
        className="font-lato font-light bg-[#14213D] text-white px-8 py-3 rounded-full mt-16 transition-colors duration-300 hover:opacity-80"
      >
        See More
      </button>
    </section>
  );
};

export default OurProducts;