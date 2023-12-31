/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '300': '300px',
      },
      width: {
        '260': '260px',
        '430': '430px',
        '400': '400px',
        '2000': '200px',
        '600': '600px',
      },
    },
  },
  plugins: [],
}