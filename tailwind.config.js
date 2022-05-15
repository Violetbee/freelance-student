module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      right: true,
    },
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
  daisyui: {
    styled: true,
    themes: [
      {
        tema1: {
          primary: "#967ad3",

          secondary: "#c12c1f",

          accent: "#e1a6ed",

          neutral: "#2A2136",

          "base-100": "#FCFCFD",

          info: "#6691D1",

          success: "#75EBD0",

          warning: "#BF6A08",

          error: "#EA7597",
        },
      },
      "light",
      "dark",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "tema1",
  },
};
