import React from 'react';
import { useRegisterContext } from '../RegisterContext';
import { useRegisterAndLoginContext } from '../RegisterAndLoginContext';

const SecondInputs: React.FC = () => {
  const { registerLevel } = useRegisterAndLoginContext();
  const { RegisterMessages, RegisterInputs } = useRegisterContext();
  return (
    <div className="ml-10 mt-[30px] transition-all duration-200 translate-x-[-530px]" ref={registerLevel.secondInputs}>
      <div className="flex gap-[60px]">
        <div className="flex flex-col gap-2 mb-5">
          <input type="text" className="w-[220px] rounded-md p-1 pl-2 focus:outline-indigo-500 bg-[#d5d4d4] hover:bg-[#d8d7d7] outline-none border-black border" placeholder="First Name" ref={RegisterInputs.firstName} />
          <p className="ml-[20px] text-red-500 font-bold" ref={RegisterMessages.firstName}></p>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <input type="text" className="w-[220px] rounded-md p-1 pl-2 focus:outline-indigo-500 bg-[#d5d4d4] hover:bg-[#d8d7d7] outline-none border-black border" placeholder="Second Name" ref={RegisterInputs.secondName} />
          <p className="ml-[10px] text-red-500 font-bold " ref={RegisterMessages.secondName}></p>
        </div>
      </div>
      <div className="flex gap-[60px]">
        <div className="flex flex-col gap- mb-5">
          <input type="text" className="w-[220px] rounded-md p-1 pl-2 focus:outline-indigo-500 bg-[#d5d4d4] hover:bg-[#d8d7d7] outline-none border-black border" placeholder="Phone Number" ref={RegisterInputs.phone} />
          <p className="ml-[20px] mt-3 text-red-500 font-bold" ref={RegisterMessages.phone}></p>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <select className="w-[220px] rounded-md p-2 focus:outline-indigo-500 hover:bg-indigo-400 outline-none cursor-pointer bg-indigo-300" ref={RegisterInputs.gender}>
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <p className="ml-[43px] text-red-500 font-bold" ref={RegisterMessages.gender}></p>
        </div>
      </div>
    </div>
  );
};

export default SecondInputs;
