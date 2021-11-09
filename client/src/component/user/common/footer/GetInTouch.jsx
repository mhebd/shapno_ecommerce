import React from 'react';
import MenuLink from '../../reusable/MenuLink';

function GetInTouch() {
  return (
    <div className="col-m4 pb-3">
      <h3 className="ft-heading">Get In Touch</h3>
      <ul className="social-menu">
        <MenuLink link="/">
          <i className="fab fa-facebook-f" />
        </MenuLink>
        <MenuLink link="/">
          <i className="fab fa-instagram" />
        </MenuLink>
        <MenuLink link="/">
          <i className="fab fa-twitter" />
        </MenuLink>
        <MenuLink link="/">
          <i className="fab fa-linkedin-in" />
        </MenuLink>
        <MenuLink link="/">
          <i className="fab fa-youtube" />
        </MenuLink>
      </ul>
    </div>
  );
}

export default GetInTouch;
