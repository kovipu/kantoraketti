import React from 'react';
import { Link } from 'gatsby';

const Menu = ({ isOpen, items }) => {
  return (
    <nav
      className={`fixed top-0 left-0 h-screen w-full lg:hidden bg-background-alt flex items-center transform-gpu -translate-x-full transition-all ${
        isOpen ? 'transform-none' : ''
      }`}>
      <ul className="m-8">
        {items.map(({ title, urlSlug }) => (
          <li key={title} className="text-2xl text-text-accent my-4">
            <Link to={`/${urlSlug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
