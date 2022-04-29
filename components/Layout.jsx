import React, { useState } from 'react';
import Footer from './Footer';
import Menu from './Menu';
import Navbar from './Navbar';

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
