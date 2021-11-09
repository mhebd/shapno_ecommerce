import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
  return (
    <header id="header">
      <h2 className="heading my-3 text-center">Admin Panel</h2>
      <Link to="/" className="ml-3">
        <i className="fas fa-arrow-left mr-2" />
        Home
      </Link>

      <Navbar />
    </header>
  );
}

export default Header;
