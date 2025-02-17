import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define your navigation items. Adjust or omit any routes (like Loading/Result) if they shouldn't appear in the nav.
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "about" },
    { label: "Camera", path: "camera" },
    { label: "Products", path: "products" },
    // Uncomment these if you want them in the navigation:
    // { label: "Loading", path: "loading" },
    // { label: "Result", path: "result" },
  ];

  // Use location to optionally style the active link.
  const location = useLocation();

  return (
    <>
      <nav
        className={`fixed top-0 w-full flex justify-between items-center py-[20px] px-[50px] transition-colors duration-300 ease-in-out z-[1000] bg-black bg-opacity-90`}
      >
        <div
          className={`text-[36px] font-fanwood font-normal ${
            scrolled ? "text-custom-blue" : "text-white"
          }`}
        >
          claré
        </div>

        <ul className="flex list-none space-x-5">
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`text-[18px] font-lato no-underline ${
                  scrolled ? "text-custom-blue" : "text-white"
                } ${
                  // Optionally add a style for the active route
                  (location.pathname === path ||
                    (path === "/" && location.pathname === "/")) &&
                  "underline"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Add top padding to account for the fixed navbar */}
      <div className="pt-[100px]">
        <Outlet />
      </div>
    </>
  );
}

export default Nav;
