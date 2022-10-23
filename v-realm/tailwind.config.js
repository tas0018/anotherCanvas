/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hero-blue-dark": "rgba(25, 7, 38, .8)",
        "hero-blue-light": "rgba(25, 7, 38, .2)",
        "hero-blue-medium": "rgba(25, 7, 38, .5)",
        "off-white-one": "#F6F7F8",
        "dark-grey": "#303030",
        "blue-shade": "#28ABE3",
        "logo-pink": "#e4068f",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
}
