import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(!emailRegex.test(inputEmail) && inputEmail !== "" ? "Invalid email format" : "");
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 pt-32 md:pt-60 px-5 sm:px-10">
      {/* Title */}
      <h1 className="font-fanwood text-3xl sm:text-4xl md:text-4xl text-darkblue mb-4 z-10 relative">
        Sign Up
      </h1>
      <p className="font-lato font-light text-sm sm:text-base md:text-base text-gray-500 text-center max-w-lg md:max-w-3xl mb-6 z-10 relative">
        Sign up to get your full skin analysis report, track progress, and{" "}
        <span className="md:hidden">receive personalized skincare tips.</span>
        <span className="hidden md:inline">
          receive <br /> personalized skincare tips.
        </span>
      </p>

      {/* Form Container */}
      <div className="w-full max-w-md md:max-w-2xl mt-6 md:mt-10">
        <form className="space-y-6">
          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-6">
            <div className="flex-1">
              <label className="font-lato font-light block text-gray-500 text-sm mb-1">
                First Name
              </label>
              <input
                type="text"
                className="font-lato font-light w-full border-b border-gray-400 focus:outline-none py-2"
                placeholder="First Name"
              />
            </div>
            <div className="flex-1">
              <label className="font-lato font-light block text-gray-500 text-sm mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="font-lato font-light w-full border-b border-gray-400 focus:outline-none py-2"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="font-lato font-light block text-gray-500 text-sm mb-1">Email</label>
            <input
              type="email"
              className={`font-lato font-light w-full border-b py-2 focus:outline-none ${
                error ? "border-red-500" : "border-gray-400"
              }`}
              placeholder="Email"
              value={email}
              onChange={validateEmail}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        </form>

        {/* "Not interested" Link */}
        <div className="flex justify-end mt-1 md:mt-4">
          <Link
            to="/"
            className="font-lato font-light text-sm text-gray-500 md:mt-[-10px] hover:underline"
          >
            Not interested
          </Link>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-10 gap-4 sm:gap-6 md:gap-0 md:space-x-6">
        <Link
          to="/skincareroutine"
          className="font-lato font-light text-sm px-10 sm:px-14 md:px-10 py-3 border border-black text-black rounded-full hover:bg-gray-100 transition"
        >
          Back
        </Link>
        <Link
          to="/"
          className={`font-lato font-light text-sm px-10 sm:px-14 md:px-10 py-3 rounded-full transition ${
            error
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-[#14213D] text-white hover:opacity-80"
          }`}
        >
          Sign Up
        </Link>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-center gap-3 md:gap-3 mt-8">
        {Array(3)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="w-16 sm:w-20 md:w-24 h-1 bg-[#14213D] rounded-full"
            ></div>
          ))}
      </div>
    </div>
  );
}