const fetchMeta = require(`./lib/fetchMeta`);
const fetchTheme = require("./lib/fetchTheme");

const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = process.env;

const { siteUrl, title, description, lang, logo } = fetchMeta();
const { fontFamily, titleFontFamily } = fetchTheme(); 

module.exports = {
  siteMetadata: {
    siteUrl,
    title,
    description,
    lang
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        spaceId: CONTENTFUL_SPACE_ID
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `assets/${logo.fileName}`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [fontFamily, titleFontFamily],
        display: "swap"
      }
    }
  ]
};
