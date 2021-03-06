import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ description, lang, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            lang
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;

  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      bodyAttributes={{
        class: 'bg-gradient-to-b from-background to-background-alt'
      }}
      title={pageTitle}
      meta={[
        {
          name: `a`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: pageTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        }
      ]}
    />
  );
};

export default Seo;
