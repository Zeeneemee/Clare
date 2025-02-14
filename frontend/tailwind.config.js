/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure Tailwind works in all components
  ],
  theme: {
    extend: {
      colors: {
        // Corrected from 'color' to 'colors'
        primaryBlue: "#222E3D",
      },
    },
  },
  plugins: [],
};
