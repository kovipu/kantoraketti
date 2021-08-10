const path = require('path');

const pageTemplate = path.resolve('src/templates/page.js');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const contentfulPages = await graphql(`
    {
      allContentfulPage {
        edges {
          node {
            urlSlug
          }
        }
      }
    }
  `);

  const pages = contentfulPages.data.allContentfulPage.edges;

  pages.forEach(({ node }) => {
    createPage({
      path: node.urlSlug,
      component: pageTemplate,
      context: { slug: node.urlSlug }
    });
  });
};

exports.createPages = createPages;
