import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail) && inputEmail !== "") {
      setError("Invalid email format");
    } else {
      setError("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      {/* Title */}
      <h1 className="font-fanwood text-[48px] leading-[62.93px] text-center mb-3 mt-[150px]">
        Sign Up
      </h1>
      <p className="font-lato font-medium italic text-[20px] text-center text-[#A8A8A8] mb-8">
        Sign up to get your full skin analysis report, track progress, and
        receive <br />
        personalized skincare tips.
      </p>

      {/* Form Container */}
      <div className="w-full max-w-2xl">
        <form className="space-y-6">
          {/* Name Fields */}
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="block text-gray-500 text-sm mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:outline-none py-2"
                placeholder="First Name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-500 text-sm mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:outline-none py-2"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-500 text-sm mb-1">Email</label>
            <input
              type="email"
              className={`w-full border-b py-2 focus:outline-none ${
                error ? "border-red-500" : "border-gray-400"
              }`}
              placeholder="Email"
              value={email}
              onChange={validateEmail}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        </form>
      </div>

      {/* Navigation Buttons */}
      <div className="flex mt-10 space-x-6">
        <Link
          to="/skincareroutine"
          className="px-10 py-3 border border-black text-black rounded-full hover:bg-gray-100 transition"
        >
          Back
        </Link>
        <Link
          to="/"
          className={`px-10 py-3 rounded-full transition ${
            error
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-[#14213D] text-white hover:opacity-80"
          }`}
        >
          Sign Up
        </Link>
      </div>

      {/* Progress Bar */}
      <div className="flex gap-3 mt-8">
        <div className="w-24 h-1 bg-[#14213D] rounded-full"></div>
        <div className="w-24 h-1 bg-[#14213D] rounded-full"></div>
        <div className="w-24 h-1 bg-[#14213D] rounded-full"></div>
      </div>
    </div>
  );
}
