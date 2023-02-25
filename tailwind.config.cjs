/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "fc": "Fira Code",
        "op": "Overpass",
        "rb": "Roboto"
      },
    },
  },
  plugins: [
    require('tailwind-nord'),
  ],
}
