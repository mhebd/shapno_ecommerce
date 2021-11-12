/* eslint-disable no-use-before-define */
import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import PageReducer from './PageReducer';

const pageContext = createContext();

export const usePage = () => useContext(pageContext);

export const PageProvider = ({ children }) => {
  const initialState = {
    page: null,
    pages: [],
    isLoading: true,
    message: null,
  };

  const [state, dispatch] = useReducer(PageReducer, initialState);

  // Create page
  const createPage = async (data) => {
    try {
      const res = await axios.post(`/api/v1/page`, data, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: 'CREATE_PAGE',
        payload: res.data,
      });
      setTimeout(clearMsg, 1000);
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Update page
  const updatePage = async (slug, data) => {
    try {
      const res = await axios.put(`/api/v1/page/${slug}`, data, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: 'UPDATED_PAGE',
        payload: res.data,
      });
      setTimeout(clearMsg, 1000);
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Delete page
  const deletePage = async (slug) => {
    try {
      const res = await axios.delete(`/api/v1/page/${slug}`, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: 'DELETE_PAGE',
        payload: res.data,
      });
      getPages();
      setTimeout(clearMsg, 1000);
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Get page
  const getPage = async (slug) => {
    try {
      const res = await axios(`/api/v1/page/${slug}`, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: 'GET_PAGE',
        payload: res.data,
      });
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Get page
  const getPages = async () => {
    try {
      const res = await axios(`/api/v1/page`, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: 'GET_PAGES',
        payload: res.data,
      });
    } catch (err) {
      setErrMsg(err.response.data.message);
    }
  };

  // Set err message
  const setErrMsg = (err) => {
    dispatch({
      type: 'SET_ERRMSG',
      payload: {
        message: err,
        status: 'error',
      },
    });
    setTimeout(clearMsg, 1000);
  };

  // Clear message
  const clearMsg = () => {
    dispatch({
      type: 'CLEAR_MSG',
    });
  };

  return (
    <pageContext.Provider
      value={{
        ...state,
        createPage,
        getPage,
        getPages,
        updatePage,
        deletePage,
      }}
    >
      {children}
    </pageContext.Provider>
  );
};
