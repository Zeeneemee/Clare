import { useNavigate } from "react-router-dom";
import useSectionObserver from "../lib/useSectionObserver";
const TabletVersion = () => {
    const navigate = useNavigate();
    const opacity = useSectionObserver("skin-analysis-section");
  
    return (
      <header
        id="skin-analysis-section"
        className="transition-opacity duration-1000 ease-in-out relative overflow-hidden"
        style={{ opacity }}
      >
        {/* White Section */}
        <div className="min-h-screen flex flex-col items-center justify-center w-full max-w-7xl mx-auto mt-28 space-y-8 bg-white">
          <h2 className="w-full text-2xl font-lato font-semibold text-[#14213D] text-left ml-[140px] -mt-28">
            Get your personalized skin analysis and routine within 3 easy steps.
          </h2>
          <div className="flex flex-row justify-center items-center -mt-40">
            {[1, 2, 3].map((num) => (
              <img
                key={num}
                src={`/assets/${num}.webp`}
                alt={`Step ${num}`}
                className="w-[280px] h-auto rounded-2xl"
              />
            ))}
          </div>
        
        </div>
  
        {/* Dark Section */}
        <div className="w-full flex flex-col items-center justify-center py-24 bg-[#14213D]">
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-12">
            <div className="flex flex-col items-center p-6">
              <img src="/assets/clare.png" alt="Clare" className="w-32 h-auto mb-6" />
              <p className="text-center text-white text-lg font-lato font-light max-w-md -mt-2">
                Upload or take a selfie and let our AI analyze your skin for personalized recommendations.
              </p>
              <button
                onClick={() => navigate("/camera")}
                className="mt-10 px-10 py-4 border-2 border-white rounded-full font-lato text-white text-lg font-light hover:bg-white hover:bg-opacity-80 transition-all duration-300"
              >
                Upload Your Photo
              </button>
            </div>
            <div className="rounded-3xl overflow-hidden relative w-[500px] h-[500px]">
              <video
                src="/assets/picdem.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default TabletVersion;