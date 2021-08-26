import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Hamburger from '../components/hamburger';

const HeaderC = ({ isIndexPage, handleHamburgerClick, isMenuOpen, children }) => {
  const { contentfulLandingPage, contentfulNavigation } = useStaticQuery(graphql`
    query {
      contentfulLandingPage(isPublished: { eq: "published" }) {
        title
        headerSubtitle
        heroImage {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        headerLogo {
          file {
            url
          }
        }
      }
      contentfulNavigation(isPublished: { eq: "published" }) {
        navigationCategories {
          navigationItems {
            title
            urlSlug
          }
        }
      }
    }
  `);

  const { title, headerSubtitle, heroImage, headerLogo } = contentfulLandingPage;

  return (
    <>
      <div
        className={`grid transition-all duration-500 bg-header-background border-b-8 border-menu-background lg:border-0 ${
          isIndexPage ? 'max-h-96' : 'max-h-40'
        }`}>
        <Img
          className={`transition-all duration-500 row-start-1 col-start-1 ${
            isIndexPage ? 'opacity-50 max-h-96' : 'opacity-0 max-h-40'
          }`}
          fluid={heroImage.fluid}
          alt=""
        />
        <div className="row-start-1 col-start-1 flex justify-center items-center z-10">
          <Link to="/" className="flex items-center">
            <img src={headerLogo.file.url} alt="Site logo" className="h-20 lg:h-32 flex" />
            <h1 className="font-serif text-header-text z-10 text-5xl lg:text-7xl uppercase">{title}</h1>
            <p className="hidden md:block text-header-text text-2xl w-52 m-7">{headerSubtitle}</p>
          </Link>
        </div>
        <div className="row-start-1 col-start-1 flex justify-end">
          <Hamburger onClick={handleHamburgerClick} isOpen={isMenuOpen} />
        </div>
      </div>
      <nav className="hidden lg:block bg-menu-background text-center leading-4 h-14">
        {contentfulNavigation.navigationCategories[0].navigationItems.map(({ urlSlug, title }) => (
          <Link key={title} to={`/${urlSlug}`} className="leading-loose m-3 text-header-text text-2xl hover:underline">
            {title}
          </Link>
        ))}
      </nav>
      {children}
    </>
  );
};

export default HeaderC;
