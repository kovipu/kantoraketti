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
      className={`z-20 fixed top-0 left-0 w-full bg-menu-background flex justify-center transform-gpu -translate-y-full transition-all ${
        isOpen ? 'transform-none' : ''
      }`}
    >
      <div
        className={`
        flex flex-col w-full max-h-screen max-w-7xl mx-auto overflow-y-auto bg-menu-background
        sm:m-10 sm:flex-wrap sm:max-h-144
        lg:justify-around lg:max-h-96
        xl:flex-row
      `}
      >
        {contentfulNavigation.navigationCategories.map(({ name, navigationItems }) => (
          <div key={name} className="mx-6 my-3">
            {contentfulNavigation.navigationCategories.length > 1 && (
              <h2 className="p-1 text-xl text-menu-header">{name}</h2>
            )}
            <ul>
              {navigationItems.map(({ title, urlSlug }) => (
                <li key={title} className="p-1 text-lg cursor-pointer text-menu-text hover:underline">
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
