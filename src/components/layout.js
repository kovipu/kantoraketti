import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children, location }) => (
  <>
    <Header isIndexPage={location.pathname === '/'} />
    {children}
    <Footer />
  </>
);

export default Layout;
