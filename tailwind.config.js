/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-blue": "#0085FF",
        "primary-dark": "#303030",
        "secondary-dark": "#1E1E1E",
        "primary-light": "#CFCFCF"
      },
      fontFamily:{
        firaCode:["Fira Code"]
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
  darkMode: 'class',
})

