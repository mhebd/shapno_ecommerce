/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';

function Item({ item, removeCartItem, updateCartItem }) {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(item.quantity);
  }, [item.quantity]);

  const decrement = () => {
    if (!(qty <= 1)) {
      setQty(qty - 1);
      updateCartItem(item._id, { quantity: qty - 1 });
    }
  };

  const increment = () => {
    setQty(qty + 1);
    updateCartItem(item._id, { quantity: qty + 1 });
  };

  return (
    <tr>
      <td>
        <img src={`../uploads/product/${item.product.image}`} alt="" />
      </td>
      <td style={{ width: '100%' }}>{item.product.title}</td>
      <td>
        <div className="quantity-box">
          <button type="button" onClick={() => decrement()} className="btn decrement-btn">
            -
          </button>
          <input
            type="number"
            name="quantity"
            min="1"
            value={qty}
            onChange={(e) => e.preventDefault()}
          />
          <button type="button" onClick={() => increment()} className="btn increment-btn">
            +
          </button>
        </div>
      </td>
      <td>{item.product.discountPrice * qty}$</td>
      <td>
        <button onClick={() => removeCartItem(item._id)} type="button" className="btn dlt-btn">
          X
        </button>
      </td>
    </tr>
  );
}

export default Item;
