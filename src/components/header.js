import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Menu from './menu';
import HeaderMachina from '../layoutMachina/headerMachina';
import HeaderAdamas from '../layoutAdamas/headerAdamas';

const Header = ({ location }) => {
  const { contentfulTheme } = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulTheme(isPublished: { eq: "published" }) {
        siteLayout
      }
    }
  `);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setIsMenuOpen(false), [location]);

  const handleHamburgerClick = () => setIsMenuOpen(!isMenuOpen);

  const isIndexPage = location.pathname === '/';

  return (
    <RenderHeader
      siteLayout={contentfulTheme.siteLayout}
      headerProps={{ isIndexPage, handleHamburgerClick, isMenuOpen }}
    >
      <Menu isOpen={isMenuOpen} />
    </RenderHeader>
  );
};

const RenderHeader = ({ siteLayout, children, headerProps }) => {
  switch (siteLayout) {
    case 'adamas':
      return <HeaderAdamas {...headerProps}>{children}</HeaderAdamas>;
    case 'machina':
      return <HeaderMachina {...headerProps}>{children}</HeaderMachina>;
    default:
      throw new Error('Invalid site layout');
  }
};

export default Header;
