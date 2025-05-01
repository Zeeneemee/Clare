import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Routine() {
  const [fadeIn, setFadeIn] = useState(0);
  const [activeRoutine, setActiveRoutine] = useState("morning");
  const [morningRoutine, setMorningRoutine] = useState([]);
  const [nightRoutine, setNightRoutine] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(1), 100);

    const acne = parseFloat(localStorage.getItem("acneScore"));
    const darkspot = parseFloat(localStorage.getItem("darkspotScore"));
    const scar = parseFloat(localStorage.getItem("scarScore"));
    const wrinkles = parseFloat(localStorage.getItem("wrinklesScore"));

    const descriptions = {
      Cleanse: () => {
        if (acne > 6)
          return "Use a salicylic acid cleanser to control severe acne and reduce inflammation.";
        if (scar > 6)
          return "Use a brightening cleanser to gently exfoliate and reduce scar pigmentation.";
        return "Use a gentle cleanser to refresh your skin and remove overnight impurities.";
      },
      Tone: () => {
        if (darkspot > 6)
          return "Apply a toner with niacinamide to help fade dark spots and even skin tone.";
        return "Use a hydrating toner to prep the skin for the next steps and restore pH balance.";
      },
      Serum: () => {
        if (wrinkles > 6)
          return "Use a serum with retinol or peptides to target deep wrinkles and boost collagen.";
        if (darkspot > 6)
          return "Apply a Vitamin C serum to brighten the skin and reduce dark spots.";
        return "Use a lightweight serum to enhance skin hydration and glow.";
      },
      Moisturize: () => {
        if (wrinkles > 6)
          return "Use a richer moisturizer to combat dryness and soften fine lines.";
        return "Apply a lightweight moisturizer to keep your skin hydrated all day.";
      },
      Sunscreen: () => {
        return "Apply a broad-spectrum SPF 30+ sunscreen to protect your skin from UV damage.";
      },
      Exfoliate: () => {
        if (scar > 6 || darkspot > 6)
          return "Use a chemical exfoliant (AHA/BHA) 2–3 times a week to remove dead skin cells and improve skin clarity.";
        return null;
      },
      Overnight: () => {
        if (wrinkles > 6)
          return "Use a retinol or peptide night treatment to promote skin renewal and reduce fine lines.";
        if (scar > 6)
          return "Use a night treatment with niacinamide or tranexamic acid to fade acne scars overnight.";
        return null;
      },
    };

    const products = {
      Cleanse: () => {
        if (acne > 6)
          return {
            name: "Salicylic Acid Daily Gentle Cleanser",
            link: "https://s.shopee.co.th/9ABj9km0wg",
            image: "<PUT_IMAGE_URL_HERE>",
          };
        if (scar > 6)
          return {
            name: "Eucerin SPOTLESS BRIGHTENING GENTLE CLEANSING FOAM",
            link: "https://s.shopee.co.th/4An3CdlqIW",
            image: "<PUT_IMAGE_URL_HERE>",
          };
        return {
          name: "CeraVe Blemish Control Cleanser",
          link: "https://s.shopee.co.th/1LSroaZm4Y",
          image: "<PUT_IMAGE_URL_HERE>",
        };
      },
      Tone: () => {
        if (darkspot > 6)
          return {
            name: "SKINTIFIC Niacinamide brightening essence toner",
            link: "https://s.shopee.co.th/9KV9LwJxWk",
            image: "<PUT_IMAGE_URL_HERE>",
          };
        return {
          name: "The Ordinary Glycolic Acid 7% Exfoliating toner",
          link: "https://s.shopee.co.th/3LDwCPtK5a",
          image: "<PUT_IMAGE_URL_HERE>",
        };
      },
      Serum: () => {
        if (wrinkles > 6)
          return {
            name: "THESKINLIST Advanced Retinal HPR Anti-Wrinkles Serum",
            link: "https://s.shopee.co.th/4An3C7pYae",
            image: "<PUT_IMAGE_URL_HERE>",
          };
        if (darkspot > 6)
          return {
            name: "CeraVe Skin Renewing Vitamin C Serum",
            link: "https://s.shopee.co.th/20iYcJyAqt",
            image: "<PUT_IMAGE_URL_HERE>",
          };
        return {
          name: "INGU Brightening Crystal Serum",
          link: "https://s.shopee.co.th/9zkq9Srjcd",
          image: "<PUT_IMAGE_URL_HERE>",
        };
      },
      Moisturize: () => {
        if (wrinkles > 6)
          return {
            name: "La Roche-Posay Cicaplast baume B5+",
            link: "https://s.shopee.co.th/4VPtbR6WpE",
            image: "<PUT_IMAGE_URL_HERE>",
          };
        return {
          name: "Cerave Facial Moisturising Lotion",
          link: "https://s.shopee.co.th/5VIQnL5dvG",
          image: "<PUT_IMAGE_URL_HERE>",
        };
      },
      Sunscreen: () => {
        return {
          name: "Loreal Paris UV Defender Invisible Fluid SPF50+ PA++++",
          link: "https://s.shopee.co.th/xUFLfHdZ",
          image: "<PUT_IMAGE_URL_HERE>",
        };
      },
      Exfoliate: () => {
        if (scar > 6 || darkspot > 6)
          return {
            name: "COSRX AHA/BHA Clarifying Treatment Toner",
            link: "https://s.shopee.co.th/5VIQndSgl7",
            image: "<PUT_IMAGE_URL_HERE>",
          };
        return null;
      },
      Overnight: () => {
        if (wrinkles > 6)
          return {
            name: "JKxLAB 5C Peptide Ampoule Dose",
            link: "https://s.shopee.co.th/2fyFQZRS76",
            image: "<PUT_IMAGE_URL_HERE>",
          };
        if (scar > 6)
          return {
            name: "SKINTIFIC 3% Tranexamic Acid",
            link: "https://s.shopee.co.th/AA4GMQJ96a",
            image: "<PUT_IMAGE_URL_HERE>",
          };
        return null;
      },
    };

    const morningSteps = [
      "Cleanse",
      "Tone",
      "Serum",
      "Moisturize",
      "Sunscreen",
    ];
    const nightSteps = ["Cleanse", "Serum", "Moisturize"];

    const AM = morningSteps.map((title, i) => {
      const product = products[title]();
      return {
        step: i + 1,
        title,
        description: descriptions[title]() || "",
        product: product ? (
          <a href={product.link} target="_blank" rel="noopener noreferrer">
            {product.name}
          </a>
        ) : null,
        image: product ? product.image : null,
      };
    });

    const PM = [
      ...nightSteps.map((title, i) => {
        const product = products[title]();
        return {
          step: i + 1,
          title,
          description: descriptions[title]() || "",
          product: product ? (
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              {product.name}
            </a>
          ) : null,
          image: product ? product.image : null,
        };
      }),
      products["Exfoliate"]() && {
        step: nightSteps.length + 1,
        title: "Exfoliate",
        description: descriptions["Exfoliate"](),
        product: (
          <a
            href={products["Exfoliate"]().link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {products["Exfoliate"]().name}
          </a>
        ),
        image: products["Exfoliate"]().image,
      },
      products["Overnight"]() && {
        step: nightSteps.length + 2,
        title: "Overnight Treatment",
        description: descriptions["Overnight"](),
        product: (
          <a
            href={products["Overnight"]().link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {products["Overnight"]().name}
          </a>
        ),
        image: products["Overnight"]().image,
      },
    ].filter(Boolean);

    setMorningRoutine(AM);
    setNightRoutine(PM);

    return () => clearTimeout(timer);
  }, []);

  // your existing return + MobileRoutineCard + DesktopRoutineCard code remains the same,
  // just update the image part in <MobileRoutineStep> and <DesktopRoutineStep> like I showed above 👌
}
