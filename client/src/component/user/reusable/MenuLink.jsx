import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuLink({ link, children }) {
  return (
    <li className="menu-item">
      <NavLink exact to={link} className="menu-link">
        {children}
      </NavLink>
    </li>
  );
}

export default MenuLink;
