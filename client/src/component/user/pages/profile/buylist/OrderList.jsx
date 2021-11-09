/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useOrder } from '../../../../../context/order/OrderProvider';
import Loading from '../../../reusable/Loading';
import Profile from '../Profile';

function OrderList(props) {
  // eslint-disable-next-line no-unused-vars
  const { isLoading, orders, getUserOrders, removeOrderItem } = useOrder();

  const [items, setItems] = useState([]);

  useEffect(() => {
    getUserOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setItems(orders);
  }, [orders]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Profile {...props}>
      <div className="cl-wrap">
        <h3 className="pb-heading hbbd">Your Order Items</h3>
        {isLoading && <Loading />}
        {!isLoading && (
          <div className="items-wrap">
            <table className="items-table">
              <thead>
                <tr>
                  <th colSpan="2">Created At</th>
                  <th>Status</th>
                  <th>Total Price</th>
                  <th colSpan="2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={Math.random()}>
                    <td>{new Date(item.created).toDateString()}</td>
                    <td>{new Date(item.created).toLocaleTimeString()}</td>
                    <td>{item.status}</td>
                    <td>${item.totalPrice}</td>
                    <td>
                      <Link to={`/order/${item._id}`} className="btn">
                        Details
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => removeOrderItem(item._id)}
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

export default OrderList;
