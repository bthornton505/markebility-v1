import React, { createContext, useState, useReducer } from 'react';
import appReducer from '../reducers/appReducer';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
      appReducer,
      {
        userId: null,
        userEmail: '',
        recommendationReqId: null
      }
    );
  
    const handleNav = () => {
      console.log('hello from provider')
    };
  
    return (
      <AppContext.Provider
        value={{
          state,
          dispatch,
          handleNav
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };