import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import logo from "../components/logo192.png";
import img from "../components/img.png";

export default function SkinAnalysisResult() {
  const [capturedImage, setCapturedImage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the image data from localStorage

    setCapturedImage(`http://localhost:5000/uploads/latest-image.png`);
  }, []);
=======
import LoadingScreen from "./LoadingScreen";


export default function SkinAnalysisResult() {

  const navigate = useNavigate();
  const capturedImage = localStorage.getItem("image");
>>>>>>> main

  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center">
<<<<<<< HEAD
      <h1 className="font-fanwood font-normal text-[48px] leading-[62.93px] tracking-[0%] text-center mb-[10px] mt-[150px]">
=======
    {capturedImage? 
    <>
    <h1 className="font-fanwood font-normal text-[48px] leading-[62.93px] tracking-[0%] text-center mb-[10px] mt-[150px]">
>>>>>>> main
        Your Skin Report
      </h1>
      <p className="font-lato font-medium italic text-[26px] leading-[31.2px] tracking-[0%] text-center text-[#A8A8A8] mb-[100px]">
        Our Al has analyzed your skin and generated a detailed report with
        personalized <br /> insights and recommendation
      </p>

      <div className="flex justify-between items-center h-full space-x-4  ">
        {/* Left Column */}
        <div className="flex flex-col space-y-4">
          <div className="w-[500px] h-40   p-4 bg-white shadow-lg rounded-lg border">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#7F7DFF] rounded-full"></div>
              <h2 className="text-lg font-semibold">Dark Circles</h2>
            </div>
            <div className="mt-2 text-2xl font-bold">35%</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="bg-[#7F7DFF] h-2.5 rounded-full"
                style={{ width: "35%" }}
              ></div>
            </div>
            <p className="mt-2 text-gray-500 text-sm">
              Mild dark circles detected, possibly due to lack of sleep or
              dehydration.
            </p>
          </div>
          <div className="w-[500px] h-40   p-4 bg-white shadow-lg rounded-lg border">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#FFEB40] rounded-full"></div>
              <h2 className="text-lg font-semibold">Wrinkles</h2>
            </div>
            <div className="mt-2 text-2xl font-bold">15%</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="bg-[#FFEB40] h-2.5 rounded-full"
                style={{ width: "15%" }}
              ></div>
            </div>
            <p className="mt-2 text-gray-500 text-sm">
              Moderate acne detected with visible breakouts and mild
              inflammation.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative flex justify-center items-center">
          {capturedImage ? (
            <div className="relative">
              <img
                src={capturedImage}
                className="rounded-[16px] mt-30 w-[379px] h-[346px] object-cover"
              />
              {/* Small Box Positioned at Bottom */}
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-[180px] h-[40px] bg-white text-[#797979] text-xl text-center flex items-center justify-center rounded-lg shadow-lg">
                Skin Age: 30
              </div>
            </div>
          ) : (
            <p>No image captured.</p>
          )}
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4">
          <div className="w-[500px] h-40   p-4 bg-white shadow-lg rounded-lg border">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#9CDA8A] rounded-full"></div>
              <h2 className="text-lg font-semibold">Acne Severity</h2>
            </div>
            <div className="mt-2 text-2xl font-bold">65%</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="bg-[#9CDA8A] h-2.5 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
            <p className="mt-2 text-gray-500 text-sm">
              Mild dark circles detected, possibly due to lack of sleep or
              dehydration.
            </p>
          </div>
          <div className="w-[500px] h-40   p-4 bg-white shadow-lg rounded-lg border">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#FF8080] rounded-full"></div>
              <h2 className="text-lg font-semibold">Scar</h2>
            </div>
            <div className="mt-2 text-2xl font-bold">100%</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="bg-[#FF8080] h-2.5 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
            <p className="mt-2 text-gray-500 text-sm">
              Mild dark circles detected, possibly due to lack of sleep or
              dehydration.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate("/skincareroutine")}
        className="mt-20 px-[70px] py-5 bg-[#14213D] text-white text rounded-[50px]"
      >
        Suggest My Skincare Routine
      </button>
      <div className="flex gap-3">
        <div className="w-24 h-1 mt-5 bg-[#14213D] rounded-full "></div>
        <div className="w-24 h-1 mt-5 bg-gray-300 rounded-full"></div>
        <div className="w-24 h-1 mt-5 bg-gray-300 rounded-full"></div>
      </div>
<<<<<<< HEAD
=======
    </>
      
    
    
    : <LoadingScreen />}  
>>>>>>> main
    </div>
  );
}
