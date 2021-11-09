import React from 'react';
import img from '../../../images/not-found.png';

function Empty() {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <img
        src={img}
        alt="Empty"
        style={{
          display: 'block',
          margin: '0 auto',
        }}
      />
      <h2>Nothing to see here!</h2>
    </div>
  );
}

export default Empty;
