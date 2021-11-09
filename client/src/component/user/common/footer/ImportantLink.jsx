import React from 'react';
import MenuLink from '../../reusable/MenuLink';

function ImportanLink() {
  return (
    <div className="col-m4 pb-3">
      <h3 className="ft-heading">Important Link</h3>
      <ul className="footer-menu">
        <MenuLink link="/">About Us</MenuLink>
        <MenuLink link="/">Contact Us</MenuLink>
        <MenuLink link="/">Privacy Policy</MenuLink>
        <MenuLink link="/">Cookie Policy</MenuLink>
        <MenuLink link="/">Terms & Conditions</MenuLink>
        <MenuLink link="/">Returns & Replacement</MenuLink>
      </ul>
    </div>
  );
}

export default ImportanLink;
