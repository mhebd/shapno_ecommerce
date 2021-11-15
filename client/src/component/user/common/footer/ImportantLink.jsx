import React from 'react';
import MenuLink from '../../reusable/MenuLink';

function ImportanLink({ data }) {
  return (
    <div className="col-m4 pb-3">
      <h3 className="ft-heading">Important Link</h3>
      <ul className="footer-menu">
        {data && data.footerMenu.map((item) => <MenuLink link={item.link}>{item.text}</MenuLink>)}
      </ul>
    </div>
  );
}

export default ImportanLink;
