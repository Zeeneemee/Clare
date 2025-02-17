import  { useEffect, useState } from 'react';

function AboutUs() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFadeOut(window.scrollY > 300); // Adjust fade-out point
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`about-us ${fadeOut ? 'fade-out' : 'visible'}`}>
      <div className="container">
        <h1 className="about-heading">About Us</h1>
        <div className="about-content">
          <img 
            src='../assets/face.png' 
            alt="Woman Face" 
            className="about-image" 
          />
          <div className="about-text">
            <h2 className="subheading">Who Are We</h2>
            <p>Claré uses AI-driven technology to provide personalized skincare solutions, helping individuals understand their skin and achieve healthier, clearer skin effortlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

