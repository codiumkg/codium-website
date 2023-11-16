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
      'secondary-dark': '#1f1e1d',
      'accent-secondary': '#a0f538',
      'white': '#ffffff',
      'text': '#f7e3db',
      'secondary-text': '#d6cbc6',
      'highlight': '#313131',
      'highlight-secondary': "#464646"
    },
    extend: {
      keyframes: {
        appear: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        disappear: {
          'from': { opacity: '1' },
          'to': { opacity: '0' }
        }
      },
      animation: {
        'appear': 'appear 0.15s ease-out',
        'disappear': 'appear 0.15s ease-out'
      }
    },
  },
  plugins: [],
}