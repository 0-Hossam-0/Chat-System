import React, { createContext, useContext, useEffect, useState } from 'react';
import { transformUserData } from './Functions/Functions';
import type { UserDataProps, UserContextProps } from './Types/Interfaces';
import { useRegisterAndLoginContext } from './RegisterAndLoginContext';
const AppContext = createContext<UserContextProps | null>(null);

export const ChatProvider = ({ children }) => {
  const [UserData, setUserData] = useState<UserDataProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { setShowOverlay } = useRegisterAndLoginContext();
  const [showChat, setShowChat] = useState<[boolean, number | null]>([false, null]);
  useEffect(() => {
    const fetchData = async () => {
      setShowOverlay(true);
      try {
        const response = await fetch('/api/contacts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log('API Data =>', data);

        const transformedData = transformUserData(data);
        setUserData(transformedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        setShowOverlay(false);
      }
    };

    fetchData();
  }, []);

  if (UserData) {
    return (
      <AppContext.Provider value={{ UserData, showChat, setShowChat }}>
        {loading ? <div className="bg-[#2c2c2c] h-screen"></div> : error ? <div className="bg-[#2c2c2c] h-screen text-red-500 flex justify-center items-center font-medium text-2xl">Error: Something Went Wrong</div> : children}
      </AppContext.Provider>
    );
  }
};

export const useUserContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useUserContext must be used within a ChatProvider');
  }

  return context;
};
