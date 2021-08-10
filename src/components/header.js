import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Header = ({ children }) => {
  const { contentfulLandingPage, contentfulNavigation } = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulLandingPage(isPublished: {eq:"published"}) {
        logo {
          file {
            url
          }
        }
      }
      contentfulNavigation(isPublished: { eq: "published" }) {
        items {
          ... on ContentfulPage {
            title
            urlSlug
          }
        }
      }
    }
  `);

  console.log(contentfulNavigation);

  return (
    <header className="w-full p-6 flex z-10 absolute md:relative md:p-9">
      <div className="w-full px-8 max-w-3xl mx-auto flex items-center">
        <a href="/">
          <img src={contentfulLandingPage.logo.file.url} alt="Site logo" className="h-10 m-3 flex" />
        </a>

        <div className="ml-auto">
        {contentfulNavigation.items.map(({ urlSlug, title }) => (
          <a href={urlSlug} className="py-2 px-3 m-2 rounded-full text-text-accent text-lg hover:underline">
            {title}
          </a>
        ))}
        </div>
      </div>
    </header>
  );
}

export default Header;