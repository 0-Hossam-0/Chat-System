import React from 'react';
import logo from './Images/profile.png';
import { MessageComponent } from '../Types/Interfaces';

const SenderMessage: React.FC<MessageComponent> = ({ body, sendTime }) => {
  return (
    <div className="flex justify-start mt-10 received ml-5">
      <div className="bg-[#414141] text-white rounded-lg p-3 max-w-xs relative message-arrow">
        <div className="mt-1">{body}</div>
        <div className="text-xs text-gray-400 mt-1">{sendTime}</div>
      </div>
    </div>
  );
};

export default SenderMessage;
