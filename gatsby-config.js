const fetchMeta = require(`./lib/fetchMeta`);
const fetchTheme = require('./lib/fetchTheme');

const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_PREVIEW_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_HOST } = process.env;

const { siteUrl, title, description, lang, favicon } = fetchMeta();
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
        accessToken: CONTENTFUL_ACCESS_TOKEN || CONTENTFUL_PREVIEW_ACCESS_TOKEN,
        spaceId: CONTENTFUL_SPACE_ID,
        host: CONTENTFUL_HOST
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `assets/${favicon.fileName}`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [fontFamily, titleFontFamily],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout.js')
      }
    }
  ]
};
