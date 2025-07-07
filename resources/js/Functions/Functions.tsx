import type { AddChatUserProps, HandleInputsLevelProps, HandleOpeningErrorProps, ResetRegisterPanelProps, SearchChatsProps, SelectCurrentChatProps, SendCodeProps, SendsMessageProps } from '../Types/Interfaces';
import type { UserDataProps, UserChatsProps, MessageProps, MessageUsersProps, SwitchPanelsProps } from '../Types/Interfaces';
import { setNotification } from '../Redux/NotificationSlice';
import { firstValidation, secondValidation } from './Validation';
import { removeLoadingState, showLoadingState } from '../Redux/LoadingSlice';
import { fetchUserMessages } from '../Redux/MessagesSlice';
import { createChat } from '../Redux/UserDataSlice';

export const resetRegisterPanel = ({ RegisterInputs, setInputsLevel }: ResetRegisterPanelProps) => {
  for (const key in RegisterInputs) {
    const element = RegisterInputs[key]?.current;

    if (element && 'value' in element) {
      element.value = '';
      element.style.borderColor = 'black';
    }
  }
  setInputsLevel({
    to: 2,
    from: 3,
  });
  setTimeout(() => {
    setInputsLevel({
      to: 1,
      from: 2,
    });
  }, 0);
};
export const sendCode = async ({ RegisterInputs, RegisterMessages, setLoadingState, setIsResendButtonOn }: SendCodeProps) => {
  RegisterMessages.verificationMessage.current!.innerHTML = '';
  RegisterMessages.emailSent.current!.innerHTML = '';
  setLoadingState.setVerifyEmailLoading(true);
  const response = await fetch('/api/send-verification', {
    method: 'POST',
    body: JSON.stringify({
      email: RegisterInputs.email.current?.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  setLoadingState.setVerifyEmailLoading(false);
  if (response.status === 200) {
    const userEmail = RegisterInputs.email.current!.value;
    RegisterMessages.verificationMessage.current!.style.color = 'rgb(34 197 94)';
    RegisterMessages.verificationMessage.current!.innerHTML = 'Verify Code Sent To';
    RegisterMessages.emailSent.current!.innerHTML = userEmail;
    setIsResendButtonOn(false);
  } else if (response.status === 429) {
    RegisterMessages.verificationMessage.current!.style.color = 'rgb(245, 64, 64)';
    RegisterMessages.verificationMessage.current!.innerHTML = 'Too Many Requests';
    RegisterMessages.emailSent.current!.innerHTML = '';
  }
};

export const sendMessage= async ({ event, HomeInputs, currentChat } : SendsMessageProps) => {
  event.preventDefault();

  await fetch('/api/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: HomeInputs.chatInput.current?.value,
      chat_name: currentChat?.name
    }),
  });
};

export const addChatUser = async ({ HomeMessages, HomeInputs, router, setAddLoadingState, UserData, dispatch, setCurrentChat, currentChat, setShowAddLayout }: AddChatUserProps) => {
  const newUser = HomeInputs.username.current?.value as string;
  HomeMessages.addUser.current!.innerHTML = '';
  if (UserData?.username === newUser) {
    HomeMessages.addUser.current!.innerHTML = "You Can't Add Yourself";
    HomeMessages.addUser.current!.style.color = 'red';
    return;
  }
  if (
    UserData?.chats.find((chat) => {
      return chat.name === newUser;
    })
  ) {
    HomeMessages.addUser.current!.innerHTML = 'User Is Already Added';
    HomeMessages.addUser.current!.style.color = 'red';
    return;
  }
  setAddLoadingState(true);
  const response = await fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      username: newUser,
    }),
  });
  setAddLoadingState(false);
  if (response.status === 200) {
    const data = await response.json();

    HomeMessages.addUser.current!.innerHTML = 'User Is Found';
    HomeMessages.addUser.current!.style.color = 'green';
    setTimeout(() => {
      setShowAddLayout(false);
    }, 500);
    dispatch(createChat({ name: newUser, id: data.id }));
    return;
  } else if (response.status === 401) {
    window.sessionStorage.setItem;
    router.visit('/register?error=', {
      method: 'get',
    });
  } else {
    HomeMessages.addUser.current!.innerHTML = 'User Is Not Found';
    HomeMessages.addUser.current!.style.color = 'red';
  }
};

export const switchPanels = ({ Panels, isLogin }: SwitchPanelsProps) => {
  if (isLogin && Panels.loginPanel.current && Panels.registerPanel.current) {
    Panels.registerPanel.current.style.visibility = 'hidden';
    Panels.loginPanel.current.style.visibility = 'visible';
    Panels.registerPanel.current.style.translate = '140vh';
    Panels.loginPanel.current.style.translate = '0';
    Panels.loginPanel.current.style.translate = '0';
  } else if (!isLogin && Panels.loginPanel.current && Panels.registerPanel.current) {
    Panels.registerPanel.current.style.visibility = 'visible';
    Panels.loginPanel.current.style.visibility = 'hidden';
    Panels.loginPanel.current.style.translate = '-140vh';
    Panels.registerPanel.current.classList.remove('translate-x-[140vh]');
    Panels.registerPanel.current.style.translate = '0';
  }
};

export const handleOpeningError = ({ queryParams, dispatch }: HandleOpeningErrorProps) => {
  if (queryParams.get('error') === '') {
    dispatch(
      setNotification({
        show: true,
        type: 'Error',
        message: 'Something Went Wrong',
      })
    );
  }
};

