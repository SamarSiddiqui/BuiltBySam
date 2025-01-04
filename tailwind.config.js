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
        migraBoldItalic:['MigraBoldItalic'],
      },
      colors: {
        'custom-vanila': '#f0ede7',  
      },
    },
  },
  plugins: [],
}