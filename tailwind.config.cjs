/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        primary:'#AEE2FF',
        secondary:'#93C6E7'
      },
      fontFamily:{
        josefinSans:['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
