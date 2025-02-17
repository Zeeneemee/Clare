import { useEffect, useState } from 'react';
//import './styles/NavBar.css';
//import './styles/HeroSection.css';
//import './styles/AboutUs.css';
//import './styles/OurProducts.css';
import OurProducts from '../section/OurProducts.jsx';
import NavBar from '../components/NavBar.jsx';
import AboutUs from '../section/AboutUs.jsx';
import HeroSection from '../section/HeroSection.jsx';

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [showAboutUs, setShowAboutUs] = useState(true);
  const [showWhoAreWe, setShowWhoAreWe] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // About Us section fade visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAboutUs(true);  // Fade in fully
        } else {
          setShowAboutUs(false); // Fade out
        }
      },
      { threshold: 0.3 } // Adjust threshold for earlier fade-out
    );

    const aboutUsSection = document.querySelector('.about-us');
    if (aboutUsSection) observer.observe(aboutUsSection);

    return () => {
      if (aboutUsSection) observer.unobserve(aboutUsSection);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowWhoAreWe(true);
        }
      },
      { threshold: 0.5 }
    );

    const whoAreWeSection = document.querySelector('.who-are-we');
    if (whoAreWeSection) observer.observe(whoAreWeSection);

    return () => {
      if (whoAreWeSection) observer.unobserve(whoAreWeSection);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowHowItWorks(true);
        }
      },
      { threshold: 0.5 }
    );

    const howItWorksSection = document.querySelector('.how-it-works');
    if (howItWorksSection) observer.observe(howItWorksSection);

    return () => {
      if (howItWorksSection) observer.unobserve(howItWorksSection);
    };
  }, []);

  const analyzeSkin = () => {
    alert('Redirecting to skin analysis...');
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <NavBar/>

      {/* Hero Section */}
      <header className="hero" style={{ opacity: Math.max(1 - scrollY / 300, 0) }}>
        <div className="hero-content">
          <h1>claré</h1>
          <p>Understand Your Skin with AI-Powered Insights</p>
          <button className="cta-button" onClick={analyzeSkin}>
            Analyze Your Skin Now
          </button>
        </div>
      </header>

      {/* About Us Section with Smooth Fade Effect */}
      <section 
        className={`about-us ${showAboutUs ? 'visible' : 'hidden'}`}
        style={{
          opacity: showAboutUs ? 1 : 0, // Ensures full opacity when in view
          transition: 'opacity 1s ease-in-out'
        }}
      >
        <div className="container">
          <h1 className="about-heading">About Us</h1>

          <div className="about-content">
            <img 
              src='../assets/face.png'
              alt="Woman Face" 
              className="about-image" 
            />
            <div className="about-text">
              <div className={`who-are-we ${showWhoAreWe ? 'visible' : ''}`}>
                <h2 className="subheading">Who Are We</h2>
                <p>Claré uses AI-driven technology to provide personalized skincare solutions, helping individuals understand their skin and achieve healthier, clearer skin effortlessly. Our mission is to make skincare smarter, accessible, and effective for everyone.</p>
              </div>

              <div className={`how-it-works ${showHowItWorks ? 'visible' : ''}`}>
                <h2 className="subheading">How It Works</h2>
                <ul>
                  <li><strong>AI-Powered Skin Analysis:</strong> Upload a simple photo and receive a detailed skin evaluation.</li>
                  <li><strong>Personalized Recommendations:</strong> Get science-backed skincare routines tailored to your needs.</li>
                  <li><strong>Progress Tracking:</strong> Monitor your skin&apos;s improvement over time with AI-driven insights.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="our-products-section">
        <h1 className="our-products-heading">Our Products</h1>
        <OurProducts />
      </section>
    </div>
  );
}

export default Home;

