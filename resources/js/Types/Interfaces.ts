import type { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import type { HomeDispatch } from '../Redux/StoreApp';
import type { Router } from '@inertiajs/core';

export interface PanelsProps {
  registerPanel: React.RefObject<HTMLDivElement>;
  loginPanel: React.RefObject<HTMLDivElement>;
}
export interface FirstValidationProps {
  registerPanel: React.RefObject<HTMLDivElement>;
  RegisterInputs: RegisterInputsProps;
  RegisterMessages: RegisterMessagesProps;
}
export interface SecondValidationProps {
  registerPanel: React.RefObject<HTMLDivElement>;
  RegisterInputs: RegisterInputsProps;
  RegisterMessages: RegisterMessagesProps;
  getLoadingState: GetLoadingStateProps;
  setLoadingState: SetLoadingStateProps;
}

export interface InputsLevelProps {
  from: 1 | 2 | 3;
  to: 1 | 2 | 3;
}

export interface GetLoadingStateProps {
  showUsernameLoading: boolean;
  showEmailLoading: boolean;
  showLoginLoading: boolean;
  verifyEmailLoading: boolean;
}
export interface SetLoadingStateProps {
  setEmailLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUsernameLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setVerifyEmailLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SwitchPanelsProps {
  Panels: PanelsProps;
  isLogin: boolean;
}

export interface HandleOpeningErrorProps {
  queryParams: URLSearchParams;
  dispatch: Dispatch<UnknownAction>;
}

export interface HandleInputsLevelProps {
  registerLevel: RegisterLevelProps;
  inputsLevel: InputsLevelProps;
  RegisterMessages: RegisterMessagesProps;
  RegisterInputs: RegisterInputsProps;
  setLoadingState: SetLoadingStateProps;
  setIsResendButtonOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ChatPropsComponent {
  chat: UserChatsProps;
}
export interface RegisterButtonsProps {
  next: React.RefObject<HTMLButtonElement>;
  back: React.RefObject<HTMLButtonElement>;
  resend: React.RefObject<HTMLButtonElement>;
}

export interface RegisterContextProps {
  RegisterInputs: RegisterInputsProps;
  RegisterMessages: RegisterMessagesProps;
  capVal: string;
  RegisterButtons: RegisterButtonsProps;
  setInputsLevel: React.Dispatch<React.SetStateAction<InputsLevelProps>>;
  inputsLevel: InputsLevelProps;
  registerPanel: React.RefObject<HTMLDivElement>;
  setCapVal: React.Dispatch<React.SetStateAction<string>>;
  isResendButtonOn: boolean;
  setIsResendButtonOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserContextProps {
  UserData: UserDataProps;
  showChat: [boolean, number | null];
  setShowChat: React.Dispatch<React.SetStateAction<[boolean, number | null]>>;
}

export interface UserDataProps {
  id: string;
  username: string;
  firstName: string;
  secondName: string;
  email: string;
  chats: UserChatsProps[];
}

export interface UserChatsProps {
  id: string;
  name: string;
  lastMessage: string | null;
  createdAt: string | null;
}

export interface MessageProps {
  id: string;
  chatID: string | null;
  senderID: string | null;
  body: string;
  User: MessageUsersProps[];
  Chat: UserChatsProps;
}

export interface SendsMessageProps{
  event: React.MouseEvent<HTMLDivElement, MouseEvent>;
  currentChat: CurrentChatProps | null;
  HomeInputs: HomeInputsProps;
}

export interface MessageUsersProps {
  id: string;
  firstName: string;
  lastName: string;
  isSeen: boolean;
}

export interface RegisterAndLoginContextProps {
  LoginInputs: LoginInputsProps;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  getLoadingState: GetLoadingStateProps;
  setLoadingState: SetLoadingStateProps;
  isLogin: boolean;
  Panels: PanelsProps;
  registerLevel: RegisterLevelProps;
}

export interface CurrentChatProps {
  id: string;
  name: string;
}

export interface HomeContextProps {
  HomeInputs: HomeInputsProps;
  HomeMessages: HomeMessagesProps;
  showAddLayout: boolean;
  setShowAddLayout: React.Dispatch<React.SetStateAction<boolean>>;
  showAddLoadingState: boolean;
  setAddLoadingState: React.Dispatch<React.SetStateAction<boolean>>;
  currentChat: CurrentChatProps | null;
  setCurrentChat: React.Dispatch<React.SetStateAction<CurrentChatProps | null>>;
  searchChats: UserChatsProps[];
  setSearchChat: React.Dispatch<React.SetStateAction<UserChatsProps[] | null>>;
}

export interface LoginContextProps {
  loginPanel: React.RefObject<HTMLDivElement>;
  LoginMessages: LoginMessagesProps;
}

export interface NotificationProps {
  message: string;
  type: 'Error' | 'Success' | 'Alert';
  show: boolean;
}

export interface LoginComponentProps {
  LoginInputs: LoginInputsProps;
  LoginMessages: LoginMessagesProps;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  loginPanel: React.RefObject<HTMLDivElement>;
  getLoadingState: GetLoadingStateProps;
  setLoadingState: SetLoadingStateProps;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RegisterInputsProps {
  firstName: React.RefObject<HTMLInputElement>;
  secondName: React.RefObject<HTMLInputElement>;
  email: React.RefObject<HTMLInputElement>;
  username: React.RefObject<HTMLInputElement>;
  password: React.RefObject<HTMLInputElement>;
  rPassword: React.RefObject<HTMLInputElement>;
  phone: React.RefObject<HTMLInputElement>;
  gender: React.RefObject<HTMLSelectElement>;
  code: React.RefObject<HTMLInputElement>;
}

export interface LoginInputsProps {
  emailLogin: React.RefObject<HTMLInputElement>;
  passwordLogin: React.RefObject<HTMLInputElement>;
}
export interface LoginMessagesProps {
  login: React.RefObject<HTMLParagraphElement>;
  verificationMessage: React.RefObject<HTMLParagraphElement | null>;
}

export interface HomeInputsProps {
  username: React.RefObject<HTMLInputElement>;
  chatInput: React.RefObject<HTMLInputElement | null>;
}

export interface RegisterLevelProps {
  firstInputs: React.RefObject<HTMLDivElement>;
  secondInputs: React.RefObject<HTMLDivElement>;
  thirdInputs: React.RefObject<HTMLDivElement>;
}

export interface RegisterMessagesProps {
  firstName: React.MutableRefObject<HTMLParagraphElement | null>;
  secondName: React.MutableRefObject<HTMLParagraphElement | null>;
  phone: React.MutableRefObject<HTMLParagraphElement | null>;
  gender: React.MutableRefObject<HTMLParagraphElement | null>;
  username: React.MutableRefObject<HTMLParagraphElement | null>;
  email: React.MutableRefObject<HTMLParagraphElement | null>;
  password: React.MutableRefObject<HTMLParagraphElement | null>;
  rPassword: React.MutableRefObject<HTMLParagraphElement | null>;
  emailSent: React.MutableRefObject<HTMLSpanElement | null>;
  verificationMessage: React.RefObject<HTMLParagraphElement | null>;
}

export interface HomeMessagesProps {
  addUser: React.MutableRefObject<HTMLParagraphElement | null>;
}

export interface ResetRegisterPanelProps {
  RegisterInputs: RegisterInputsProps;
  setInputsLevel: React.Dispatch<React.SetStateAction<InputsLevelProps>>;
}


export interface AddChatUserProps {
  HomeMessages: HomeMessagesProps;
  HomeInputs: HomeInputsProps;
  router: Router;
  setAddLoadingState: React.Dispatch<React.SetStateAction<boolean>>;
  UserData: UserDataProps | null;
  dispatch: HomeDispatch;
  setCurrentChat: React.Dispatch<React.SetStateAction<CurrentChatProps | null>>;
  currentChat: CurrentChatProps | null;
  setShowAddLayout: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LoginValidationProps {
  LoginInputs: LoginInputsProps;
  LoginMessages: LoginMessagesProps;
  setLoadingState: SetLoadingStateProps;
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SendCodeProps {
  RegisterInputs: RegisterInputsProps;
  RegisterMessages: RegisterMessagesProps;
  setLoadingState: SetLoadingStateProps;
  setIsResendButtonOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SelectCurrentChatProps {
  dispatch: HomeDispatch;
  setCurrentChat: React.Dispatch<React.SetStateAction<CurrentChatProps | null>>;
  currentChat: CurrentChatProps | null;
  chat: UserChatsProps;
}

export interface MessageComponent {
  body: string | null;
  sendTime: string | null;
}

export interface GetLastMessageProps {
  messages: MessageProps[];
}

export interface SearchChatsProps {
  event: React.ChangeEvent<HTMLInputElement>;
  setSearchChats: React.Dispatch<React.SetStateAction<UserChatsProps[] | null>>;
  userChats: UserChatsProps[];
}
