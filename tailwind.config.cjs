/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14, // extra small
      sm: 16, // small
      md: 18, // medium
      lg: 20, // large
      xl: 24, // extra large
      "2xl": 32, // 2plus extra large
    },

    colors: {
      black: "#000",
      gray900: "#121214",
      gray800: "#202024",
      gray400: "#7c7c8a",
      gray100: "#e1e1e6",
      cyan500: "#81d8f7",
      cyan300: "#61dafb",
    },

    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
