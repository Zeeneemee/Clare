import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ scrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full flex justify-between items-center px-8 lg:px-12 py-5 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-[#14213D]'
    }`}>
      {/* Logo */}
      <div className={`text-3xl lg:text-4xl font-fanwood font-normal transition-colors duration-300 ${
        scrolled ? 'text-[#14213D]' : 'text-white'
      }`}>
        claré
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden" onClick={toggleMenu}>
        <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled ? 'bg-[#14213D]' : 'bg-white'} mb-2 ${isMobileMenuOpen ? 'rotate-45 absolute' : ''}`} />
        <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled ? 'bg-[#14213D]' : 'bg-white'} mb-2 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled ? 'bg-[#14213D]' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 absolute' : ''}`} />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-10">
        {['Home', 'Our Products', 'Skin Analysis', 'Contact Us'].map((item) => (
          <li key={item}>
            <Link 
              to={
                item === 'Our Products' ? 'https://vbicar-59.myshopify.com/collections/clare' 
                : item === 'Home' ? '/' 
                : item === 'Skin Analysis' ? '/skinanalysis' 
                : item === 'Contact Us' ? '/contactus' 
                : '#'
              }
              className={`font-lato font-light text-lg transition-colors duration-300 ${
                scrolled ? 'text-[#14213D]' : 'text-white'
              } hover:opacity-80`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg w-48 z-50 lg:hidden">
          <ul className="flex flex-col items-center">
            {['Home', 'Our Products', 'Skin Analysis', 'Contact Us'].map((item) => (
              <li key={item} className="w-full text-center py-3">
                <Link
                  to={
                    item === 'Our Products' ? 'https://vbicar-59.myshopify.com/collections/clare'
                    : item === 'Home' ? '/'
                    : item === 'Skin Analysis' ? '/skinanalysis'
                    : item === 'Contact Us' ? '/contactus'
                    : '#'
                  }
                  className={`font-lato font-light text-lg text-[#14213D] block w-full transition-colors duration-300 hover:bg-gray-100`}
                  onClick={toggleMenu}  // Close menu on link click
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
