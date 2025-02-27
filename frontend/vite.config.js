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
      "355d-161-200-190-89.ngrok-free.app"]
  },
});
