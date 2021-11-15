import React from 'react';
import ContactInfo from './ContactInfo';
import GetInTouch from './GetInTouch';
import ImportantLink from './ImportantLink';

function FooterTop({ data }) {
  return (
    <div className="footer-top">
      <div className="grid-row">
        <ImportantLink data={data} />
        <ContactInfo data={data} />
        <GetInTouch data={data} />
      </div>
    </div>
  );
}

export default FooterTop;
