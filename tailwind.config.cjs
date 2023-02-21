/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'fg': '#141F2F',
      't1fg': '#2b3543'
    },
    extend: {
      fontFamily: {
        "fc": "Fira Code",
        "op": "Overpass",
        "rb": "Roboto"
      }
    },
  },
  plugins: [],
}
