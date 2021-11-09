/* eslint-disable no-use-before-define */
import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import setHeader from '../../utils/setHeader';
import reducer from './AuthReducer';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const initialState = {
    user: null,
    users: [],
    userById: null,
    token: localStorage.getItem('token'),
    message: null,
    isLoading: true,
    isAuthenticated: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Register a user
  const userSignup = async (user) => {
    try {
      const res = await axios.post('/api/v1/user/signup', user, {
        headers: {
          'content-type': 'application/json',
        },
      });

      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      createError(err?.response?.data?.message);
    }
  };

  // Login a user
  const loginUser = async (user) => {
    try {
      const res = await axios.post('/api/v1/user', user, {
        headers: { 'content-type': 'application/json' },
      });

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      createError(err?.response?.data?.message);
    }
  };

  // Get a user
  const getUser = async (id) => {
    setHeader(localStorage.token);
    try {
      const res = await axios(`/api/v1/user/${id}`, {
        headers: { 'content-type': 'application/json' },
      });

      dispatch({
        type: 'GETUSER_SUCCESS',
        payload: res.data,
      });
    } catch (err) {
      createError(err?.response?.data?.message);
    }
  };

  // Delete a user
  const deleteUser = async (id) => {
    setHeader(localStorage.token);
    try {
      const res = await axios.delete(`/api/v1/user/${id}`, {
        headers: { 'content-type': 'application/json' },
      });
      dispatch({
        type: 'DELETE_USER',
        payload: res.data,
      });
      getAllUser();
      setTimeout(clearMsg(), 1000);
    } catch (err) {
      createError(err?.response?.data?.message);
    }
  };

  // Get a user
  const getAllUser = async () => {
    setHeader(localStorage.token);
    try {
      const res = await axios(`/api/v1/user/all`, {
        headers: { 'content-type': 'application/json' },
      });

      dispatch({
        type: 'GETALLUSER_SUCCESS',
        payload: res.data,
      });
    } catch (err) {
      createError(err?.response?.data?.message);
    }
  };

  // Load user
  const loadUser = async () => {
    setHeader(localStorage.token);
    try {
      const res = await axios('/api/v1/user', { headers: { 'Content-Type': 'application/json' } });

      dispatch({
        type: 'LOAD_USER',
        payload: res.data,
      });
    } catch (err) {
      createError(err?.response?.data?.message);
    }
  };

  // Update User Profile
  const updateUser = async (formDate) => {
    try {
      const res = await axios.put(`/api/v1/user`, formDate, {
        headers: { 'content-type': 'application/json' },
      });
      dispatch({
        type: 'UPDATE_USER_PROFILE',
        payload: res.data,
      });
      setTimeout(clearMsg(), 1000);
    } catch (err) {
      createError(err?.response?.data?.message);
    }
  };

  // Update User avatar
  const updateAvatar = async (formDate) => {
    try {
      const res = await axios.put(`/api/v1/user/change-avatar`, formDate, {
        headers: { 'content-type': 'multipart/form-data' },
      });
      dispatch({
        type: 'UPDATE_USER_AVATAR',
        payload: res.data,
      });
      setTimeout(clearMsg(), 1000);
    } catch (err) {
      createError(err?.response?.data?.message);
    }
  };

  // User logout
  const userLogout = async () => {
    try {
      localStorage.removeItem('token');
      loadUser();
    } catch (err) {
      createError(err?.response?.data?.message);
    }
  };

  // create Error
  const createError = async (err) => {
    dispatch({
      type: 'CREATE_ERR',
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
    <AuthContext.Provider
      value={{
        ...state,
        userSignup,
        loginUser,
        loadUser,
        userLogout,
        getUser,
        updateUser,
        updateAvatar,
        getAllUser,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
