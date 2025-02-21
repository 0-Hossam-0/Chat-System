import React, { createContext, useContext } from 'react';
import { HomeContextProps } from './Types/Interfaces';
import { States } from './Components/Hooks/States';
import { HTMLElements } from './Components/Hooks/HTMLElements';

const HomeContext = createContext<HomeContextProps | null>(null);

export const HomeContextProvider = ({ children }) => {
  const { showAddLoadingState, showAddLayout, setAddLoadingState, setShowAddLayout, setCurrentChat, currentChat, setSearchChats, searchChats } = States();
  const { HomeInputs, HomeMessages } = HTMLElements();
  return <HomeContext.Provider value={{ HomeInputs, HomeMessages, showAddLayout, setAddLoadingState, setShowAddLayout, showAddLoadingState, setCurrentChat, currentChat, setSearchChats, searchChats }}>{children}</HomeContext.Provider>;
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error('useHomeContext must be used within an HomeProvider');
  }

  return context;
};
