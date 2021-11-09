import React from 'react';
import ProductInfoImgs from './ProductInfoImgs';
import ProductInfoInfos from './ProductInfoInfos';

function ProductInfo({ product, createCartItem }) {
  return (
    <div className="box">
      <div className="grid-row">
        {product && (
          <>
            <ProductInfoImgs product={product} />
            <ProductInfoInfos createCartItem={createCartItem} product={product} />
          </>
        )}
      </div>
    </div>
  );
}

export default ProductInfo;
