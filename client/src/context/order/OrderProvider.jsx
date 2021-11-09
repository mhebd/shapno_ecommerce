/* eslint-disable no-use-before-define */
// import axios from 'axios';
import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import OrderReducer from './OrderReducer';

const orderContext = createContext();

export const useOrder = () => useContext(orderContext);

export const OrderProvider = ({ children }) => {
  const initialState = {
    order: null,
    orders: [],
    userOrders: [],
    isLoading: true,
    message: null,
  };

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(OrderReducer, initialState);

  const clearOrderState = () => {
    dispatch({
      type: 'CLEAR_STATE',
    });
  };

  // Create a order
  const createOrder = async (data) => {
    try {
      const res = await axios.post(`/api/v1/order`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch({
        type: 'CREATE_ORDER',
        payload: res.data,
      });
      setTimeout(clearMsg(), 1000);
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Get all orders
  const getOrders = async () => {
    try {
      const res = await axios(`/api/v1/order`, {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch({
        type: 'GET_ORDERS',
        payload: res.data,
      });
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Get a order
  const getOrder = async (id) => {
    try {
      const res = await axios(`/api/v1/order/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch({
        type: 'GET_ORDER',
        payload: res.data,
      });
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Create a order
  const getUserOrders = async () => {
    try {
      const res = await axios(`/api/v1/order/user`, {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch({
        type: 'GET_USER_ORDERS',
        payload: res.data,
      });
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Create a order
  const updateOrder = async (id, data) => {
    try {
      const res = await axios.put(`/api/v1/order/${id}`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch({
        type: 'UPDATE_ORDER',
        payload: res.data,
      });
      getOrders();
      setTimeout(clearMsg(), 1000);
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Create a order
  const deleteOrder = async (id) => {
    try {
      const res = await axios.delete(`/api/v1/order/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch({
        type: 'DELETE_ORDER',
        payload: res.data,
      });
      getOrders();
      setTimeout(clearMsg(), 1000);
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  const setErrMsg = (err) => {
    dispatch({
      type: 'SET_ERR_MSG',
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
    <orderContext.Provider
      value={{
        ...state,
        createOrder,
        getUserOrders,
        deleteOrder,
        getOrders,
        getOrder,
        updateOrder,
        clearOrderState,
      }}
    >
      {children}
    </orderContext.Provider>
  );
};
