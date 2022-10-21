const colors = require('tailwindcss/colors')
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        DEFAULT: '#0B0958',
        light: '#1653FD',
        dark: '#0B0958',
        disabled: '#5b5b79'
      },
      danger: {
        DEFAULT: '#8a0000',
        light: '#ab0000',
        dark: '#8a0000'
      },
      cta: {
        DEFAULT: '#3635ff',
        light: '#4d4dff',
        dark: '#3635ff',
      },
      background: '#f7f7f7',
      white: '#ffffff',
      black: '#000000',
      green: colors.green,
      red: colors.red,
      indigo: colors.indigo,
      gray: colors.gray,
    },
    extend: {
      fontFamily: {
        'Oxanium': ['Oxanium"', 'sans-serif']
      },
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  plugins: [],
}
