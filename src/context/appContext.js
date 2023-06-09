import React, { createContext, useState, useReducer } from 'react';
import appReducer from '../reducers/appReducer';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
      appReducer,
      {
        userId: null,
        email: '',
        name: '',
        recommendationReqId: null,
        recommendationReq: {
          nameOfBusiness: '',
          businessOffering: '',
          marketingGoal: '',
          currentMarketingActivities: '',
          typicalCustomer: '',
          budgetTotal: ''
        },
        recommendation: ''
      }
    );

    const updateUserState = (payload) => {
      dispatch({
        type: 'update_user',
        payload
      });
    }

    const updateRecommendationState = (payload) => {
      dispatch({
        type: 'update_recommendation',
        payload
      });
    }
  
    const handleNav = () => {
      console.log('hello from provider')
    };
  
    return (
      <AppContext.Provider value={{ state, dispatch, handleNav, updateRecommendationState, updateUserState}}>
        {children}
      </AppContext.Provider>
    );
  };