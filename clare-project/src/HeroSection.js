import React from 'react';
import './styles/HeroSection.css';

function HeroSection({ scrollY }) {
    const fadeEffect = Math.max(0, 1 - scrollY / 600); // Fade slower at 600px scroll instead of 400px

    return (
        <header className="hero" style={{ opacity: fadeEffect }}>
            <div className="hero-content">
                <h1 style={{ opacity: fadeEffect }}>claré</h1>
                <p style={{ opacity: fadeEffect }}>Understand Your Skin with AI-Powered Insights</p>
                <button className="cta-button" style={{ opacity: fadeEffect }}>Analyze Your Skin Now</button>
            </div>
        </header>
    );
}

export default HeroSection;

