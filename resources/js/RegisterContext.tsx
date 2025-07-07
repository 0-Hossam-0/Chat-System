import React, { createContext, useContext, useState } from 'react';
import { HTMLElements } from './Components/Hooks/HTMLElements';
import type { RegisterContextProps } from './Types/Interfaces';
import { States } from './Components/Hooks/States';

const RegisterContext = createContext<RegisterContextProps | null>(null);
export const RegisterProvider = ({ children }) => {
  const { RegisterButtons, RegisterMessages, RegisterInputs, Panels } = HTMLElements();
  const registerPanel = Panels.registerPanel;
  const { setInputsLevel, capVal, setCapVal, inputsLevel, isResendButtonOn, setIsResendButtonOn } = States();
  return <RegisterContext.Provider value={{ capVal, RegisterInputs, RegisterMessages, setInputsLevel, RegisterButtons, registerPanel, setCapVal, inputsLevel, isResendButtonOn, setIsResendButtonOn }}>{children}</RegisterContext.Provider>;
};

export const useRegisterContext = () => {
  const context = useContext(RegisterContext);

  if (!context) {
    throw new Error('useRegisterContext must be used within an AppProvider');
  }

  return context;
};
