import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children, location }) => (
  <>
    <Header location={location} />
    {children}
    <Footer />
  </>
);

export default Layout;
