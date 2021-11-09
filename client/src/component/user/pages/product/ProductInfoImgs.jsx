import React, { useState } from 'react';

function ProductInfoImgs({ product }) {
  const [pic, setPic] = useState(product.image);
  return (
    <div className="col-m7 mb-3">
      <div className="grid-row">
        <div className="col-9">
          <div className="sp-image">
            <img src={`../uploads/product/${pic}`} alt="" />
          </div>
        </div>
        <div className="col-3">
          <div className="sp-images">
            {product.images.length > 0 &&
              product.images.map((img) => (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <img
                  key={Math.random()}
                  onClick={() => setPic(img)}
                  src={`../uploads/product/${img}`}
                  alt=""
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfoImgs;
