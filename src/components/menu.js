import React from 'react';
import { Link } from 'gatsby';

const Menu = ({ isOpen, items }) => {
  return (
    <nav
      className={`z-20 fixed top-0 left-0 h-screen w-full lg:hidden bg-menu-background flex items-center transform-gpu -translate-x-full transition-all ${
        isOpen ? 'transform-none' : ''
      }`}>
      <ul className="m-8">
        {items.map(({ title, urlSlug }) => (
          <li key={title} className="text-2xl text-menu-text my-4 hover:underline">
            <Link to={`/${urlSlug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
