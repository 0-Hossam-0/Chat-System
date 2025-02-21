import React, { useEffect } from 'react';
import Register from '../Components/Register';
import Login from '../Components/Login';
import { useRegisterAndLoginContext } from '../RegisterAndLoginContext';
import { RegisterProvider } from '../RegisterContext';
import { handleOpeningError, switchPanels } from '../Functions/Functions';
import { useDispatch } from 'react-redux';
import { LoginContextProvider } from '../LoginContext';

const RegisterAndLogin: React.FC = () => {
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(window.location.search);
  const { Panels, isLogin } = useRegisterAndLoginContext();
  useEffect(() => switchPanels({ Panels, isLogin }), [isLogin]);
  useEffect(() => {
    handleOpeningError({ queryParams, dispatch });
  }, []);

  return (
    <div className="*:p-0 *:m-0 overflow-y-scroll overflow-x-hidden flex flex-col gap-10 items-center justify-center h-[100vh] bg-[#c5c4c4] dark:bg-[#1c1c1d] relative">
      <div className="bg-[#6366f1] rounded-xl">
        <p className="header select-none">Indigo</p>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex w-[600px]">
          <div className="w-[600px] h-[390px]"></div>
          <div className="dark:bg-[#454849] bg-slate-100 w-[600px] pb-6 min-h-[350px] flex flex-col gap-6 rounded-xl overflow-hidden transition-all absolute translate-x-[140vh]" ref={Panels.registerPanel}>
            <RegisterProvider>
              <Register />
            </RegisterProvider>
          </div>
          <div className="dark:bg-[#454849] bg-slate-100 w-[600px] h-[355px] flex flex-col gap-6 rounded-xl overflow-hidden transition-all absolute " ref={Panels.loginPanel}>
            <LoginContextProvider>
              <Login />
            </LoginContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAndLogin;
