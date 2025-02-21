import React, { createContext, useContext, useState } from 'react';
import { LoginContextProps } from './Types/Interfaces';
import { HTMLElements } from './Components/Hooks/HTMLElements';

const LoginContext = createContext<LoginContextProps | null>(null);

export const LoginContextProvider = ({ children }) => {
  const { Panels, LoginMessages } = HTMLElements();
  const loginPanel = Panels.loginPanel;
  return <LoginContext.Provider value={{ loginPanel, LoginMessages }}>{children}</LoginContext.Provider>;
};

export const useLoginContext = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error('useLoginContext must be used within an AppProvider');
  }

  return context;
};
