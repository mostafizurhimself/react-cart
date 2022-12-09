const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          "100": "#f2f3f5",
          "500": "#9e9e9e",
          "900": "#181818",
        },
        primary: {
          "400": "#ffd574",
          "500": "#ffca51",
        },
        danger: {
          "500": "#ff3b30",
        },
        success: {
          "500": "#019c00",
        },
      },
    },
  },
  plugins: [],
}
