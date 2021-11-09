/* eslint-disable no-underscore-dangle */
import React from 'react';
import Item from './Item';

function CartItemsList({ items, removeCartItem, updateCartItem }) {
  return (
    <div className="cart-list-wrap">
      <h3 className="pb-heading hbbd">Your Cart Items</h3>
      <div className="items-wrap">
        <table className="items-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <Item
                key={Math.random()}
                item={item}
                removeCartItem={removeCartItem}
                updateCartItem={updateCartItem}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CartItemsList;
