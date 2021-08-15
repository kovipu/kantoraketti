const fetchTheme = require('./lib/fetchTheme');
const {
  fontFamily,
  titleFontFamily,
  backgroundColor,
  backgroundColorAlternative,
  headerBackgroundColor,
  headerTextColor,
  menuBackgroundColor,
  menuTextColor,
  headingColor,
  textColor,
  textColorInverted,
  accentColor,
  linkColor
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
      header: {
        background: headerBackgroundColor,
        text: headerTextColor
      },
      menu: {
        background: menuBackgroundColor,
        text: menuTextColor
      },
      text: {
        DEFAULT: textColor,
        inverted: textColorInverted,
        heading: headingColor,
        accent: accentColor,
        link: linkColor
      }
    },
    fontFamily: {
      sans: [fontFamily, 'sans-serif'],
      serif: [titleFontFamily, 'serif']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
