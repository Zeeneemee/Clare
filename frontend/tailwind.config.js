module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
      phone: '380px',   // up to small phones
      tablet: '768px',  // small tablets and large phones
      laptop: '1024px', // laptops
    },
      fontFamily: {
        fanwood: ['"Fanwood Text"', 'serif'],  // Fanwood Text font
        lato: ['"Lato"', 'sans-serif'],        // Lato font
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
      },
      colors: {
        darkblue: '#1e2a47', // Custom dark blue color
      },
    },
  },
  plugins: [],
}
