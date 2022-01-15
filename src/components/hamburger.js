import React from 'react';

const Hamburger = ({ onClick, isOpen, showOnDesktop }) => {
  const genericHamburgerLine = `h-1 w-7 my-1 rounded-full ${
    isOpen ? 'bg-header-hamburger-alt' : 'bg-header-hamburger'
  } transition ease transform duration-300`;

  return (
    <button
      className={`flex flex-col h-12 w-12 justify-center items-center ${isOpen ? 'fixed top-4 sm:top-7' : 'relative'} ${
        showOnDesktop ? '' : 'lg:hidden'
      } z-30`}
      onClick={onClick}
    >
      <div className={`${genericHamburgerLine} ${isOpen ? 'rotate-45 translate-y-3 opacity-100' : 'opacity-100'}`} />
      <div className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
      <div className={`${genericHamburgerLine} ${isOpen ? '-rotate-45 -translate-y-3 opacity-100' : 'opacity-100'}`} />
    </button>
  );
};

export default Hamburger;
