/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*", "./**/*"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out forwards",
        ringing: "oscillate-rotation 1s infinite ease-in-out"
      },
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
