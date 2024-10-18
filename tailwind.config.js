import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {}
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true, 
    themes: {
      dark: {
        colors: {
          background: "#16001E",
          primary: {
            DEFAULT: "#F7717D"
          },
          secondary: {
            DEFAULT: "#7F2982"
          }
        }
      }
  } })]
}