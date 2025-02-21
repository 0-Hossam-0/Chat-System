import { useRef } from 'react';

export const HTMLElements = () => {
  const registerLevel = {
    firstInputs: useRef<HTMLDivElement | null>(null),
    secondInputs: useRef<HTMLDivElement | null>(null),
    thirdInputs: useRef<HTMLDivElement | null>(null),
  };
  const LoginInputs = {
    emailLogin: useRef<HTMLInputElement | null>(null),
    passwordLogin: useRef<HTMLInputElement | null>(null),
  };
  const LoginMessages = {
    login: useRef<HTMLParagraphElement | null>(null),
    verificationMessage: useRef<HTMLParagraphElement | null>(null),
  };

  const RegisterInputs = {
    firstName: useRef<HTMLInputElement | null>(null),
    secondName: useRef<HTMLInputElement | null>(null),
    email: useRef<HTMLInputElement | null>(null),
    username: useRef<HTMLInputElement | null>(null),
    password: useRef<HTMLInputElement | null>(null),
    rPassword: useRef<HTMLInputElement | null>(null),
    phone: useRef<HTMLInputElement | null>(null),
    gender: useRef<HTMLSelectElement | null>(null),
    code: useRef<HTMLInputElement | null>(null),
  };
  const RegisterMessages = {
    firstName: useRef<HTMLParagraphElement | null>(null),
    secondName: useRef<HTMLParagraphElement | null>(null),
    phone: useRef<HTMLParagraphElement | null>(null),
    gender: useRef<HTMLParagraphElement | null>(null),
    username: useRef<HTMLParagraphElement | null>(null),
    email: useRef<HTMLParagraphElement | null>(null),
    password: useRef<HTMLParagraphElement | null>(null),
    rPassword: useRef<HTMLParagraphElement | null>(null),
    emailSent: useRef<HTMLSpanElement | null>(null),
    verificationMessage: useRef<HTMLParagraphElement | null>(null),
  };
  const Panels = {
    registerPanel: useRef<HTMLDivElement | null>(null),
    loginPanel: useRef<HTMLDivElement | null>(null),
  };
  const RegisterButtons = {
    next: useRef<HTMLButtonElement | null>(null),
    back: useRef<HTMLButtonElement | null>(null),
    resend: useRef<HTMLButtonElement | null>(null),
  };

  const HomeInputs = {
    username: useRef<HTMLInputElement | null>(null),
    chatInput: useRef<HTMLInputElement | null>(null),
  }
  const HomeButtons = {
    addUser: useRef<HTMLButtonElement | null>(null),
  }

  const HomeMessages = {
    addUser: useRef<HTMLParagraphElement | null>(null),
  }

  return {
    RegisterInputs,
    LoginInputs,
    RegisterMessages,
    LoginMessages,
    registerLevel,
    Panels,
    RegisterButtons,
    HomeMessages,
    HomeButtons,
    HomeInputs
  };
};
