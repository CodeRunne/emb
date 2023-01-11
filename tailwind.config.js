/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'Times Roman', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif', 'Times Roman']
      },
      width: {
        95: "95%",
      },
      colors: {
        blue: "#228be6",
        "blue-800": "#1c7ed6",
        "blue-600": "#339af0",
        "gray-100": "#f8f9fa",
        "gray-200": "#f1f3f5",
        "gray-800": "#343a40",
        "gray-700": "#495057",
        "gray-600": "#868e96",
        "gray-500": "#adb5bd"
      },
      gap: {
        "0.7": "0.2rem"
      },
      fontSize: {
        xss: ".7rem",
        xxs: ".55rem",
        "6.5xl": "4.2rem"
      },
      gridTemplateColumns: {
        hero: '1fr 48%'
      }
    },
  },
  plugins: [],
}
