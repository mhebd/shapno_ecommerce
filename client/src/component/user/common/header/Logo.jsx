import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.jpg';

function Logo() {
  return (
    <div className="col-5 col-m3 col-l4 logo">
      {/* <!-- <a href="#">e-Commerce</a> --> */}
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
}

export default Logo;
