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
        migraBoldItalic:['MigraBold'],
        migraLightItalic:['MigraLightItalic'],
        migraLight:['MigraLight']
      },
      colors: {
        'custom-vanila': '#f6f3ef',  
      },
      backgroundImage: {
        'custom-linear': 'linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4))',
      },
      screens: {
        largerMobile: { max: "425px" },
        smallerTab: { max: "768px" },
        proTablet: { max: "995px" },
      }
    },
  },
  plugins: [],
}