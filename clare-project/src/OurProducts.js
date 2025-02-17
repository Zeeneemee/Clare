import React from "react";
import "./OurProducts.css";
import daycream from "./assets/daycream.png";
import formen from "./assets/formen.png";
import handcream from "./assets/handcream.png";

const OurProducts = () => {
  return (
    <section className="our-products">
      <h2 className="section-title">Our Products</h2>
      <div className="products-container">
        <div className="product-card">
          <img src={daycream} alt="Cutistem Day Cream" className="product-image" />
          <h3 className="product-name">Cutistem™ Day Cream</h3>
          <p className="product-description">
            Facial skin care with apple stem cells and dragon fruit extracts to repair, nourish, 
            and protect the skin all day long. Unlock the power of stem cells and get fresher, smoother, 
            brighter skin.
          </p>
        </div>

        <div className="product-card">
          <img src={formen} alt="Cutistem Moisturiser for Men" className="product-image" />
          <h3 className="product-name">Cutistem™ Moisturiser for Men</h3>
          <p className="product-description">
            With stem cells, rice bran, witch hazel extracts, allantoin, niacinamide and anti-UVA/UVB properties, 
            this moisturiser for men promotes a healthy, youthful complexion while reducing irritation and preventing sun damage.
          </p>
        </div>

        <div className="product-card">
          <img src={handcream} alt="Cutistem Hand Cream" className="product-image" />
          <h3 className="product-name">Cutistem™ Hand Cream</h3>
          <p className="product-description">
            A hand skin care with apple stem cell extracts, tamarind and calendula extracts to nourish the skin, hydrate, and protect. 
            Unlock the power of stem cells and enjoy smoother, younger-looking hands.
          </p>
        </div>
      </div>
      <button className="see-more-btn">See More</button>
    </section>
  );
};

export default OurProducts;

