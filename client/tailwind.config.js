/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "464px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["nord"],
  },
};
