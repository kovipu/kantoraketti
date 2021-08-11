import React from 'react';

const Hamburger = ({ onClick, isOpen }) => {
  const genericHamburgerLine = 'h-1 w-7 my-1 rounded-full bg-text-accent transition ease transform duration-300';

  return (
    <button className="flex flex-col h-12 w-12 justify-center items-center relative lg:hidden z-10" onClick={onClick}>
      <div className={`${genericHamburgerLine} ${isOpen ? 'rotate-45 translate-y-3 opacity-100' : 'opacity-100'}`} />
      <div className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
      <div className={`${genericHamburgerLine} ${isOpen ? '-rotate-45 -translate-y-3 opacity-100' : 'opacity-100'}`} />
    </button>
  );
};

export default Hamburger;
