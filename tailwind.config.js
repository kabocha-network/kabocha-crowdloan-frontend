const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Mulish', ...defaultTheme.fontFamily.sans],
      display: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      white: colors.white,
      black: '#151515',
      primary: '#c60a59',
      gray: Object.assign({}, colors.gray, {
        100: '#F7F7F7',
      }),
      red: Object.assign({}, colors.red),
      indigo: Object.assign({}, colors.indigo),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
