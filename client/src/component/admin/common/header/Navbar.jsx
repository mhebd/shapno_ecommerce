import React from 'react';
import MenuLink from '../../../user/reusable/MenuLink';

function Navbar() {
  return (
    <nav id="admin-navbar" className="mt-3">
      <ul className="admin-menu">
        <MenuLink link="/admin">Setting</MenuLink>
        <MenuLink link="/admin/products">Products</MenuLink>
        <MenuLink link="/admin/users">Users</MenuLink>
        <MenuLink link="/admin/categories">Categories</MenuLink>
        <MenuLink link="/admin/orders">Orders</MenuLink>
      </ul>
    </nav>
  );
}

export default Navbar;
