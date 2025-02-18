import React from 'react';

export default function NavBar({ scrolled }) {
  return (
    <nav className={`fixed top-0 w-full flex justify-between items-center px-12 py-5 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-[#14213D]'
    }`}>
      <div className={`text-4xl font-fanwood font-normal transition-colors duration-300 ${
        scrolled ? 'text-[#14213D]' : 'text-white'
      }`}>
        claré
      </div>
      <ul className="flex gap-10"> {/* Adjust gap for consistent spacing */}
        {['Home', 'Our Products', 'About Us', 'Skin Analysis'].map((item) => (
          <li key={item}>
            <a href="#" className={`font-lato font-light text-lg transition-colors duration-300 ${
              scrolled ? 'text-[#14213D]' : 'text-white'
            } hover:opacity-80`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
