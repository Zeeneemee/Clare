module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
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
