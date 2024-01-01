/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        card: "Amatic SC",
        head: "Redressed",
        middle: "Jost",
      },
    },
  },
  plugins: [],
};
