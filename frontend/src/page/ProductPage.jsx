import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import products from "../lib/product";

const ProductPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) observer.observe(currentSectionRef);
    return () => {
      if (currentSectionRef) observer.unobserve(currentSectionRef);
    };
  }, []);

  return (
    <section
      className={`bg-white text-black py-[50px] px-5 text-center transition-all duration-[1.2s] ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
      }`}
      ref={sectionRef}
    >
      <h2
        className={`font-fanwood text-3xl md:text-4xl text-darkblue mb-10 mt-[80px] md:mt-[120px] transition-all duration-[1.2s] ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"
        }`}
      >
        Our Products
      </h2>

      {/* Mobile Grid */}
      <div className="md:hidden grid grid-cols-2 gap-1 mx-auto max-w-[1200px]">
        {products.map((product, index) => (
          <Link to={product.link} key={index} className="block">
            <div
              className={`bg-white/90 p-4 rounded-xl text-center transition-all duration-[1.2s] ease-in-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"
              } hover:translate-y-[-5px]`}
            >
              <div className="w-full aspect-square mb-2 rounded-xl overflow-hidden">
                <img
                  src={process.env.PUBLIC_URL + product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-lato font-medium text-xs md:text-lg text-darkblue mt-2">
                {product.title}
              </h3>
              <p className="font-lato font-light text-gray-500 text-xs md:text-sm mt-1">
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {[products.slice(0, 3), products.slice(3, 6)].map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-16 flex-wrap w-full mb-16">
            {row.map((product, index) => (
              <Link to={product.link} key={index} className="block w-[300px]">
                <div
                  className={`bg-white/90 p-5 rounded-xl text-center transition-all duration-[1.2s] ease-in-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"
                  } hover:translate-y-[-5px]`}
                >
                  <img
                    src={process.env.PUBLIC_URL + product.image}
                    alt={product.title}
                    className="w-full h-[200px] object-contain mb-5 rounded-xl"
                  />
                  <h3 className="font-lato font-medium text-xl text-darkblue mb-2.5">
                    {product.title}
                  </h3>
                  <p className="hidden md:block font-lato font-light text-darkblue text-sm leading-6 mb-2.5">
                    {product.description}
                  </p>
                  <p className="font-lato font-light text-gray-500 text-sm">
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;