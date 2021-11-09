import React from 'react';
import CatMenu from './CatMenu';
import MainMenu from './MainMenu';

function Navbar() {
  return (
    <nav className="navbar user-navbar">
      <div className="container">
        <div className="menu-box">
          <CatMenu />
          <MainMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
