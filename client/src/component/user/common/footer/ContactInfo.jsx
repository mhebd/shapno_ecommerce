import React from 'react';

function ContactInfo({ data }) {
  return (
    <div className="col-m4 pb-3">
      <h3 className="ft-heading">Contact Info</h3>
      <div className="contact-info">
        <address className="mb-1">
          <pre>{data && data.contactAddress}</pre>
        </address>
      </div>
    </div>
  );
}

export default ContactInfo;
