import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Hamburger from '../components/hamburger';

const HeaderA = ({ handleHamburgerClick, isMenuOpen, children }) => {
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
    <header className="top-0 w-full flex items-center md:justify-center z-10 md:relative md:p-3">
      <Link to="/" className="z-10 flex items-center justify-center">
        <img src={headerLogo.file.url} alt="Site logo" className="h-10 w-10 md:h-14 md:w-14 m-3 flex" />
        <h1 className="text-4xl md:text-6xl font-serif uppercase text-header-text">{title}</h1>
      </Link>
      <div className="w-0 absolute right-14 md:right-20">
        <Hamburger onClick={handleHamburgerClick} isOpen={isMenuOpen} showOnDesktop={true} />
      </div>
      {children}
    </header>
  );
};

export default HeaderA;
