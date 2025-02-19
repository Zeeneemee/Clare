import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import OurProducts from "./components/OurProducts";
import LoadingScreen from "./components/LoadingScreen";
import CameraCapture from "./components/CameraCapture";
import SkinAnalysisResult from "./components/SkinAnalysisResult";
import ProductPage from "./components/ProductPage";

// Importing individual product pages
import MoisturiserMen from "./components/productpages/MoisturiserMen";
import NightRevitaliserMen from "./components/productpages/NightRevitaliserMen";
import HandCream from "./components/productpages/HandCream";
import SkincareSet from "./components/productpages/SkincareSet";
import DayCream from "./components/productpages/DayCream";
import NightSerum from "./components/productpages/NightSerum";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="text-navy">
        <NavBar scrolled={scrollY > 50} />
        <Routes>
          {/* Home page route */}
          <Route path="/" element={
            <>
              <HeroSection scrollY={scrollY} />
              <AboutUs />
              <OurProducts />
            </>
          } />

          {/* Other routes */}
          <Route path="/camera" element={<CameraCapture />} />
          <Route path="/result" element={<SkinAnalysisResult />} />
          <Route path="/products" element={<ProductPage />} />

          {/* Individual product pages */}
          <Route path="/products/moisturiser-men" element={<MoisturiserMen />} />
          <Route path="/products/night-revitaliser-men" element={<NightRevitaliserMen />} />
          <Route path="/products/hand-cream" element={<HandCream />} />
          <Route path="/products/skincare-set" element={<SkincareSet />} />
          <Route path="/products/day-cream" element={<DayCream />} />
          <Route path="/products/night-serum" element={<NightSerum />} />
        </Routes>
      </div>
    </Router>
  );
}
