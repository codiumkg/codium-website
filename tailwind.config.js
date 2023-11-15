/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'accent': '#FFC38D',
      'accent-dark': '#b29175',
      'primary': '#1a1817',
      'secondary': '#23211f',
      'secondary-light': '#2b2827',
      'accent-secondary': '#a0f538',
      'secondary-text': '#c9c1bd',
      'white': '#ffffff',
      'text': '#f0dbd3',
      'highlight': '#313131',
      'highlight-secondary': "#464646"
    },
    extend: {},
  },
  plugins: [],
}