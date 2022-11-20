/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        hbox: "90vh",
      },
      width: {
        wbox: "92vw",
      },
      fontFamily: {
        title: "Rubik Distressed",
        user: "Caveat",
      },
    },
  },
  plugins: [],
};
