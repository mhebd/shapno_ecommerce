import React from 'react';

function Box({ boxId, heading, children }) {
  return (
    <div id={boxId} className="box">
      {heading && <h3 className="box-heading">{heading}</h3>}
      {children}
    </div>
  );
}

export default Box;
