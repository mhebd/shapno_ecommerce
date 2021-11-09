import React from 'react';

function Button({ type, classes, children, onClick }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button onClick={onClick} type={type} className={`btn ${classes}`}>
      {children}
    </button>
  );
}

export default Button;
