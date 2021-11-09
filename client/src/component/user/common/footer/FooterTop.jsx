import React from 'react';
import ContactInfo from './ContactInfo';
import GetInTouch from './GetInTouch';
import ImportantLink from './ImportantLink';

function FooterTop() {
  return (
    <div className="footer-top">
      <div className="grid-row">
        <ImportantLink />
        <ContactInfo />
        <GetInTouch />
      </div>
    </div>
  );
}

export default FooterTop;
