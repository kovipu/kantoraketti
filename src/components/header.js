import React, { useState } from 'react';
import { useStaticQuery, graphql, Link, navigate } from 'gatsby';
import Hamburger from './hamburger';
import Menu from './menu';
import Img from 'gatsby-image';

const Header = ({ isIndexPage }) => {
  const { contentfulLandingPage, contentfulNavigation, contentfulTheme } = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulLandingPage(isPublished: { eq: "published" }) {
        title
        headerSubtitle
        heroImage {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
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
      contentfulTheme(isPublished: { eq: "published" }) {
        siteLayout
      }
    }
  `);

  const navItems = contentfulNavigation.items;
  const { title, headerSubtitle, heroImage, logo } = contentfulLandingPage;
  const logoUrl = logo.file.url;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => setIsMenuOpen(!isMenuOpen);

  const navigateAndClose = (urlSlug) => {
    setIsMenuOpen(false);
    navigate(`/${urlSlug}`);
  };

  switch (contentfulTheme.siteLayout) {
    case 'A':
    case 'B':
      return (
        <HeaderA
          {...{
            isIndexPage,
            title,
            headerSubtitle,
            heroImage,
            logoUrl,
            navItems,
            isMenuOpen,
            handleHamburgerClick,
            navigateAndClose
          }}
        />
      );
    case 'C':
      return (
        <HeaderC
          {...{
            isIndexPage,
            title,
            headerSubtitle,
            heroImage,
            logoUrl,
            navItems,
            isMenuOpen,
            handleHamburgerClick,
            navigateAndClose
          }}
        />
      );
    default:
      throw new Error('Invalid site layout');
  }
};

const HeaderA = ({ logoUrl, navItems, handleHamburgerClick, isMenuOpen, navigateAndClose }) => (
  <header className="top-0 w-full flex z-10 absolute md:relative md:p-3 bg-header-background">
    <div className="w-full px-4 md:px-8 max-w-3xl mx-auto flex items-center">
      <Link to="/" className="z-10">
        <img src={logoUrl} alt="Site logo" className="h-10 m-3 flex" />
      </Link>

      <div className="ml-auto">
        {navItems.map(({ urlSlug, title }) => (
          <Link
            key={title}
            to={`/${urlSlug}`}
            className="py-2 px-3 m-2 text-header-text text-lg hover:underline hidden lg:inline">
            {title}
          </Link>
        ))}
        <Hamburger onClick={handleHamburgerClick} isOpen={isMenuOpen} />
      </div>
    </div>
    <Menu isOpen={isMenuOpen} items={navItems} onLinkClick={navigateAndClose} />
  </header>
);

const HeaderC = ({
  isIndexPage,
  title,
  headerSubtitle,
  heroImage,
  logoUrl,
  navItems,
  handleHamburgerClick,
  navigateAndClose,
  isMenuOpen
}) => {
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
            <img src={logoUrl} alt="Site logo" className="h-20 lg:h-32 flex" />
            <h1 className="font-serif text-header-text z-10 text-5xl lg:text-7xl uppercase">{title}</h1>
            <p className="hidden md:block text-header-text text-2xl w-52 m-7">{headerSubtitle}</p>
          </Link>
        </div>
        <div className="row-start-1 col-start-1 flex justify-end">
          <Hamburger onClick={handleHamburgerClick} isOpen={isMenuOpen} />
        </div>
      </div>
      <nav className="hidden lg:block bg-menu-background text-center leading-4 h-14">
        {navItems.map(({ urlSlug, title }) => (
          <Link key={title} to={`/${urlSlug}`} className="leading-loose m-3 text-header-text text-2xl hover:underline">
            {title}
          </Link>
        ))}
      </nav>
      <Menu isOpen={isMenuOpen} items={navItems} onLinkClick={navigateAndClose} />
    </>
  );
};

export default Header;
