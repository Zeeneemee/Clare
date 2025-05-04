import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import SkinProfileInfo from "./page/SkinProfileInfo";
import BehindTechInfo from "./components/BehindTechInfo";
import OurProducts from "./components/OurProducts";
import LoadingScreen from "./components/ui/LoadingScreen";
import CameraCapture from "./page/CameraCapture";
import SkinAnalysisResult from "./page/SkinAnalysisResult";
import ProductPage from "./page/ProductPage";
import SkinAnalysisLanding from "./page/SkinAnalysisLanding";
import Routine from "./page/SkincareroutinePage";
import Signup from "./page/SignupPage";
import Terms from "./page/TermsPage";
import PrivacyPolicy from "./page/Privacy";
import ContactUs from "./page/ContactUs"; // Imported ContactUs component
import CameraComponent from "./page/cameraTest";
import ComingSoon from "./page/comingSoon";

// Importing individual product pages
import MoisturiserMen from "./page/productpages/MoisturiserMen";
import NightRevitaliserMen from "./page/productpages/NightRevitaliserMen";
import HandCream from "./page/productpages/HandCream";
import SkincareSet from "./page/productpages/SkincareSet";
import DayCream from "./page/productpages/DayCream";
import NightSerum from "./page/productpages/NightSerum";
import SkinTracking from "./page/skinTracking";

import { RoutineProvider } from './lib/routineContext'; // adjust path if needed

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
          <Route
            path="/"
            element={
              <>
                <HeroSection scrollY={scrollY} />
                <AboutUs />
                <SkinProfileInfo />
                <BehindTechInfo />
                {/* <OurProducts /> */}
              </>
            }
          />

          {/* Other routes */}
          <Route path="/camera" element={<CameraComponent/>} />
          <Route path="/loading" element={<LoadingScreen />} />
          <Route path="/result" element={<SkinAnalysisResult />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contactus" element={<ContactUs />} /> {/* New route for ContactUs */}
          <Route path="/test" element={<CameraCapture/>} />
          <Route path="/feedback" element={<ComingSoon />} />
          {/* Individual product pages */}
          <Route path="/products/moisturiser-men" element={<MoisturiserMen />} />
          <Route path="/products/night-revitaliser-men" element={<NightRevitaliserMen />} />
          <Route path="/products/hand-cream" element={<HandCream />} />
          <Route path="/products/skincare-set" element={<SkincareSet />} />
          <Route path="/products/day-cream" element={<DayCream />} />
          <Route path="/products/night-serum" element={<NightSerum />} />
          
       
            <Route path="/skinanalysis" element={<SkinAnalysisLanding />} />
            <Route path='/skintracking' element={<SkinTracking />} />
            <Route path="/skincareroutine" element={<Routine />} />
            <Route path="/signup" element={<Signup />} />
          

        </Routes>
      </div>
    </Router>
  );
}
