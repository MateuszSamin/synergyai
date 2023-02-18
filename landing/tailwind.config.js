/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#001122",
        "dark-green": "#01C38E",
        green: "#01C38E",
        "light-green": "#16DDB6",
        blue: "#5D54DF",
        purple: "#5564DB",
        paragraph: "#C2CBDC",
      },

      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
