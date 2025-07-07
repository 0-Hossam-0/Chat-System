import type { FirstValidationProps, LoginValidationProps, SecondValidationProps } from '../Types/Interfaces';
import { router } from '@inertiajs/react';
const firstInputsJson = {
  firstName: false,
  secondName: false,
  phone: false,
  gender: false,
};

const nameRegex = /^[A-Z][a-zA-Z]{1,}$/;

export const firstValidation = ({ registerPanel, RegisterInputs, RegisterMessages }: FirstValidationProps) => {
  if (RegisterInputs.firstName.current!.value === '') {
    RegisterMessages.firstName.current!.innerHTML = 'Empty First Name Field';
    RegisterInputs.firstName.current!.style.border = 'red 2px solid';
    firstInputsJson.firstName = false;
  } else if (!nameRegex.test(RegisterInputs.firstName.current!.value)) {
    RegisterMessages.firstName.current!.innerHTML = 'Invalid First Name';
    RegisterInputs.firstName.current!.style.border = 'red 2px solid';
    firstInputsJson.firstName = false;
  } else {
    RegisterInputs.firstName.current!.style.border = 'green 2px solid';
    RegisterMessages.firstName.current!.innerHTML = '';
    firstInputsJson.firstName = true;
  }
  if (RegisterInputs.secondName.current!.value === '') {
    RegisterMessages.secondName.current!.innerHTML = 'Empty Second Name Field';
    RegisterInputs.secondName.current!.style.border = 'red 2px solid';
    firstInputsJson.firstName = false;
  } else if (!nameRegex.test(RegisterInputs.secondName.current!.value)) {
    RegisterMessages.secondName.current!.innerHTML = 'Invalid Second Name';
    RegisterInputs.secondName.current!.style.border = 'red 2px solid';
    firstInputsJson.secondName = false;
  } else {
    RegisterInputs.secondName.current!.style.border = 'green 2px solid';
    RegisterMessages.secondName.current!.innerHTML = '';
    firstInputsJson.secondName = true;
  }
  if (RegisterInputs.phone.current!.value === '') {
    RegisterMessages.phone.current!.innerHTML = 'Empty Phone Field';
    RegisterInputs.phone.current!.style.border = 'red 2px solid';
    firstInputsJson.phone = false;
  } else {
    RegisterInputs.phone.current!.style.border = 'green 2px solid';
    RegisterMessages.phone.current!.innerHTML = '';
    firstInputsJson.phone = true;
  }
  if (RegisterInputs.gender.current!.value === '') {
    RegisterMessages.gender.current!.innerHTML = 'Select Your Gender';
    RegisterInputs.gender.current!.style.border = 'red 2px solid';
    firstInputsJson.gender = false;
  } else {
    RegisterInputs.gender.current!.style.border = 'green 2px solid';
    RegisterMessages.gender.current!.innerHTML = '';
    firstInputsJson.gender = true;
  }
  if (Object.values(firstInputsJson).includes(false)) {
    registerPanel.current?.classList.add('error');
    setTimeout(() => {
      registerPanel.current?.classList.remove('error');
    }, 700);
  }
  return Object.values(firstInputsJson).includes(false);
};

