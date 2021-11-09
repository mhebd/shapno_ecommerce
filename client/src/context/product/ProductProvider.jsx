/* eslint-disable no-use-before-define */
import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import ProductReducer from './ProductReducer';

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const initialState = {
    product: null,
    newProducts: [],
    featuredProducts: [],
    categoryProducts: [],
    searchedProducts: [],
    message: null,
    isLoading: true,
    totalCatProd: null,
    totalSearchProd: null,
    products: [],
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  // Create new Porduct
  const createProduct = async (data) => {
    try {
      const res = await axios.post('/api/v1/product', data, {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch({
        type: 'CREATE_PROD',
        payload: res.data,
      });
      getAllProducts();
      setTimeout(clearMsg(), 1000);
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Update a Porduct
  const updateProduct = async (id, data) => {
    try {
      const res = await axios.put(`/api/v1/product/${id}`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch({
        type: 'UPDATE_PROD',
        payload: res.data,
      });
      getAllProducts();
      setTimeout(clearMsg(), 1000);
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Add Review a Porduct
  const addReview = async (id, data) => {
    try {
      const res = await axios.put(`/api/v1/product/add-review/${id}`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch({
        type: 'ADD_REVIEW',
        payload: res.data,
      });
      setTimeout(clearMsg(), 1000);
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Delete a Porduct
  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(`/api/v1/product/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      });
      dispatch({
        type: 'DELETE_PROD',
        payload: res.data,
      });
      getAllProducts();
      setTimeout(clearMsg(), 1000);
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Get All Porducts
  const getAllProducts = async () => {
    try {
      const res = await axios('/api/v1/product', {
        headers: { 'Content-Type': 'application' },
      });
      dispatch({
        type: 'ALL_PRODUCT',
        payload: res.data,
      });
    } catch (err) {
      setErrMsg(err.response?.data.message);
    }
  };

  // Get New Porducts
  const getNewProducts = async () => {
    try {
      const res = await axios('/api/v1/product/new', {
        headers: { 'Content-Type': 'application' },
      });
      dispatch({
        type: 'NEW_PRODUCT',
        payload: res.data,
      });
    } catch (err) {
      setErrMsg(err.response?.data.message);
    }
  };

  // Get Featured Porducts
  const getFeaturedProducts = async () => {
    try {
      const res = await axios('/api/v1/product/featured', {
        headers: { 'Content-Type': 'application' },
      });
      dispatch({
        type: 'FEATURED_PRODUCT',
        payload: res.data,
      });
    } catch (err) {
      setErrMsg(err.response?.data.message);
    }
  };

  // Get Category Porducts
  const getCategoryProducts = async (id, limit, page) => {
    try {
      const res = await axios(`/api/v1/product/category/${id}?limit=${limit}&page=${page}`, {
        headers: { 'Content-Type': 'application' },
      });
      dispatch({
        type: 'CATEGORY_PRODUCT',
        payload: res.data,
      });
    } catch (err) {
      setErrMsg(err.response?.data.message);
    }
  };

  // Get Category Porducts
  const getSearchedProducts = async (query, limit = 2, page) => {
    try {
      const res = await axios(`/api/v1/product/search/${query}?limit=${limit}&page=${page}`, {
        headers: { 'Content-Type': 'application' },
      });
      dispatch({
        type: 'SEARCHED_PRODUCT',
        payload: res.data,
      });
    } catch (err) {
      setErrMsg(err.response?.data.message);
    }
  };

  // Get Single Porducts
  const getSingleProduct = async (id) => {
    try {
      const res = await axios(`/api/v1/product/${id}`, {
        headers: { 'Content-Type': 'application' },
      });
      dispatch({
        type: 'SINGLE_PRODUCT',
        payload: res.data,
      });
    } catch (err) {
      setErrMsg(err.response?.data.message);
    }
  };

  const setErrMsg = (err) => {
    dispatch({
      type: 'SET_ERR',
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
    <ProductContext.Provider
      value={{
        ...state,
        getAllProducts,
        getNewProducts,
        getFeaturedProducts,
        getSingleProduct,
        getCategoryProducts,
        getSearchedProducts,
        createProduct,
        updateProduct,
        deleteProduct,
        addReview,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
