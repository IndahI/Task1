/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#7a7a7a",
          "200": "#001722",
        },
        gainsboro: "#d9d9d9",
        black: "#000",
        whitesmoke: "#f1f1f1",
        white: "#fff",
        dimgray: {
          "100": "#737373",
          "200": "#666",
        },
        deepskyblue: "#31b1e4",
        crimson: "#e73756",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        limelight: "Limelight",
      },
      borderRadius: {
        mini: "15px",
      },
    },
    fontSize: {
      xl: "20px",
      mini: "15px",
      "6xl": "25px",
      "11xl": "30px",
      "31xl": "50px",
      "36xl": "55px",
      "21xl": "40px",
      "26xl": "45px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
