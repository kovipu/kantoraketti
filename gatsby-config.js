const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = process.env;

module.exports = {
  siteMetadata: {
    title: "kantoraketti",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        spaceId: CONTENTFUL_SPACE_ID
      },
    },
    "gatsby-plugin-postcss",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve:"gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Oxygen"
        ],
        display: "swap"
      }
    }
  ],
};
