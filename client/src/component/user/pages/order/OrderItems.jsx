import React from 'react';

function OrderItems({ orderItems }) {
  return (
    <>
      <h3>Order Items List</h3>
      <ol className="ordered-list ml-3">
        {orderItems.map((item) => (
          <li key={Math.random()} className="order-item list-item mb-3">
            <p className="item-info">
              <strong>Product:</strong> {item.product.title}
            </p>
            <p className="item-info">
              <strong>Price:</strong> {item.product.discountPrice}
            </p>
            <p className="item-info">
              <strong>Quantity:</strong> {item.quantity}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}

export default OrderItems;
