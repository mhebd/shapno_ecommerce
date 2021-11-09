import React from 'react';
import img from '../../../../images/404.jpg';

function NotFound() {
  const style = {
    width: '100vw',
    height: '100vh',
  };
  return (
    <div style={style}>
      <img src={img} alt="" style={style} />
    </div>
  );
}

export default NotFound;
