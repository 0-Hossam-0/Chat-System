import React, { useEffect } from 'react';
import '../../css/sign_up.css';
import FirstInputs from './FirstInputs';
import SecondInputs from './SecondInputs';
import ThirdInputs from './ThirdInputs';
import { handleBackButton, handleInputLevel, handleNextButton, handleRecaptcha, createAccount } from '../Functions/Functions';
import { useRegisterAndLoginContext } from '../RegisterAndLoginContext';
import { useDispatch } from 'react-redux';
import { useRegisterContext } from '../RegisterContext';

const Register: React.FC = () => {
  const button = document.getElementById('register-button');
  const dispatch = useDispatch();
  const { RegisterInputs, RegisterMessages, setInputsLevel, RegisterButtons, registerPanel, inputsLevel, capVal, setIsResendButtonOn } = useRegisterContext();
  const { setShowOverlay, setIsLogin, LoginInputs, getLoadingState, setLoadingState, registerLevel } = useRegisterAndLoginContext();
  useEffect(() => {
    handleRecaptcha({ button });
  }, [capVal]);
  useEffect(() => {
    handleInputLevel({ registerLevel, inputsLevel, RegisterMessages, RegisterInputs, setLoadingState, setIsResendButtonOn });
  }, [inputsLevel]);

  return (
    <div>
      <div className="flex items-center justify-center h-[50px] dark:border-white border-black border-b">
        <p className="dark:text-white text-black font-bold text-2xl select-none">Register</p>
      </div>
      <div className="flex">
        <FirstInputs />
        <SecondInputs />
        <ThirdInputs />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-6">
          {(inputsLevel.to === 2 || inputsLevel.to === 3) && (
            <div className="w-[220px] rounded-2xl bg-black overflow-hidden">
              <button
                className="back h-11 w-[220px] text-center text-white font-bold rounded-2xl bg-transparent"
                onClick={() => {
                  handleBackButton({ inputsLevel, setInputsLevel });
                }}
                ref={RegisterButtons.back}
              >
                Back
              </button>
            </div>
          )}
          {(inputsLevel.to === 1 || inputsLevel.to === 2) && (
            <div className="w-[220px] rounded-2xl bg-black overflow-hidden ">
              <button
                className="button next h-11 w-[220px] text-center text-white font-bold rounded-2xl bg-transparent"
                ref={RegisterButtons.next}
                onClick={() => {
                  handleNextButton({ RegisterMessages, RegisterInputs, registerPanel, inputsLevel, getLoadingState, setLoadingState, setInputsLevel });
                }}
              >
                Next
              </button>
            </div>
          )}
          {inputsLevel.to === 3 && (
            <div className="w-[220px] rounded-2xl bg-black overflow-hidden">
              <button
                className=" h-11 w-[220px] text-center text-white font-bold rounded-2xl bg-transparent disabled:text-gray-500"
                onClick={() => createAccount({ setShowOverlay, RegisterInputs, dispatch, setIsLogin, setInputsLevel, LoginInputs, RegisterMessages })}
                id="register-button"
                disabled={!capVal}
              >
                Register
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center border-black dark:border-white border-t mr-10 ml-10">
          <button
            className="bg-indigo-500 p-2 rounded-xl w-[300px] mt-4 hover:bg-indigo-400 font-bold"
            onClick={() => {
              setIsLogin(true);
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
