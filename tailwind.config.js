import {nextui} from "@nextui-org/react";

// #65e67f

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#30cfc7",
          foreground: "#ffffff"
        },
        secondary: {
          DEFAULT: "#7F2982"
        },
      }
    }
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true, 
    themes: {
      dark: {
        colors: {
          background: "#241f21",
          foreground: "#ffffff"
        }
      },
      light: {
        colors: {
          foreground: "#121212",
          background: "#ffffff"
        }
      }
  } })]
}