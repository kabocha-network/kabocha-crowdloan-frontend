const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      white: colors.white,
      black: '#151515',
      yellow: '#FFF85B',
      gray: Object.assign({}, colors.gray, {
        100: '#F7F7F7'
      })
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
