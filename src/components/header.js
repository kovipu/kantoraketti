import React, { useState } from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';

import Menu from './menu';
import HeaderA from '../layoutA/headerA';
import HeaderB from '../layoutB/headerB';
import HeaderC from '../layoutC/headerC';

const Header = ({ isIndexPage }) => {
  const { contentfulTheme } = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulTheme(isPublished: { eq: "published" }) {
        siteLayout
      }
    }
  `);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => setIsMenuOpen(!isMenuOpen);

  const navigateAndClose = (urlSlug) => {
    setIsMenuOpen(false);
    navigate(`/${urlSlug}`);
  };

  return (
    <RenderHeader
      siteLayout={contentfulTheme.siteLayout}
      headerProps={{ isIndexPage, handleHamburgerClick, isMenuOpen }}>
      <Menu isOpen={isMenuOpen} onLinkClick={navigateAndClose} />
    </RenderHeader>
  );
};

const RenderHeader = ({ siteLayout, children, headerProps }) => {
  switch (siteLayout) {
    case 'A':
      return <HeaderA {...headerProps}>{children}</HeaderA>;
    case 'B':
      return <HeaderB {...headerProps}>{children}</HeaderB>;
    case 'C':
      return <HeaderC {...headerProps}>{children}</HeaderC>;
    default:
      throw new Error('Invalid site layout');
  }
};

export default Header;
