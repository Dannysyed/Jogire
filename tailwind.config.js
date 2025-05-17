/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d67952",
        primaryHover: "#b55e3f",
        cream: "#fffaf5",
        peach: "#f5ede9",
        textDark: "#2d2d2d",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/typography"),
  ],
};
