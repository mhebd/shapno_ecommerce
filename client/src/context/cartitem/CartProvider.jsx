/* eslint-disable no-use-before-define */
import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import CartReducer from './CartReducer';

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

export const CartProvider = ({ children }) => {
  const initialState = {
    cartitems: [],
    message: null,
    total: 0,
    isLoading: true,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  // Get cart items
  const getCartItems = async () => {
    try {
      const res = await axios('/api/v1/cartitem', {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch({
        type: 'GET_ITEMS',
        payload: res.data,
      });
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Create cart items
  const createCartItem = async (data) => {
    try {
      const res = await axios.post('/api/v1/cartitem', data, {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch({
        type: 'ADD_TO_CART_SUCCESS',
        payload: {
          message: res.data.message,
          status: 'success',
        },
      });
      setTimeout(clearMsg, 1000);
      getCartItems();
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Remove cart item
  const removeCartItem = async (id) => {
    try {
      const res = await axios.delete(`/api/v1/cartitem/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch({
        type: 'REMOVE_CART_ITEM',
        payload: {
          message: res.data.message,
          status: 'warning',
        },
      });
      setTimeout(clearMsg, 1000);
      getCartItems();
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Update cart item
  const updateCartItem = async (id, data) => {
    try {
      await axios.put(`/api/v1/cartitem/${id}`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      getCartItems();
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  const setErrMsg = (err) => {
    dispatch({
      type: 'ERROR',
      payload: {
        message: err,
        status: 'error',
      },
    });
    setTimeout(clearMsg(), 1000);
  };

  const clearMsg = () => {
    dispatch({
      type: 'CLEAR_MSG',
    });
  };

  return (
    <cartContext.Provider
      value={{
        ...state,
        getCartItems,
        createCartItem,
        removeCartItem,
        updateCartItem,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
