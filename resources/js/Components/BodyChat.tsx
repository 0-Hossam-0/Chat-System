import React, { useEffect, useRef } from 'react';
import logo from './Images/profile.png';
import { faPhone, faVideo, faEllipsisV, faSmile, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/app.css';
import SenderMessage from './SenderMessage';
import ReceiverMessage from './ReceiverMessage';
import InputBox from './InputBox';
import { useSelector } from 'react-redux';
import type { RootState } from '../Redux/StoreApp';
import SkeletonBody from './SkeletonBody';
import { useHomeContext } from '../HomeContext';
import { sendMessage } from '../Functions/Functions';

const BodyChat: React.FC = () => {
  const inComingMessages = useSelector((state: RootState) => state.Messages);
  const userData = useSelector((state: RootState) => state.UserData);
  const { currentChat } = useHomeContext();

  if (currentChat && inComingMessages.loading !== true) {
    return (
      <div className="flex-1 flex flex-col h-screen bg-gray-50 dark:bg-[#111827]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white dark:bg-[#1f2937] border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src={logo} className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-600" alt={`${currentChat.name} avatar`} />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
            </div>
            <div>
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white">{currentChat.name}</h2>
              <p className="text-sm text-green-500 font-medium">Online</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-3 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
              <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
            </button>
            <button className="p-3 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
              <FontAwesomeIcon icon={faVideo} className="h-5 w-5" />
            </button>
            <button className="p-3 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
              <FontAwesomeIcon icon={faEllipsisV} className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-gray-600">
          {inComingMessages.messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faSmile} className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium mb-2">No messages yet</h3>
              <p className="text-sm text-center">Start the conversation by sending a message below</p>
            </div>
          ) : (
            inComingMessages.messages.map((message) => {
              if (message && userData.data && message.senderID !== userData.data.id) {
                return <SenderMessage body={message.body} sendTime={'Time'} key={message.id} />;
              } else {
                return <ReceiverMessage body={message.body} sendTime={'Time'} key={message.id} />;
              }
            })
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white dark:bg-[#1f2937] border-t border-gray-200 dark:border-gray-700">
          <InputBox />
        </div>
      </div>
    );
  } else if (inComingMessages.loading !== false) {
    return <SkeletonBody />;
  } else {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 dark:bg-[#111827] text-gray-500 dark:text-gray-400">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6 mx-auto">
            <FontAwesomeIcon icon={faSmile} className="h-12 w-12" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Welcome to Messages</h2>
          <p className="text-lg mb-4">Select a conversation to start messaging</p>
          <p className="text-sm">Choose from your existing conversations or start a new one</p>
        </div>
      </div>
    );
  }
};

export default BodyChat;
