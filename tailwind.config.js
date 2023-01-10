/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Noto sans', 'Roboto', 'sans-serif'],
    },
    extend: {
      width: {
        "w-95": "95%"
      }
    },
  },
  plugins: [],
}
