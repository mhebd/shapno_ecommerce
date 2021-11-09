/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { useCart } from '../../../../../context/cartitem/CartProvider';
import Loading from '../../../reusable/Loading';
import Profile from '../Profile';

function CartList(props) {
  // eslint-disable-next-line no-unused-vars
  const { isLoading, removeCartItem, getCartItems, cartitems } = useCart();

  const [items, setItems] = useState([]);

  useEffect(() => {
    getCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setItems(cartitems);
  }, [cartitems]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Profile {...props}>
      <div className="cl-wrap">
        <h3 className="pb-heading hbbd">Your Cart Items</h3>
        {isLoading && <Loading />}
        {!isLoading && (
          <div className="items-wrap">
            <table className="items-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
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
                    <td>{item.product.discountPrice}$</td>
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
        )}
      </div>
    </Profile>
  );
}

export default CartList;
