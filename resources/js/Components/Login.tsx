import React from 'react';
import { loginValidation } from '../Functions/Validation';
import { useLoginContext } from '../LoginContext';
import { useRegisterAndLoginContext } from '../RegisterAndLoginContext';

const Login: React.FC = () => {
  const { loginPanel, LoginMessages } = useLoginContext();
  const { getLoadingState, setIsLogin, LoginInputs, setLoadingState, setShowOverlay } = useRegisterAndLoginContext();
  return (
    <div ref={loginPanel}>
      <div className="flex items-center justify-center h-[50px] dark:border-white border-black border-b ">
        <p className="dark:text-white text-black font-bold text-2xl">Login</p>
      </div>
      <div>
        <div className="mt-[20px] ">
          <div className="flex flex-col items-center gap-[20px]">
            <div className="flex flex-col gap-3 ">
              <p className="text-red-500 font-bold " ref={LoginMessages.login}></p>
              {getLoadingState.showLoginLoading && (
                <div className="inline-block rounded-full text-indigo-600  dark:text-indigo-400 px-4  text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 select-none">
                  <div role="status" className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                  </div>
                  Loading
                </div>
              )}
              <input type="text" className="w-[370px] rounded-md p-1 pl-2 focus:outline-indigo-500 bg-[#d5d4d4] hover:bg-[#d8d7d7] outline-none border-black border" placeholder="Email/Username" ref={LoginInputs.emailLogin} />
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <input type="password" className="w-[370px] rounded-md p-1 pl-2 focus:outline-indigo-500 bg-[#d5d4d4] hover:bg-[#d8d7d7] outline-none border-black border" placeholder="Password" ref={LoginInputs.passwordLogin} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center ">
          <div className="buttonDiv w-[300px] rounded-2xl bg-black overflow-hidden">
            <button className="button login h-11 w-[300px] text-center text-white font-bold rounded-2xl bg-transparent" onClick={() => loginValidation({ LoginInputs, LoginMessages, setLoadingState, setShowOverlay })}>
              Login
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center border-black dark:border-white border-t mr-10 ml-10">
          <button
            className="bg-indigo-500 p-2 rounded-xl w-[300px] mt-4 hover:bg-indigo-400 font-bold"
            onClick={() => {
              setIsLogin(false);
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
