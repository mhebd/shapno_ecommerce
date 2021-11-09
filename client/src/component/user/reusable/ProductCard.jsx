import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ id, name, img, price, discount, discountPrice, imgPath }) {
  return (
    <div className="col-6 col-s4 col-m3 col-l2 card">
      <Link to={`/product/${id}`}>
        <img
          src={`${imgPath || './'}uploads/product/${img}`}
          alt={name}
          className="product-img mb-2"
        />
        <h4 className="title">{name}</h4>
        <p className="mb-1">
          <del className="root-price">{price}$</del>
        </p>
        <p className="mb-1">
          <em className="less-price">{discountPrice}$</em> - <small>{discount}%</small>
        </p>
      </Link>
    </div>
  );
}

export default ProductCard;
