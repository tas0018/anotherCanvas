/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
      },

      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },

      gridTemplateRows: {
        13: "repeat(13, minmax(0, 1fr))",
      },

      colors: {
        "hero-blue-dark": "rgba(25, 7, 38, .8)",
        "hero-blue-light": "rgba(25, 7, 38, .2)",
        "hero-blue-medium": "rgba(25, 7, 38, .5)",
        "off-white-one": "#F6F7F8",
        "dark-grey": "#303030",
        "black-olive": "#3C3C3C",
        "blue-shade": "#28ABE3",
        "logo-pink": "#e4068f",
        "card-headline": "#272727",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
}
