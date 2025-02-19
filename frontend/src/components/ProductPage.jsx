import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Ensure links work
import products from "../lib/product"

const ProductPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

      <div className="flex justify-center gap-16 flex-wrap">
        {/* First Row */}
        <div className="flex justify-center gap-16 flex-wrap w-full">
          {products.slice(0, 3).map((product, index) => (
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
                <p className="font-lato font-light text-darkblue text-sm leading-6">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex justify-center gap-16 flex-wrap w-full">
          {products.slice(3, 6).map((product, index) => (
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
                <p className="font-lato font-light text-darkblue text-sm leading-6">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
