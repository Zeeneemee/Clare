import bg from "../assets/bg.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* className="relative w-full h-screen overflow-hidden" */}
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-7xl font-serif tracking-wide">claré</h1>
        <p className="text-lg mt-2 font-light ">
          Understand Your Skin with AI-Powered Insights
        </p>
      </div>
      <div>
        <Link to="/camera">
          <button className="bg-blue-500 text-green p-4 rounded hover:bg-blue-600 transition">
            Go to Target Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
