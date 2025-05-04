import { useState } from "react";
import Pagination from "../components/ui/pagination";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(!emailRegex.test(inputEmail) && inputEmail !== "" ? "Invalid email format" : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (error || !email || !firstName || !lastName) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const userData = {
      name: `${firstName} ${lastName}`,
      email: email,
    };

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/skintracking"); // Navigate to skincare routine page
    // Send to backend (adjust URL as needed)
    // try {
    //   const response = await fetch("https://your-backend-api.com/api/users", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(userData),
    //   });

    //   if (response.ok) {
    //     console.log("User saved successfully!");
    //     navigate("/skintracking"); // Navigate to skin tracking page
    //   } else {
    //     console.error("Failed to save user:", await response.text());
    //     alert("Something went wrong. Please try again.");
    //   }
    // } catch (err) {
    //   console.error("Error:", err);
    //   alert("Error connecting to server.");
    // }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 pt-32 md:pt-60 px-8 sm:px-10">
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
      <div className="w-full max-w-xs md:max-w-2xl mt-6 md:mt-10">
        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-6">
            <div className="flex-1">
              <label className="font-lato font-light block text-gray-500 text-sm mb-1">
                First Name
              </label>
              <input
                type="text"
                className="font-lato font-light w-full border-b border-gray-400 focus:outline-none py-2 text-sm"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="font-lato font-light block text-gray-500 text-sm mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="font-lato font-light w-full border-b border-gray-400 focus:outline-none py-2 text-sm"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="font-lato font-light block text-gray-500 text-sm mb-1">Email</label>
            <input
              type="email"
              className={`font-lato font-light w-full border-b py-2 focus:outline-none text-sm ${
                error ? "border-red-500" : "border-gray-400"
              }`}
              placeholder="Email"
              value={email}
              onChange={validateEmail}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        {/* "Not interested" Link */}
        <div className="flex justify-end mt-1 md:mt-4">
          <Link
            to="/"
            className="font-lato font-light text-sm text-gray-500 md:mt-[-10px] hover:underline"
          >
            Not interested
          </Link>
        </div>
          {/* Submit Button */}
        
        <div className="flex justify-center mt-8 md:mt-10 gap-4 sm:gap-6 md:gap-0 md:space-x-6">
          <Link
            to="/skincareroutine"
            className="font-lato font-light text-sm px-8 sm:px-14 md:px-10 py-2 md:py-3 border border-black text-black rounded-full hover:bg-gray-100 transition"
          >
          Back
        </Link>
        <button
          type="submit"
          className={`font-lato font-light text-sm px-8 sm:px-14 md:px-10 py-2 md:py-3 rounded-full transition ${
            error || !email || !firstName || !lastName
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-[#14213D] text-white hover:opacity-80"
          }`}
          disabled={error || !email || !firstName || !lastName}
        >
          Sign Up
        </button>
        </div>
      </form>

       
    </div>
      {/* Progress Bar */}
      <div className="flex justify-center gap-3 md:gap-3 mt-4">
        <Pagination current={3} />
      </div>
    </div>
  );
}


