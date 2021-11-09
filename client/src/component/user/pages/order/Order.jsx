/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useOrder } from '../../../../context/order/OrderProvider';
import UserLayout from '../../common/UserLayout';
import Box from '../../reusable/Box';
import Loading from '../../reusable/Loading';
import OrderItems from './OrderItems';

function Order({ match }) {
  const { id } = match.params;
  const [orderState, setOrderState] = useState(null);

  const { isLoading, getOrder, order } = useOrder();

  useEffect(() => {
    getOrder(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setOrderState(order);
  }, [order]);

  return (
    <UserLayout>
      <Box boxId="order-details-wrap" heading="Order Details">
        {isLoading && <Loading />}
        {!isLoading && orderState && (
          <div className="mb-3 pb-3">
            <h1 className="order-id">
              <strong>Order ID:</strong> {orderState._id}
            </h1>
            <p className="info">
              <strong>Total Price:</strong> {orderState.totalPrice}
            </p>
            <p className="info">
              <strong>Status:</strong> {orderState.status}
            </p>
          </div>
        )}
        {!isLoading && orderState && <OrderItems orderItems={orderState.orderItems} />}
      </Box>
    </UserLayout>
  );
}

export default Order;
