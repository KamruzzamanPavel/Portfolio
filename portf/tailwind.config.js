/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "70vh": "70vh",
        "40vh": "40vh", // Adds a h-80vh utility for 80% screen height
      },
    },
  },
  plugins: [],
};
