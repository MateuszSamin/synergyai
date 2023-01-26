/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#001122',
        'green': '#01C38E',
        'purple': '#5564DB'
      }
    },
  },
  plugins: [],
}
