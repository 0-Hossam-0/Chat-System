import React from 'react';
import logo from './Images/profile.png';
import type { MessageComponent } from '../Types/Interfaces';

const SenderMessage: React.FC<MessageComponent> = ({ body, sendTime }) => {
  return (
    <div className="flex items-start gap-3 max-w-[80%]">
      <img 
        src={logo} 
        className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-600 flex-shrink-0" 
        alt="Sender avatar"
      />
      <div className="flex flex-col">
        <div className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border border-gray-200 dark:border-gray-600">
          <p className="text-sm leading-relaxed break-words">{body}</p>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-2">{sendTime}</span>
      </div>
    </div>
  );
};

export default SenderMessage;