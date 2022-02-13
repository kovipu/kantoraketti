import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Hamburger from '../components/hamburger';

const HeaderMachina = ({ isIndexPage, handleHamburgerClick, isMenuOpen, children }) => {
  const { contentfulLandingPage } = useStaticQuery(graphql`
    query {
      contentfulLandingPage(isPublished: { eq: "published" }) {
        title
        headerSubtitle
        heroImage {
          gatsbyImageData
        }
        headerLogo {
          file {
            url
          }
        }
      }
    }
  `);

  const { title, headerSubtitle, heroImage, headerLogo } = contentfulLandingPage;

  return (
    <>
      <div className={`grid bg-header-background ${isIndexPage ? 'max-h-96 2xl:max-h-144' : 'max-h-40'}`}>
        <GatsbyImage
          className={`row-start-1 col-start-1 ${
            isIndexPage ? 'opacity-50 max-h-96 2xl:max-h-144' : 'opacity-0 max-h-40'
          }`}
          loading="eager"
          image={heroImage.gatsbyImageData}
          alt=""
        />
        <div className="z-10 flex items-center justify-center col-start-1 row-start-1">
          <Link to="/" className="flex items-center">
            <img src={headerLogo.file.url} alt="Site logo" className="flex h-20 lg:h-32" />
            <h1 className="z-10 font-serif text-5xl uppercase text-header-text lg:text-7xl">{title}</h1>
            <p className="hidden text-2xl md:block text-header-text w-52 m-7">{headerSubtitle}</p>
          </Link>
        </div>
        <div className="flex justify-end col-start-1 row-start-1 m-5">
          <Hamburger onClick={handleHamburgerClick} isOpen={isMenuOpen} />
        </div>
      </div>
      {children}
    </>
  );
};

export default HeaderMachina;
