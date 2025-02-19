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
