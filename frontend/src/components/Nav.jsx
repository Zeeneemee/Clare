import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";

const Layout = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full h-[101px] bg-[#222E3D]">
        <section className="flex justify-start items-center p-12">
          <img src={Logo} alt="Clare" className="p-[15px]" />
          {/* <img src={bg} alt="bg" className="h-16 w-auto" /> */}
        </section>
        <ul className="flex gap-[1rem] list-none" style={{ textDecoration: "none" }}>
          <li className="m-2">
            <Link
              to="/"
              className="no-underline text-white"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="text-white hover:text-gray-300 transition no-underline"
            >
              Our products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text- hover:text-gray-300 transition no-underline"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/camera"
              className="text-white hover:text-gray-300 transition no-underline mr-[1rem]"
            >
              Skin Analysis
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
