/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7FCFE",
        secondary: "#0D0D0D",
        terciary: "#E9E4DD",
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      },
    },
  },
  plugins: [],
};
