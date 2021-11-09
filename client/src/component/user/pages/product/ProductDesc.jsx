/* eslint-disable react/no-danger */
import React from 'react';

function ProductDesc({ product }) {
  return (
    <div className="box">
      <div className="sp-description">
        <h3 className="spd-heading">Product Detials</h3>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
    </div>
  );
}

export default ProductDesc;
