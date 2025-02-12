import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    host: true, // Allow external access
    strictPort: true, // Ensures Vite runs on a fixed port
    port: 5173, // Make sure this matches the port you use with ngrok
    allowedHosts: [
      "44ba-2001-44c8-46d1-94ba-253e-f-9d76-aed7.ngrok-free.app", // Add your ngrok URL here
    ],
  },
});
