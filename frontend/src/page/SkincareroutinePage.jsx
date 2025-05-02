import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Pagination from "../components/ui/pagination";
import MobileRoutineCard from "../components/routine/mobileRoutineCard";
import RoutineCard from "../components/routine/routineCard";

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
    const underEye = parseFloat(localStorage.getItem("underEyeScore"));

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
            image:
              "https://down-th.img.susercontent.com/file/0a8391828049fcbd5f393cad840a9dcc",
          };
        if (scar > 6)
          return {
            name: "Eucerin SPOTLESS BRIGHTENING GENTLE CLEANSING FOAM",
            link: "https://s.shopee.co.th/4An3CdlqIW",
            image:
              "https://s3.konvy.com/static/team/2021/1221/16400792088075.jpg",
          };
        return {
          name: "CeraVe Blemish Control Cleanser",
          link: "https://s.shopee.co.th/1LSroaZm4Y",
          image:
            "https://media.allaboutyou.co.th/media/catalog/product/cache/68bd2c830b15d292727e06e369c4931c/9/f/9f825a6210d6cdfa13d249814c3a0f5a8ca9b6219f0fb7bfa58c41cb41fdf19d.jpeg",
        };
      },
      Tone: () => {
        if (darkspot > 6)
          return {
            name: "SKINTIFIC Niacinamide brightening essence toner",
            link: "https://s.shopee.co.th/9KV9LwJxWk",
            image:
              "https://medias.watsons.co.th/publishing/WTCTH-BP_309630-front-zoom.jpg",
          };
        return {
          name: "The Ordinary Glycolic Acid 7% Exfoliating toner",
          link: "https://s.shopee.co.th/3LDwCPtK5a",
          image:
            "https://down-th.img.susercontent.com/file/th-11134207-7rasf-m518kz2d7ixp9c",
        };
      },
      Serum: () => {
        if (wrinkles > 6)
          return {
            name: "Gravich Max Retinal Youthless New Gen Serum",
            link: "https://s.shopee.co.th/40TeQ0LGbo",
            image:
              "https://gravich.com/wp-content/uploads/2025/03/GP2502-0186-GRAVICH-BANNER-MAX-RETINAL-YOUTHLESS-NEW-GEN-SERUM-01.png",
          };
        if (darkspot > 6)
          return {
            name: "CeraVe Skin Renewing Vitamin C Serum",
            link: "https://s.shopee.co.th/20iYcJyAqt",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5hZ1OYeiElnOUknAOCGXoDZJIUtF-5mbcQ&s",
          };
        return {
          name: "INGU Brightening Crystal Serum",
          link: "https://s.shopee.co.th/9zkq9Srjcd",
          image:
            "https://medias.watsons.co.th/publishing/WTCTH-314756-side-zoom.jpg?version=1731697813",
        };
      },
      Moisturize: () => {
        if (wrinkles > 6)
          return {
            name: "La Roche-Posay Cicaplast baume B5+",
            link: "https://s.shopee.co.th/4VPtbR6WpE",
            image:
              "https://s3.konvy.com/static/team/2023/0127/16747905387250.jpg",
          };
        return {
          name: "Cerave Facial Moisturising Lotion",
          link: "https://s.shopee.co.th/5VIQnL5dvG",
          image:
            "https://s3.konvy.com/static/team/2024/0913/17262229266930.jpg",
        };
      },
      Sunscreen: () => {
        return {
          name: "Loreal Paris UV Defender Invisible Fluid SPF50+ PA++++",
          link: "https://s.shopee.co.th/xUFLfHdZ",
          image:
            "https://s3.konvy.com/static/team/2022/0901/16620001812876_600x600.jpg",
        };
      },
      Exfoliate: () => {
        if (scar > 6 || darkspot > 6)
          return {
            name: "COSRX AHA/BHA Clarifying Treatment Toner",
            link: "https://s.shopee.co.th/5VIQndSgl7",
            image:
              "https://s3.konvy.com/static/team/2021/1027/16353156957760.jpg",
          };
        return null;
      },
      Overnight: () => {
        if (wrinkles > 6)
          return {
            name: "JKxLAB 5C Peptide Ampoule Dose",
            link: "https://s.shopee.co.th/2fyFQZRS76",
            image:
              "https://s3.konvy.com/static/team/2025/0130/17382234616621.jpg",
          };
        if (scar > 6)
          return {
            name: "SKINTIFIC 3% Tranexamic Acid",
            link: "https://s.shopee.co.th/AA4GMQJ96a",
            image: "https://cdn.thebeautrium.com/image-product/B0075269.png",
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

  // 🔥 Add your full return here 👇
  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 transition-opacity duration-1000 ease-in-out"
      style={{ opacity: fadeIn }}
    >
      <div className="mx-8 text-center md:hidden mt-24">
        <h1 className="font-fanwood font-normal text-darkblue text-2xl leading-[62.93px]">
          Personalized Skincare Routine
        </h1>
        <p className="font-lato font-light italic text-sm text-gray-500 mb-4">
          Our AI has analyzed your skin and generated a detailed report with
          personalized insights and recommendations.
        </p>
      </div>

      <h1 className="hidden md:block font-fanwood font-normal text-darkblue text-4xl leading-[62.93px] text-center mb-1 mt-[100px]">
        Personalized Skincare Routine
      </h1>
      <p className="hidden md:block font-lato font-light italic text-lg text-center text-gray-500 mb-8">
        Our AI has analyzed your skin and generated a detailed report with
        personalized <br /> insights and recommendations.
      </p>

      <div className="flex space-x-4 mb-6 mt-10 md:hidden">
        <button
          className={`px-6 py-3 rounded-full transition hover:opacity-80 text-sm font-lato font-light ${
            activeRoutine === "morning"
              ? "bg-[#14213D] text-white"
              : "bg-white text-[#14213D] border border-[#14213D]"
          }`}
          onClick={() => setActiveRoutine("morning")}
        >
          Morning Routine
        </button>
        <button
          className={`px-6 py-3 rounded-full transition hover:opacity-80 text-sm font-lato font-light ${
            activeRoutine === "night"
              ? "bg-[#14213D] text-white"
              : "bg-white text-[#14213D] border border-[#14213D]"
          }`}
          onClick={() => setActiveRoutine("night")}
        >
          Night Routine
        </button>
      </div>

      <div className="w-full max-w-3xl md:hidden">
        {activeRoutine === "morning" && (
          <MobileRoutineCard steps={morningRoutine} />
        )}
        {activeRoutine === "night" && (
          <MobileRoutineCard steps={nightRoutine} />
        )}
      </div>

      <div className="hidden md:flex w-full max-w-6xl flex-col lg:flex-row gap-10">
        <RoutineCard title="Morning Routine" steps={morningRoutine} />
        <RoutineCard title="Night Routine" steps={nightRoutine} />
      </div>

      <div className="flex space-x-3 md:space-x-6 mt-6">
        <Link
          to="/result"
          className="font-lato font-light text-sm md:text-base px-16 md:px-20 py-3 border border-black text-black rounded-full hover:bg-gray-100 transition"
        >
          Back
        </Link>
        <Link
          to="/signup"
          className="font-lato font-light text-sm md:text-base px-16 md:px-20 py-3 bg-[#14213D] text-white rounded-full hover:opacity-80 transition"
        >
          Next
        </Link>
      </div>

      <div className="flex justify-center gap-3 mt-5 md:hidden">
        <div className="w-20 h-1 bg-[#003366] rounded-full"></div>
        <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
        <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
      </div>
      <div className="hidden md:flex gap-3 mt-5">
        <div className="w-24 h-1 bg-[#14213D] rounded-full"></div>
        <div className="w-24 h-1 bg-[#14213D] rounded-full"></div>
        <div className="w-24 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );

  // your existing return + MobileRoutineCard + DesktopRoutineCard code remains the same,
  // just update the image part in <MobileRoutineStep> and <DesktopRoutineStep> like I showed above 👌
}
