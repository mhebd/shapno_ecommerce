/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useCart } from '../../../../context/cartitem/CartProvider';
import UserLayout from '../../common/UserLayout';
import Box from '../../reusable/Box';
import Loading from '../../reusable/Loading';
import CartItemsList from './CartItemsList';
import CheckOutDetails from './CheckOutDetails';

function CheckOut(props) {
  // eslint-disable-next-line no-unused-vars
  const { isLoading, getCartItems, cartitems, removeCartItem, updateCartItem } = useCart();

  const [items, setItems] = useState([]);

  useEffect(() => {
    getCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setItems(cartitems);
  }, [cartitems]);

  useEffect(() => {
    if (!isLoading && cartitems.length === 0) {
      props.history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartitems]);
  return (
    <UserLayout>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="checkout-wrap">
          <Box boxId="checkout" heading="CheckOut Now">
            <div className="grid-row">
              <div className="col-m7 mb-3">
                <CartItemsList
                  removeCartItem={removeCartItem}
                  updateCartItem={updateCartItem}
                  items={items}
                />
              </div>
              <div className="col-m5 mb-3">
                <CheckOutDetails items={items} {...props} />
              </div>
            </div>
          </Box>
        </div>
      )}
    </UserLayout>
  );
}

export default CheckOut;