export const handleInputLevel = ({ inputsLevel, registerLevel, RegisterInputs, RegisterMessages, setLoadingState, setIsResendButtonOn }: HandleInputsLevelProps) => {
  if (!(inputsLevel.from === 1 && inputsLevel.to === 1) && !(inputsLevel.from === 2 && inputsLevel.to === 1)) {
    if (inputsLevel.from === 1) {
      if (inputsLevel.to === 2) {
        registerLevel.firstInputs.current!.style.translate = '560px';
        registerLevel.secondInputs.current!.style.translate = '550px';
        registerLevel.firstInputs.current!.classList.remove('invisible');
        registerLevel.secondInputs.current!.classList.add('invisible');
      }
    } else if (inputsLevel.from === 2) {
      if (inputsLevel.to === 3) {
        registerLevel.thirdInputs.current!.style.translate = '-430px';
        registerLevel.firstInputs.current!.style.translate = '0px';
        registerLevel.secondInputs.current!.classList.add('invisible');
        registerLevel.thirdInputs.current!.classList.remove('invisible');
        sendCode({ RegisterInputs, RegisterMessages, setLoadingState, setIsResendButtonOn });
      }
    } else if (inputsLevel.from === 3) {
      if (inputsLevel.to === 2) {
        registerLevel.thirdInputs.current!.style.translate = '0';
        registerLevel.firstInputs.current!.style.translate = '560px';
        registerLevel.secondInputs.current!.classList.remove('invisible');
        registerLevel.thirdInputs.current!.classList.add('invisible');
      }
    }
  } else {
    registerLevel.firstInputs.current!.style.translate = '0';
    registerLevel.secondInputs.current!.style.translate = '0';
    registerLevel.firstInputs.current!.classList.add('invisible');
    registerLevel.secondInputs.current!.classList.remove('invisible');
  }
};

export const createAccount = async ({ RegisterInputs, dispatch, setIsLogin, setInputsLevel, LoginInputs, RegisterMessages }) => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
  if (!csrfToken) {
    return;
  }
  dispatch(showLoadingState());
  const response = await fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': csrfToken,
    },
    body: JSON.stringify({
      firstName: RegisterInputs.firstName.current?.value,
      secondName: RegisterInputs.secondName.current?.value,
      username: RegisterInputs.username.current?.value,
      email: RegisterInputs.email.current?.value,
      gender: RegisterInputs.gender.current?.value,
      phone: RegisterInputs.phone.current?.value,
      password: RegisterInputs.password.current?.value,
      repeated_password: RegisterInputs.rPassword.current?.value,
      code: RegisterInputs.code.current?.value,
    }),
  });

  dispatch(removeLoadingState());
  if (response.status === 201) {
    dispatch(
      setNotification({
        type: 'Success',
        message: 'Account Created Successfully',
        show: true,
      })
    );
    const userEmail = RegisterInputs.email.current!.value;
    setIsLogin(true);
    resetRegisterPanel({
      RegisterInputs,
      setInputsLevel,
    });
    LoginInputs.emailLogin.current!.value = userEmail;
  } else if (response.status === 404) {
    RegisterMessages.verificationMessage.current!.style.color = 'rgb(239 68 68)';
    RegisterMessages.verificationMessage.current!.innerHTML = 'Invalid Code';
    RegisterMessages.emailSent.current!.innerHTML = '';
  } else {
    dispatch(
      setNotification({
        type: 'Error',
        message: 'Something went ,please try again',
        show: true,
      })
    );
  }
};

export const handleRecaptcha = ({ button }) => {
  if (button) {
    if (button.disabled === true) {
      button.classList.remove('button');
      button.classList.remove('register');
    } else {
      button.classList.add('button');
      button.classList.add('register');
    }
  }
};

export const handleNextButton = async ({ RegisterMessages, RegisterInputs, registerPanel, inputsLevel, getLoadingState, setLoadingState, setInputsLevel }) => {
  if (!firstValidation({ RegisterMessages, RegisterInputs, registerPanel }) && ((inputsLevel.from === 1 && inputsLevel.to === 1) || (inputsLevel.from === 2 && inputsLevel.to === 1))) {
    setInputsLevel({
      from: 1,
      to: 2,
    });
  } else if (
    inputsLevel.to === 2 &&
    !(await secondValidation({
      RegisterInputs,
      registerPanel,
      RegisterMessages,
      getLoadingState,
      setLoadingState,
    }))
  ) {
    setInputsLevel({
      from: 2,
      to: 3,
    });
  }
};

export const handleBackButton = ({ inputsLevel, setInputsLevel }) => {
  if (inputsLevel.to === 2) {
    setInputsLevel({
      from: 2,
      to: 1,
    });
  } else if (inputsLevel.to === 3) {
    setInputsLevel({
      from: 3,
      to: 2,
    });
  }
};
export const selectCurrentChat = ({ dispatch, chat, setCurrentChat, currentChat }: SelectCurrentChatProps) => {
  if ((currentChat && currentChat.id !== chat.id) || !currentChat) {
    document.getElementById(`${chat.id}`)?.classList.add('dark:bg-[#a8a8aa84]');
    document.getElementById(`${chat.id}`)?.classList.add('bg-[#a8a8aa84]');
    setCurrentChat({
      id: chat.id,
      name: chat.name,
    });
    dispatch(fetchUserMessages(chat.id));
    if (currentChat) {
      document.getElementById(`${currentChat.id}`)?.classList.remove('dark:bg-[#a8a8aa84]');
      document.getElementById(`${currentChat.id}`)?.classList.remove('bg-[#a8a8aa84]');
    }
  }
};

export const searchChat = ({ event, setSearchChats, userChats }: SearchChatsProps) => {
  const searchInput = event.currentTarget.value;
  if (searchInput) {
    const searchedChats = userChats.filter((chat) => {
      return chat.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    console.log(searchedChats.length);
    setSearchChats(searchedChats);
  } else {
    setSearchChats(null);
  }
};
