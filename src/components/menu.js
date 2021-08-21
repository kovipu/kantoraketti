import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Menu = ({ isOpen, onLinkClick }) => {
  const { contentfulNavigation } = useStaticQuery(graphql`
    query {
      contentfulNavigation(isPublished: { eq: "published" }) {
        items {
          title
          urlSlug
        }
      }
    }
  `);

  return (
    <nav
      className={`z-20 fixed top-0 left-0 h-screen w-full bg-menu-background flex items-center transform-gpu -translate-x-full transition-all ${
        isOpen ? 'transform-none' : ''
      }`}>
      <ul className="m-8">
        {contentfulNavigation.items.map(({ title, urlSlug }) => (
          <li key={title} className="text-2xl text-menu-text my-4 hover:underline">
            <a onClick={() => onLinkClick(urlSlug)}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
