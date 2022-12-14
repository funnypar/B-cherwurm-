/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        hbox: "90vh",
        "1/7": "10.6666667%",
        "6/7": "89.3333333%",
      },
      width: {
        wbox: "92vw",
        inherit: "inherit",
      },
      fontFamily: {
        title: "Rubik Distressed",
        user: "Caveat",
        navItems: "Dancing Script",
      },
      margin: {
        50: "50%",
        cRem: "40rem",
      },
      padding: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
