import React from 'react';
import Button from '../../reusable/Button';
import MenuLink from '../../reusable/MenuLink';

function MainMenu() {
  return (
    <div className="main-menu-wrap">
      <Button type="button" classes="mm-toggle-btn">
        <i className="fas fa-bars" />
      </Button>
      <ul className="main-menu">
        <MenuLink link="/">All Shops</MenuLink>
        <MenuLink link="/">Campaign</MenuLink>
        <MenuLink link="/">Top Ten</MenuLink>
        <MenuLink link="/">Product Of The Month</MenuLink>
      </ul>
    </div>
  );
}

export default MainMenu;
