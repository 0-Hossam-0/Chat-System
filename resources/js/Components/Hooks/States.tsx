import { useState } from 'react';
import type { InputsLevelProps, GetLoadingStateProps, NotificationProps, SetLoadingStateProps, UserChatsProps } from '../../Types/Interfaces';

export const States = () => {
  const [showUsernameLoading, setUsernameLoading] = useState<boolean>(false);
  const [showEmailLoading, setEmailLoading] = useState<boolean>(false);
  const [showLoginLoading, setLoginLoading] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<NotificationProps>({ message: '', type: 'Error', show: false });
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [showAddLoadingState, setAddLoadingState] = useState<boolean>(false);
  const [showAddLayout, setShowAddLayout] = useState<boolean>(false);
  const [verifyEmailLoading, setVerifyEmailLoading] = useState<boolean>(false);
  const [isResendButtonOn, setIsResendButtonOn] = useState<boolean>(true);
  const getLoadingState: GetLoadingStateProps = {
    showUsernameLoading,
    showEmailLoading,
    showLoginLoading,
    verifyEmailLoading,
  };

  const setLoadingState: SetLoadingStateProps = {
    setUsernameLoading,
    setEmailLoading,
    setLoginLoading,
    setVerifyEmailLoading,
  };
  const [capVal, setCapVal] = useState<string>('');

  const [inputsLevel, setInputsLevel] = useState<InputsLevelProps>({
    from: 1,
    to: 1,
  });
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [currentChat, setCurrentChat] = useState<UserChatsProps | null>(null);
  const [searchChats, setSearchChats] = useState<UserChatsProps[] | null>(null);
  return {
    getLoadingState,
    setLoadingState,
    inputsLevel,
    setInputsLevel,
    isLogin,
    setIsLogin,
    capVal,
    setCapVal,
    showNotification,
    setShowNotification,
    showOverlay,
    setShowOverlay,
    showAddLoadingState,
    setAddLoadingState,
    showAddLayout,
    setShowAddLayout,
    isResendButtonOn,
    setIsResendButtonOn,
    currentChat,
    setCurrentChat,
    searchChats,
    setSearchChats,
  };
};
