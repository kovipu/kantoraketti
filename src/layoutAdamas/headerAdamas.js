import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Hamburger from '../components/hamburger';

const HeaderAdamas = ({ handleHamburgerClick, isMenuOpen, children }) => {
  const { contentfulLandingPage } = useStaticQuery(graphql`
    query {
      contentfulLandingPage(isPublished: { eq: "published" }) {
        title
        headerLogo {
          file {
            url
          }
        }
      }
    }
  `);

  const { title, headerLogo } = contentfulLandingPage;

  return (
    <header className="top-0 z-10 flex items-center w-full md:justify-center md:relative">
      <Link to="/" className="z-10 flex items-center justify-center">
        <img src={headerLogo.file.url} alt="Site logo" className="flex m-3 h-14 w-14 md:h-20 md:w-20" />
        <h1 className="font-serif text-4xl uppercase md:text-6xl text-header-text">{title}</h1>
      </Link>
      <div className="absolute w-0 right-14 md:right-20">
        <Hamburger onClick={handleHamburgerClick} isOpen={isMenuOpen} showOnDesktop={true} />
      </div>
      {children}
    </header>
  );
};

export default HeaderAdamas;
