/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        planeLight: ['PlaneLight'],
        planeBold:['PlaneBold'],
        planeItalic:['PlaneItalic'],
        grandSlangBold:['GrandSlangBold'],
        grandSlangItalic:['GrandSlangItalic'],
        grandSlangRoman:['GrandSlangRoman'],
        migraLight:['MigraLight',' sans-serif'],
      },
      colors: {
        'custom-vanila': '#f0ede7',  
      },
      backgroundImage: {
        'custom-linear': 'linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4))',
      },
    },
  },
  plugins: [],
}