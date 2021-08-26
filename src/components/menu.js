import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Menu = ({ isOpen }) => {
  const { contentfulNavigation } = useStaticQuery(graphql`
    query {
      contentfulNavigation(isPublished: { eq: "published" }) {
        navigationCategories {
          name
          navigationItems {
            title
            urlSlug
          }
        }
      }
    }
  `);

  return (
    <nav
      className={`z-20 fixed top-0 left-0 w-full bg-menu-background flex transform-gpu -translate-y-full transition-all ${
        isOpen ? 'transform-none' : ''
      }`}>
      <div className="flex flex-wrap m-10 w-full lg:justify-around max-w-7xl mx-auto">
        {contentfulNavigation.navigationCategories.map(({ name, navigationItems }) => (
          <div className="m-6">
            <h2 className="p-1 text-lg text-menu-header">{name}</h2>
            <ul>
              {navigationItems.map(({ title, urlSlug }) => (
                <li key={title} className="p-1 text-2xl text-menu-text hover:underline cursor-pointer">
                  <Link to={`/${urlSlug}`}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Menu;
