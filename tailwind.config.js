const fetchTheme = require('./lib/fetchTheme');
const {
  fontFamily,
  titleFontFamily,
  backgroundColor,
  backgroundColorAlternative,
  headerBackgroundColor,
  headerTextColor,
  hamburgerColor,
  hamburgerColorAlt,
  menuBackgroundColor,
  menuHeaderColor,
  menuTextColor,
  headingColor,
  textColor,
  textColorInverted,
  accentColor,
  linkColor,
  footerBackgroundColor,
  footerTextColor
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
        text: headerTextColor,
        hamburger: {
          DEFAULT: hamburgerColor,
          alt: hamburgerColorAlt
        }
      },
      menu: {
        background: menuBackgroundColor,
        header: menuHeaderColor,
        text: menuTextColor
      },
      footer: {
        background: footerBackgroundColor,
        text: footerTextColor
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
