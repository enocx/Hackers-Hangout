/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        custom:{
          nblack: '#191919',
          nred: '#DF5452',
          nwhite: '#D4D4D4',
          ncallout: '#362422',
          nblue: '#5585A7',
        }
      }
    },
  },
  plugins: [],
}

