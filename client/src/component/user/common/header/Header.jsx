import React, { useEffect } from 'react';
import cartListToggler from '../../../../asset/js/script';
import Headertop from './Headertop';
import HUserInfo from './HUserInfo';
import Logo from './Logo';
import Navbar from './Navbar';
import SearchBox from './SearchBox';

function Header() {
  useEffect(() => {
    cartListToggler();
  });

  return (
    <header className="header">
      <Headertop />
      <div className="header">
        <div className="container py-2">
          <div className="grid-row">
            <Logo />

            <SearchBox />

            <HUserInfo />
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
