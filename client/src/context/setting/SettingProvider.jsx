/* eslint-disable no-use-before-define */
import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import SettingReducer from './SettingReducer';

const settingContext = createContext();

export const useSetting = () => useContext(settingContext);

export const SettingPorvider = ({ children }) => {
  const initialState = {
    setting: null,
    isLoading: true,
  };

  const [state, dispatch] = useReducer(SettingReducer, initialState);

  // Update Setting
  const updateSetting = async (data) => {
    try {
      const res = await axios.post('/api/v1/setting', data, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(res.data);
      getSetting();
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  // Get Setting
  const getSetting = async () => {
    try {
      const res = await axios('/api/v1/setting', {
        headers: { 'Content-Type': 'Application/json' },
      });
      dispatch({
        type: 'GET_SETTING',
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  return (
    <settingContext.Provider
      value={{
        ...state,
        getSetting,
        updateSetting,
      }}
    >
      {children}
    </settingContext.Provider>
  );
};
