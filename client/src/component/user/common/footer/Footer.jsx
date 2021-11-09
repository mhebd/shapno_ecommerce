import React from 'react';
import CopyRight from './CopyRight';
import FooterTop from './FooterTop';

function Footer() {
  return (
    <footer className="py-3 footer">
      <div className="container">
        <FooterTop />
        <CopyRight />
      </div>
    </footer>
  );
}

export default Footer;
