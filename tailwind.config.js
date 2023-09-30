/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cera': ["Cera CY Bold", "Rubik"],
        'rubik': ["Rubik"],
      }
    },
  },
  plugins: [],
}

