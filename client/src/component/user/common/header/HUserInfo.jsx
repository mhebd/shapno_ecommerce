import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../../context/cartitem/CartProvider';
import { useAuth } from '../../../../context/user/AuthProvider';
import Button from '../../reusable/Button';
import CartItemWrap from './CartItemWrap';

function HUserInfo() {
  // const [uInfo, setUInfo] = useState(null);
  // const [authenticated, setAuthenticated] = useState(false);
  const { isLoading, isAuthenticated, user, loadUser, userLogout } = useAuth();

  const [totalItem, setTotalItem] = useState(0);
  const [items, setItems] = useState([]);

  const { getCartItems, total, cartitems, removeCartItem } = useCart();

  useEffect(() => {
    if (isAuthenticated) getCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  useEffect(() => {
    setTotalItem(total);
  }, [total]);

  useEffect(() => {
    setItems(cartitems);
  }, [cartitems]);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   setAuthenticated(isAuthenticated);
  //   // setUInfo(user);
  // }, [isAuthenticated]);

  return (
    <div className="col-7 col-m3 col-l4 hu-info">
      {!isLoading && !isAuthenticated && (
        <Link to="/login" className="btn login-btn">
          Login
        </Link>
      )}
      {!isLoading && isAuthenticated && (
        <Link to="/profile/about" className="user-btn">
          {user?.avatar ? (
            <img src={`../uploads/user/${user?.avatar}`} alt="" />
          ) : (
            <img src={user?.gravatar} alt="" />
          )}
        </Link>
      )}
      <Button classes="cart-btn ml-2">
        <span className="tsc">{totalItem}</span>
        <i className="fas fa-shopping-cart" />
      </Button>
      {!isLoading && isAuthenticated && (
        <Button onClick={() => userLogout()} classes="logout-btn ml-1">
          <i className="fas fa-sign-out-alt" />
        </Button>
      )}

      {!isLoading && isAuthenticated && user?.type === 'user' && <Link to="/admin">Dashboard</Link>}

      <CartItemWrap items={items} removeCartItem={removeCartItem} />
    </div>
  );
}

export default HUserInfo;
