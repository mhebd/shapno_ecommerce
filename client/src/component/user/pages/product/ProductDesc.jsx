/* eslint-disable react/no-danger */
import React from 'react';

function ProductDesc({ product }) {
  return (
    <div className="box">
      <div className="sp-description p-3">
        <h3 className="spd-heading">Product Detials</h3>
        <div className="ps-4" dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
    </div>
  );
}

export default ProductDesc;
