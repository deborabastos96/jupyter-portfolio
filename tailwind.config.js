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
        hoverLink: '#eee',
      },

      boxShadow: {
        main: '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)',
        subMenu:
          '0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);',
      },
    },
  },

  plugins: [],
};
