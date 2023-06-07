import React from 'react';
import { AppProvider } from '../context/appContext';

const RootElement = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default RootElement;