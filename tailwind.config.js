/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust as needed
  ],
  theme: {
    extend: {
      fontFamily: {
        ptserif: ['"PT Serif"', 'serif'],
         inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
