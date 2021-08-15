import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Hamburger from './hamburger';
import Menu from './menu';

const Header = () => {
  const { contentfulLandingPage, contentfulNavigation, contentfulTheme } = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulLandingPage(isPublished: { eq: "published" }) {
        title
        headerSubtitle
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
  const { title, headerSubtitle, logo } = contentfulLandingPage;
  const logoUrl = logo.file.url;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => setIsMenuOpen(!isMenuOpen);

  switch (contentfulTheme.siteLayout) {
    case 'A':
    case 'B':
      return (
        <HeaderA {...{ title, headerSubtitle, logoUrl, navItems, isMenuOpen, handleHamburgerClick }} />
      );
    case 'C':
      return (
        <HeaderC {...{ title, headerSubtitle, logoUrl, navItems, isMenuOpen, handleHamburgerClick }} />
      );
    default:
      throw new Error('Invalid site layout');
  }

};

const HeaderA = ({ title, logoUrl, navItems, handleHamburgerClick, isMenuOpen }) => (
  <header className="top-0 w-full flex z-10 absolute md:relative md:p-3 bg-header-background">
    <div className="w-full px-4 md:px-8 max-w-3xl mx-auto flex items-center">
      <Link to="/" className="z-10">
        <img src={logoUrl} alt="Site logo" className="h-10 m-3 flex" />
      </Link>

      <div className="ml-auto">
        {navItems.map(({ urlSlug, title }) => (
          <Link
            to={`/${urlSlug}`}
            className="py-2 px-3 m-2 text-header-text text-lg hover:underline hidden lg:inline">
            {title}
          </Link>
        ))}
        <Hamburger onClick={handleHamburgerClick} isOpen={isMenuOpen} />
      </div>
    </div>
    <Menu isOpen={isMenuOpen} items={navItems} />
  </header>
);

const HeaderC = ({ title, headerSubtitle, logoUrl, navItems, handleHamburgerClick, isMenuOpen }) => (
  <>
    <header className="top-0 w-full flex absolute md:relative md:p-3 bg-header-background">
      <div className="w-full pr-3 md:px-8 max-w-3xl mx-auto flex items-center">
        <Link to="/" className="z-10 flex items-center mr-auto">
          <img src={logoUrl} alt="Site logo" className="h-20 lg:h-32 flex" />
          <h1 className="font-serif text-header-text z-10 text-5xl lg:text-7xl uppercase">
            {title}
          </h1>
          <p className="hidden lg:block text-header-text text-2xl w-50 m-7">
            {headerSubtitle}
          </p>
        </Link>
        <Hamburger onClick={handleHamburgerClick} isOpen={isMenuOpen} />
      </div>
    </header>
    <nav className="hidden lg:block bg-menu-background text-center leading-4 p-2">
      {navItems.map(({ urlSlug, title }) => (
        <Link
          to={`/${urlSlug}`}
          className="leading-loose m-3 text-header-text text-2xl hover:underline">
          {title}
        </Link>
      ))}
    </nav>
    <Menu isOpen={isMenuOpen} items={navItems} />
  </>
);

export default Header;
