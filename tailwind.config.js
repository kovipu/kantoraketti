const fetchTheme = require('./lib/fetchTheme');
const {
  fontFamily,
  backgroundColor,
  backgroundColorAlternative,
  textColor,
  textColorInverted,
  headerColor,
  accentColor
} = fetchTheme();

module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: {
        DEFAULT: backgroundColor,
        alt: backgroundColorAlternative
      },
      text: {
        DEFAULT: textColor,
        inverted: textColorInverted,
        header: headerColor,
        accent: accentColor
      }
    },
    fontFamily: {
      sans: [fontFamily, 'sans-serif']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