export const secondValidation = async ({ RegisterInputs, registerPanel, RegisterMessages, setLoadingState }: SecondValidationProps) => {
  const secondInputsJson = {
    username: false,
    email: false,
    password: false,
    rPassword: false,
  };
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?!.*\s).{8,}$/;
  const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
  const usernameRegex = /^[A-Za-z0-9]{2,}$/;
  if (RegisterInputs.email.current!.value === '') {
    RegisterMessages.email.current!.innerHTML = 'Empty Email Field';
    RegisterInputs.email.current!.style.border = 'red 2px solid';
    secondInputsJson.email = false;
  } else if (!emailRegex.test(RegisterInputs.email.current!.value)) {
    RegisterMessages.email.current!.innerHTML = 'Invalid Email';
    RegisterInputs.email.current!.style.border = 'red 2px solid';
    secondInputsJson.email = false;
  } else {
    RegisterInputs.email.current!.style.border = 'green 2px solid';
    RegisterMessages.email.current!.innerHTML = '';
    secondInputsJson.email = true;
  }
  if (RegisterInputs.password.current!.value === '') {
    RegisterMessages.password.current!.innerHTML = 'Empty Password Field';
    RegisterInputs.password.current!.style.border = 'red 2px solid';
    secondInputsJson.password = false;
  } else if (!passwordRegex.test(RegisterInputs.password.current!.value)) {
    RegisterMessages.password.current!.innerHTML = 'The password must be at least 8 characters long';
    RegisterInputs.password.current!.style.border = 'red 2px solid';
    secondInputsJson.password = false;
  } else {
    RegisterInputs.password.current!.style.border = 'green 2px solid';
    RegisterMessages.password.current!.innerHTML = '';
    secondInputsJson.password = true;
  }
  if (RegisterInputs.rPassword.current!.value === '') {
    RegisterMessages.rPassword.current!.innerHTML = 'Empty Repeat Password Field';
    RegisterInputs.rPassword.current!.style.border = 'red 2px solid';
    secondInputsJson.rPassword = false;
  } else if (RegisterInputs.password.current!.value !== RegisterInputs.rPassword.current!.value) {
    RegisterMessages.rPassword.current!.innerHTML = 'The Password Confirmation Does Not Match';
    RegisterInputs.rPassword.current!.style.border = 'red 2px solid';
    secondInputsJson.rPassword = false;
  } else {
    RegisterInputs.rPassword.current!.style.border = 'green 2px solid';
    RegisterMessages.rPassword.current!.innerHTML = '';
    secondInputsJson.rPassword = true;
  }

  if (RegisterInputs.username.current!.value === '') {
    RegisterMessages.username.current!.innerHTML = 'Empty Username Field';
    RegisterInputs.username.current!.style.border = 'red 2px solid';
    secondInputsJson.username = false;
  } else if (!usernameRegex.test(RegisterInputs.username.current!.value)) {
    RegisterMessages.username.current!.innerHTML = '';
    RegisterMessages.username.current!.innerHTML = 'Invalid Username';
    RegisterInputs.username.current!.style.border = 'red 2px solid';
    secondInputsJson.password = false;
  } else {
    RegisterInputs.username.current!.style.border = 'green 2px solid';
    RegisterMessages.username.current!.innerHTML = '';
    secondInputsJson.username = true;
  }
  if ((secondInputsJson.username || secondInputsJson.email )) {
    const isUsernameEmpty = RegisterInputs.username.current?.value === '';
    const isEmailEmpty = RegisterInputs.email.current?.value === '';
    const usernameMessage = RegisterMessages.username.current!.innerHTML;
    const emailMessage = RegisterMessages.email.current!.innerHTML;
    if (!isUsernameEmpty) {
      RegisterMessages.username.current!.innerHTML = '';
      setLoadingState.setUsernameLoading(true);
    }
    if (!isEmailEmpty) {
      setLoadingState.setEmailLoading(true);
      RegisterMessages.email.current!.innerHTML = '';
    }
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    if (!csrfToken) {
      return;
    }
    const response = await fetch(`/api/check-input/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken,
      },
      body: JSON.stringify({
        username: RegisterInputs.username.current?.value,
        email: RegisterInputs.email.current?.value,
      }),
    });
    const responseJson = await response.json();
    setLoadingState.setUsernameLoading(false);
    setLoadingState.setEmailLoading(false);
    RegisterMessages.email.current!.innerHTML = emailMessage;
    RegisterMessages.username.current!.innerHTML = usernameMessage;
    if (!isUsernameEmpty) {
      if (responseJson.username === 'Username is required') {
        console.log('herererererere');
        RegisterMessages.username.current!.innerHTML = 'Empty Username Fieldz';
        RegisterInputs.username.current!.style.border = 'red 2px solid';
        secondInputsJson.username = false;
      } else if (responseJson.username === 'Username is taken') {
        RegisterMessages.username.current!.innerHTML = 'Username Is Taken';
        RegisterInputs.username.current!.style.border = 'red 2px solid';
        secondInputsJson.username = false;
      }
    }
    if (!isEmailEmpty) {
      if (responseJson.email === 'Email is required') {
        RegisterMessages.email.current!.innerHTML = 'Empty Email Field';
        RegisterInputs.email.current!.style.border = 'red 2px solid';
        secondInputsJson.username = false;
      } else if (responseJson.email === 'Email is already used') {
        RegisterMessages.email.current!.innerHTML = 'Email Is Already Used';
        RegisterInputs.email.current!.style.border = 'red 2px solid';
        secondInputsJson.username = false;
      }
    }
  }
  if (Object.values(secondInputsJson).includes(false)) {
    registerPanel.current?.classList.add('error');
    setTimeout(() => {
      registerPanel.current?.classList.remove('error');
    }, 700);
  }
  return Object.values(secondInputsJson).includes(false);
};

export const loginValidation = async ({ LoginInputs, LoginMessages, setLoadingState, setShowOverlay }: LoginValidationProps) => {
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
  if (!csrfToken) {
    return;
  }
  LoginMessages.login.current!.innerHTML = '';
  setShowOverlay(true);
  setLoadingState.setLoginLoading(true);
  const response = await fetch('/api/login', {
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': csrfToken,
    },
    method: 'POST',
    body: JSON.stringify({
      emailUsername: LoginInputs.emailLogin.current!.value,
      password: LoginInputs.passwordLogin.current!.value,
    }),
  });
  setLoadingState.setLoginLoading(false);
  if (response.status === 200) {
    router.visit('/', {
      method: 'get',
    });
    setShowOverlay(false);
    return;
  }
  setShowOverlay(false);
  LoginMessages.login.current!.innerHTML = 'Invalid Inputs';
};