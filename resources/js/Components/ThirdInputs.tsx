import React, { useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRegisterAndLoginContext } from '../RegisterAndLoginContext';
import { useRegisterContext } from '../RegisterContext';
import { sendCode } from '../Functions/Functions';

const ThirdInputs: React.FC = () => {
  const { registerLevel, setLoadingState, getLoadingState } = useRegisterAndLoginContext();
  const { RegisterMessages, RegisterInputs, setCapVal, isResendButtonOn, setIsResendButtonOn, RegisterButtons } = useRegisterContext();
  useEffect(() => {
    if (isResendButtonOn === false) {
      setTimeout(() => {
        setIsResendButtonOn(true);
      }, 60000);
    }
  },[isResendButtonOn])
  return (
    <>
      <div className=" mt-[20px] transition-all duration-200 translate-x-[-460px] invisible" ref={registerLevel.thirdInputs}>
        <div className="flex gap-1">
          <p className="mb-2" id="verification-message" ref={RegisterMessages.verificationMessage}></p>
          {getLoadingState.verifyEmailLoading && (
            <div className="inline-block rounded-full text-indigo-600  dark:text-indigo-400 px-4 mb-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 select-none">
              <div role="status" className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
              </div>
              Loading
            </div>
          )}
          <span className="font-semibold text-green-500" ref={RegisterMessages.emailSent}></span>
        </div>
        <div className="flex flex-col gap-[15px] items-center w-[345px]">
          <div className="flex gap-8 items-center justify-center w-fit">
            <input type="text" className="w-[220px] rounded-md p-1 pl-2 focus:outline-indigo-500 bg-[#d5d4d4] hover:bg-[#d8d7d7] outline-none border-black border" placeholder="Code" ref={RegisterInputs.code} />
            <button disabled={!isResendButtonOn} onClick={() => sendCode( {RegisterInputs, RegisterMessages, setLoadingState, setIsResendButtonOn})} className=" text-indigo-500 font-semibold hover:text-indigo-400 bg-black rounded-lg p-1 pl-2 pr-2 cursor-pointer disabled:text-gray-500 disabled:cursor-default" ref={RegisterButtons.resend}>
              Resend
            </button>
          </div>
          <div className="flex justify-center mr-16 mb-5">
            <ReCAPTCHA sitekey="6LcQJawqAAAAAJPI9JL8QqZvgIxulqjksH0sK-C7" onChange={(val) => setCapVal(val)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdInputs;
