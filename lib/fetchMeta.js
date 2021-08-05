const fetch = require('sync-fetch');
const https = require('https');
const fs = require('fs');

const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = process.env;
const endpoint = 'https://graphql.contentful.com/content/v1/spaces/' + CONTENTFUL_SPACE_ID;

const fetchMeta = () => {
  const query = `query {
    landingPageCollection(where: { isPublished: "published" }) {
      items {
        siteUrl
        title
        description
        lang
        logo {
          url
          fileName
        }
      }
    }
  }`;

  const res = fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });
  const body = res.json();

  // there can be only one published object.
  const meta = body.data.landingPageCollection.items[0];

  const { url, fileName } = meta.logo;

  // create assets folder if it doesn't exist
  fs.mkdir('assets', (err) => {});

  // download logo
  const file = fs.createWriteStream(`assets/${fileName}`);
  https.get(url, (response) => {
    response.pipe(file);
    console.log('Downloaded icon.');
  });

  return meta;
};

module.exports = fetchMeta;
