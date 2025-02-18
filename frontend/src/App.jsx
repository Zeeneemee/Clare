import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import OurProducts from "./components/OurProducts";
import LoadingScreen from "./components/LoadingScreen";
import CameraCapture from "./components/CameraCapture";
import SkinAnalysisResult from "./components/SkinAnalysisResult";

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
          <Route path="/" element={
            <>
              <HeroSection scrollY={scrollY} />
              <AboutUs />
              <OurProducts />
            </>
          } />
          <Route path="/loading" element={<LoadingScreen />} />
          <Route path="/camera" element={<CameraCapture />} />
          <Route path="/result" element={<SkinAnalysisResult />} />
        </Routes>
      </div>
    </Router>
  );
}
