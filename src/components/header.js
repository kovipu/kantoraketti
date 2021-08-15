import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Hamburger from './hamburger';
import Menu from './menu';

const Header = () => {
  const { contentfulLandingPage, contentfulNavigation } = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulLandingPage(isPublished: { eq: "published" }) {
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

  const items = contentfulNavigation.items;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="top-0 w-full flex z-10 absolute md:relative md:p-3 bg-header-background">
      <div className="w-full px-4 md:px-8 max-w-3xl mx-auto flex items-center">
        <Link to="/" className="z-10">
          <img src={contentfulLandingPage.logo.file.url} alt="Site logo" className="h-10 m-3 flex" />
        </Link>

        <div className="ml-auto">
          {items.map(({ urlSlug, title }) => (
            <Link
              to={`/${urlSlug}`}
              className="py-2 px-3 m-2 text-header-text text-lg hover:underline hidden lg:inline">
              {title}
            </Link>
          ))}
          <Hamburger onClick={handleClick} isOpen={isMenuOpen} />
        </div>
      </div>
      <Menu isOpen={isMenuOpen} items={items} />
    </header>
  );
};

export default Header;
