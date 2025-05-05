/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#00C853",
        accent: "#FFD600",
        lightBg: "#f9f9f9",
        darkBg: "#121212",
        lightText: "#fafafa",
        darkText: "#1e1e1e",
      },
    },
  },
  plugins: [],
};
