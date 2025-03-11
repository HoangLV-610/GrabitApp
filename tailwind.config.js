/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#ff7070",
        gray: "#777777",
        main: "#5CAF90",
        "light-gray": "#eee",
        "slate-gray": "#4b5966",
        lightblue: "#F8F8FB",
        error: "#dc3545",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Thêm font Poppins
      },
    },
  },
  plugins: [],
};
