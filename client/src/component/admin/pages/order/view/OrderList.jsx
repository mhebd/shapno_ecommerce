/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useOrder } from '../../../../../context/order/OrderProvider';
import Loading from '../../../../user/reusable/Loading';
import OrderListItem from './OrderListItem';

function OrderList() {
  const [orderLst, setOrderList] = useState([]);

  const { getOrders, isLoading, orders, deleteOrder, message } = useOrder();

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    setOrderList(orders);
  }, [orders]);

  useEffect(() => {
    if (message) {
      toast[message.status](message.message);
    }
  }, [message]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <table id="list-table" className="cat-tabel my-3 p-2 pb-3">
          <thead>
            <tr>
              <th>Index</th>
              <th colSpan="2">Created</th>
              <th>Status</th>
              <th>Price</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              orderLst.length > 0 &&
              orderLst.map((order, i) => (
                <OrderListItem
                  key={Math.random()}
                  index={i}
                  order={order}
                  deleteOrder={deleteOrder}
                />
              ))}
          </tbody>
        </table>
      )}
      <ToastContainer />
    </>
  );
}

export default OrderList;
