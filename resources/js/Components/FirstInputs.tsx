import React from 'react';
import { useRegisterAndLoginContext } from '../RegisterAndLoginContext';
import { useRegisterContext } from '../RegisterContext';

const FirstInputs: React.FC = () => {
  const {getLoadingState, registerLevel} = useRegisterAndLoginContext();
  const {RegisterMessages, RegisterInputs} = useRegisterContext();
  return (
    <div className="ml-10 mt-[30px] transition-all duration-200 translate-x-[-540px] invisible" ref={registerLevel.firstInputs} id="first-inputs">
      <div className="flex gap-[60px]">
        <div className="flex flex-col gap-2 mb-5">
          <input type="text" className="w-[220px] rounded-md p-1 pl-2 focus:outline-indigo-500 bg-[#d5d4d4] hover:bg-[#d8d7d7] outline-none border-black border" placeholder="Username" ref={RegisterInputs.username} />
          <p className="ml-[10px] text-red-500 font-bold" ref={RegisterMessages.username}></p>
          {getLoadingState.showUsernameLoading && (
            <div className="inline-block rounded-full text-indigo-600  dark:text-indigo-400 px-4  text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 select-none">
              <div role="status" className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
              </div>
              Loading
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <input type="text" className="w-[220px] rounded-md p-1 pl-2 focus:outline-indigo-500 bg-[#d5d4d4] hover:bg-[#d8d7d7] outline-none border-black border" placeholder="Email" ref={RegisterInputs.email} />
          <p className="ml-[10px] text-red-500 font-bold" ref={RegisterMessages.email}></p>
          {getLoadingState.showEmailLoading && (
            <div className="inline-block rounded-full text-indigo-600  dark:text-indigo-400 px-4  text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 select-none">
              <div role="status" className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
              </div>
              Loading
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-[60px]">
        <div className="flex flex-col gap- mb-5">
          <input type="password" className="w-[220px] rounded-md p-1 pl-2 focus:outline-indigo-500 bg-[#d5d4d4] hover:bg-[#d8d7d7] outline-none border-black border" placeholder="Password" ref={RegisterInputs.password} />
          <p className="ml-[10px] mt-3 text-red-500 font-bold" ref={RegisterMessages.password}></p>
        </div>
        <div className="flex flex-col gap-2 mb-5 ">
          <input type="password" className="w-[220px] rounded-md p-1 pl-2 focus:outline-indigo-500 bg-[#d5d4d4] hover:bg-[#d8d7d7] outline-none border-black border" placeholder="Repeat Password" ref={RegisterInputs.rPassword} />
          <p className="ml-[10px] text-red-500 font-bold" ref={RegisterMessages.rPassword}></p>
        </div>
      </div>
    </div>
  );
};

export default FirstInputs;
