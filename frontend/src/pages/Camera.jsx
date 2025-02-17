import { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import bg from "../assets/bg.png";

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); // To manage loading state
  const [progress, setProgress] = useState(0); // To track the progress of upload

  // Start the camera
  const startCamera = async (facingMode = "user") => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode },
      });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  // Capture Image
  const captureImage = async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");

    const fixedWidth = 379;
    const fixedHeight = 346;
    canvas.width = fixedWidth;
    canvas.height = fixedHeight;
    fixedWidth, fixedHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas to blob
    canvas.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append("image", blob, "captured-image.jpg");

      try {
        const response = await axios.post(
          "http://localhost:5000/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        setImage(`http://localhost:5000/uploads/${response.data.file}`);
        alert("Image uploaded successfully!");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }, "image/jpeg");
  };

  return (
    <div
      className="flex flex-col items-center justify-center  text-center"
      style={{ textAlign: "center", margin: "0px" }}
    >
      <div className="absolute inset-0 -z-10">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <h2
        className=" text-[48px] text-[#FFF]"
        style={{ textAlign: "center", margin: "0px", paddingTop: "100px" }}
      >
        Understand Your Skin Like Never Before
      </h2>
      <p
        className="font-lato font-medium italic text-[26px] text-[#FFF]"
        style={{ marginTop: "0px" }}
      >
        Upload a photo and let our AI analyze your skin for personalized
        recommendations.
      </p>

      <video
        ref={videoRef}
        autoPlay
        style={{ height: "300px", width: "300px", border: "2px solid black" }}
      ></video>
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

      <div>
        <button onClick={() => startCamera("user")}>Start Front Camera</button>
        <button onClick={() => startCamera("environment")}>
          Start Back Camera
        </button>
        <button
          onClick={captureImage}
          className="p-4 px-20"
          style={{
            borderRadius: "50px", // Rounded corners with 50% radius
            border: "2px solid #FFF",
            backgroundColor: "transparent",
          }}
        >
          <Link
            to="/loading"
            className=" hover:text-gray-300 transition no-underline text-[#FFF] "
            style={{
              fontFamily: "Lato",
              fontWeight: 500,
              fontSize: "26px",

              textAlign: "center",
            }}
          >
            Capture Your Photo
          </Link>
        </button>
      </div>

      {image && !loading && (
        <img
          src={image}
          alt="Captured"
          style={{
            marginTop: "20px",
            width: "300px",
            transform: "scaleX(-1)", // This will mirror the image horizontally
          }}
        />
      )}
    </div>
  );
};

export default CameraCapture;
