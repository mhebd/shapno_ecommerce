import React from 'react';
import Box from '../../reusable/Box';
import ProductCard from '../../reusable/ProductCard';

function CategoryBox({ boxId, heading, products }) {
  return (
    <Box boxId={boxId} heading={heading}>
      <div className="product-list grid-row">
        {products.map((p) => (
          <ProductCard
            key={Math.random()}
            id={p.id}
            name={p.title}
            img={p.image}
            price={p.price}
            discount={p.discount}
            discountPrice={p.discountPrice}
            imgPath="../../"
          />
        ))}
      </div>
    </Box>
  );
}

export default CategoryBox;
