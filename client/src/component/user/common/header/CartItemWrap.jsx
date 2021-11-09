/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function CartItemWrap({ items, removeCartItem }) {
  const clickHdl = (e) => {
    if (items.length <= 0) {
      e.preventDefault();
      toast.info('Your cart list is empty.');
    }
  };

  return (
    <>
      <div className="cart-items-wrap">
        <span className="close-btn btn">
          <i className="fas fa-arrow-right" />
        </span>
        <h3 className="heading text-center py-2">Your Cart Items</h3>

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
                <tr key={Math.random()}>
                  <td>
                    <img src={`../uploads/product/${item.product.image}`} alt="" />
                  </td>
                  <td style={{ width: '100%' }}>{item.product.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.product.discountPrice * item.quantity}$</td>
                  <td>
                    <button
                      onClick={() => removeCartItem(item._id)}
                      type="button"
                      className="btn dlt-btn"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="checkout text-center py-2">
          <Link to="/checkout" onClick={(e) => clickHdl(e)} className="btn chk-btn">
            Checkout Now
          </Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default CartItemWrap;
