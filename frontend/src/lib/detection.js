// // useDetection.js
// import { useEffect, useState, useRef } from "react";
// import * as faceapi from "face-api.js";

// export function useDetection(videoRef) {
//   const [detectionData, setDetectionData] = useState({
//     faceCentered: false,
//     lighting: "Analyzing...",
//     modelsLoaded: false,
//     error: null,
//   });
//   const detectionInterval = useRef(null);

//   // Load face-api models once when the hook mounts.
//   useEffect(() => {
//     const loadModels = async () => {
//       try {
//         await Promise.all([
//           faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
//           faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
//           faceapi.nets.faceExpressionNet.loadFromUri("/models"),
//         ]);
//         setDetectionData((prev) => ({ ...prev, modelsLoaded: true }));
//       } catch (error) {
//         setDetectionData((prev) => ({
//           ...prev,
//           error: "Model loading failed: " + error.message,
//         }));
//       }
//     };

//     loadModels();
//   }, []);

//   // Once models are loaded and videoRef is ready, start detection.
//   useEffect(() => {
//     if (!detectionData.modelsLoaded || !videoRef.current) return;

//     detectionInterval.current = setInterval(async () => {
//       try {
//         const detections = await faceapi
//           .detectAllFaces(
//             videoRef.current,
//             new faceapi.SsdMobilenetv1Options({ minConfidence: 0.5 })
//           )
//           .withFaceLandmarks();

//         // Check if a face is detected and if it is centered.
//         let faceCentered = false;
//         if (detections && detections.length > 0) {
//           const video = videoRef.current;
//           const { box } = detections[0];
//           // Calculate the center of the detected face.
//           const faceCenterX = video.videoWidth - (box.x + box.width / 2);
//           const faceCenterY = box.y + box.height / 2;
//           const xThreshold = video.videoWidth * 0.15;
//           const yThreshold = video.videoHeight * 0.15;
//           faceCentered =
//             Math.abs(faceCenterX - video.videoWidth / 2) < xThreshold &&
//             Math.abs(faceCenterY - video.videoHeight / 2) < yThreshold;
//         }

//         // Calculate lighting conditions from the video.
//         const lighting = calculateLighting(videoRef.current);

//         setDetectionData((prev) => ({
//           ...prev,
//           faceCentered,
//           lighting,
//         }));
//       } catch (error) {
//         setDetectionData((prev) => ({
//           ...prev,
//           error: "Detection error: " + error.message,
//         }));
//       }
//     }, 500);

//     // Cleanup on unmount or when models are unloaded.
//     return () => clearInterval(detectionInterval.current);
//   }, [detectionData.modelsLoaded, videoRef]);

//   // Helper function to sample the video and compute average brightness.
//   const calculateLighting = (video) => {
//     if (!video) return "Analyzing...";
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;

//     // Mirror the video frame for consistency.
//     ctx.save();
//     ctx.translate(canvas.width, 0);
//     ctx.scale(-1, 1);
//     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
//     ctx.restore();

//     // Define a sample area in the center.
//     const sampleSize = 100;
//     const centerX = canvas.width / 2 - sampleSize / 2;
//     const centerY = canvas.height / 2 - sampleSize / 2;
//     const imageData = ctx.getImageData(centerX, centerY, sampleSize, sampleSize);

//     let brightnessSum = 0;
//     for (let i = 0; i < imageData.data.length; i += 4) {
//       brightnessSum += (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
//     }
//     const avgBrightness = brightnessSum / (imageData.data.length / 4);
//     if (avgBrightness < 80) return "Too Dark";
//     if (avgBrightness > 180) return "Too Bright";
//     return "Good";
//   };

//   return detectionData;
// }

