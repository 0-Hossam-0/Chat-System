import React, { createContext, useContext, useState } from 'react';
import type { RegisterAndLoginContextProps } from './Types/Interfaces';
import { States } from './Components/Hooks/States';
import { HTMLElements } from './Components/Hooks/HTMLElements';

const RegisterAndLoginContext = createContext<RegisterAndLoginContextProps | null>(null);

export const RegisterAndLoginProvider = ({ children }) => {
  const { LoginInputs, Panels, registerLevel } = HTMLElements();
  const { setIsLogin, getLoadingState, setLoadingState, setShowOverlay, isLogin } = States();
  return <RegisterAndLoginContext.Provider value={{ setIsLogin, getLoadingState, setLoadingState, setShowOverlay, LoginInputs, isLogin, Panels, registerLevel }}>{children}</RegisterAndLoginContext.Provider>;
};

export const useRegisterAndLoginContext = () => {
  const context = useContext(RegisterAndLoginContext);

  if (!context) {
    throw new Error('useRegisterAndLoginContext must be used within an AppProvider');
  }

  return context;
};
