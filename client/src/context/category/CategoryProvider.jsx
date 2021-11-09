/* eslint-disable no-use-before-define */
import axios from 'axios';
import { createContext, useContext, useReducer } from 'react';
import Reducer from './CategoryReducer';

const categoryContext = createContext();

export const useCategory = () => useContext(categoryContext);

export const CategoryProvider = ({ children }) => {
  const initialState = {
    categories: [],
    category: {},
    message: null,
    isLoading: true,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Get all categories
  const getCategories = async () => {
    try {
      const res = await axios(`/api/v1/category`, {
        headers: { 'content-type': 'application/json' },
      });
      dispatch({
        type: 'GET_CATEGORIES',
        payload: res.data,
      });
    } catch (err) {
      setError(err?.response?.data?.message);
    }
  };

  // Create category
  const createCategory = async (data) => {
    try {
      const res = await axios.post(`/api/v1/category`, data, {
        headers: { 'content-type': 'application/json' },
      });
      dispatch({
        type: 'CREATE_CAT',
        payload: res.data,
      });
      getCategories();
      setTimeout(clearMsg(), 1000);
    } catch (err) {
      setError(err?.response?.data?.message);
    }
  };

  // Update a category
  const getCategory = async (id) => {
    try {
      const res = await axios(`/api/v1/category/${id}`, {
        headers: { 'content-type': 'application/json' },
      });
      dispatch({
        type: 'GET_CATEGORY',
        payload: res.data,
      });
    } catch (err) {
      setError(err?.response?.data?.message);
    }
  };

  // Update a category
  const updateCategory = async (id, formData) => {
    try {
      const res = await axios.put(`/api/v1/category/${id}`, formData, {
        headers: { 'content-type': 'application/json' },
      });
      dispatch({
        type: 'UPDATE_CAT',
        payload: res.data,
      });
      getCategories();
      setTimeout(clearMsg(), 1000);
    } catch (err) {
      setError(err?.response?.data?.message);
    }
  };

  // Delete a category
  const deleteCategory = async (id) => {
    try {
      const res = await axios.delete(`/api/v1/category/${id}`, {
        headers: { 'content-type': 'application/json' },
      });
      dispatch({
        type: 'DELETE_CAT',
        payload: res.data,
      });
      getCategories();
      setTimeout(clearMsg(), 1000);
    } catch (err) {
      setError(err?.response?.data?.message);
    }
  };

  const setError = (err) => {
    dispatch({
      type: 'SET_ERROR',
      payload: err,
    });
    setTimeout(clearMsg(), 1000);
  };

  const clearMsg = () => {
    dispatch({
      type: 'CLEAR_MSG',
    });
  };

  return (
    <categoryContext.Provider
      value={{
        ...state,
        getCategories,
        createCategory,
        updateCategory,
        getCategory,
        deleteCategory,
      }}
    >
      {children}
    </categoryContext.Provider>
  );
};
