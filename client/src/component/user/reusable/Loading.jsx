import React from 'react';
import loading from '../../../images/loading.gif';

function Loading() {
  return (
    <div>
      <img src={loading} alt="loading..." style={{ display: 'block', margin: '0 auto' }} />
    </div>
  );
}

export default Loading;
