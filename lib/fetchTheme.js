const fetch = require("sync-fetch");

const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = process.env;
const endpoint = "https://graphql.contentful.com/content/v1/spaces/" + CONTENTFUL_SPACE_ID;

const fetchTheme = () => {
  const query = `query {
    themeCollection(where: { isPublished: "published" }) {
      items {
        fontFamily
        backgroundColor
        backgroundColorAlternative
        textColor
        textColorInverted
      }
    }
  }`;
  const res = fetch(endpoint, {
    method: 'POST',
    headers: {
      "Authorization": "Bearer " + CONTENTFUL_ACCESS_TOKEN,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query }),
  });
  const body = res.json();

  // there can be only one of theme objects published.
  return body.data.themeCollection.items[0];
}

module.exports = fetchTheme;