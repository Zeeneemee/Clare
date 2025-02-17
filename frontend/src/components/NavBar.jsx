import React, { useEffect, useState } from 'react';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full flex justify-between items-center py-[20px] px-[50px] transition-colors duration-300 ease-in-out z-[1000] ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className={`text-[36px] font-fanwood font-normal ${
        scrolled ? 'text-custom-blue' : 'text-white'
      }`}>
        claré
      </div>
      
      <ul className="flex list-none space-x-5">
        {['Home', 'Our Products', 'About Us', 'Skin Analysis'].map((item) => (
          <li key={item}>
            <a
              href="#"
              className={`text-[18px] font-lato no-underline ${
                scrolled ? 'text-custom-blue' : 'text-white'
              }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;