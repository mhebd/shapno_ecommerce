/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useCart } from '../../../../context/cartitem/CartProvider';

function ProductInfoInfos({ product }) {
  const [qty, setQty] = useState(1);

  const { createCartItem, message } = useCart();

  const {
    _id,
    title,
    price,
    discount,
    discountPrice,
    quantity,
    reviews,
    category,
    shortDescription,
  } = product;

  const decrement = () => {
    if (!(qty <= 1)) {
      setQty(qty - 1);
    }
  };

  const increment = () => {
    if (!(qty >= quantity)) {
      setQty(qty + 1);
    }
  };

  useEffect(() => {
    if (message) {
      const { status } = message;
      toast[status](message.message);
    }
  }, [message]);

  const addToCart = () => {
    createCartItem({ product: _id, quantity: qty });
  };

  return (
    <div className="col-m5 mb-3">
      <div className="sp-info">
        <h3 className="title">{title}</h3>
        <p className="mb-2">
          <small>{shortDescription}</small>
        </p>
        <p className="mb-2">
          <small>
            <a href="#rating">{reviews.length} Ratings</a>
          </small>
        </p>
        <p className="mb-2">
          <small>
            Category: <a href={`/product/category/${category._id}`}>{category.name}</a>
          </small>
        </p>
        <p className="mb-2">
          <span className="price">{discountPrice * qty}$</span>
          <br />
          <del>{price}$</del> - <small>{discount}%</small>
        </p>
        <p className="mb-2">
          <small>Only {quantity} Items left</small>
        </p>
        <div className="quantity-box mb-3">
          <p className="mr-3">Quantity</p>
          <button type="button" onClick={() => decrement()} className="btn decrement-btn">
            -
          </button>
          <input
            type="number"
            name="quantity"
            min="1"
            max={quantity}
            value={qty}
            onChange={(e) => e.preventDefault()}
          />
          <button type="button" onClick={() => increment()} className="btn increment-btn">
            +
          </button>
        </div>
        <button type="button" onClick={() => addToCart()} className="btn atc-btn">
          Add To Cart
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductInfoInfos;
