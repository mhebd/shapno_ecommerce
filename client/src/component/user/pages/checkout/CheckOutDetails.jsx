/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useOrder } from '../../../../context/order/OrderProvider';
import CheckOutProdInfo from './CheckOutProdInfo';
import CheckOutUserInfo from './CheckOutUserInfo';

function CheckOutDetails({ items, history }) {
  const shippingCharge = 60;
  const { createOrder, order, isLoading } = useOrder();

  useEffect(() => {
    if (!isLoading && order?._id) {
      setTimeout(history.push(`/order/${order._id}`), 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, isLoading]);

  const orderHdl = () => {
    createOrder({ shippingCharge });
  };

  return (
    <>
      <CheckOutUserInfo />
      <CheckOutProdInfo items={items} shippingCharge={shippingCharge} />

      <button onClick={() => orderHdl()} className="btn order-btn" type="button">
        Proceed To Order
      </button>
    </>
  );
}

export default CheckOutDetails;
