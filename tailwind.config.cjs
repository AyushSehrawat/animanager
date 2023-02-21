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
      colors: {
        'bg': '#0B1622',
        'fg': '#141F2F',
        't1fg': '#2b3543',
        't2fg': '#424b58',
        'text': 'rgb(159,173,189)',
        'textlight': 'rgb(114,138,161)',
        'textlighter': 'rgb(133,150,165)'
      },
    },
  },
  plugins: [],
}
