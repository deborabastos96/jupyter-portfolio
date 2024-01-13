/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'blinkmacsystemfont',
        '"Segoe UI"',
        'helvetica',
        'arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ],
    },

    extend: {
      colors: {
        border: '#bdbdbd',
        borderBtn: '#e0e0e0',
      },
    },
  },

  plugins: [],
};
