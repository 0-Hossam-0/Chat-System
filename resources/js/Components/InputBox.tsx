import React, { useRef } from 'react';
import { faPaperPlane, faSmile, faPaperclip, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sendMessage } from '../Functions/Functions';
import { useHomeContext } from '../HomeContext';
import { useSelector } from 'react-redux';
import type { RootState } from '../Redux/StoreApp';

const InputBox: React.FC = () => {
  const { HomeInputs } = useHomeContext();
  const { currentChat } = useHomeContext();
  const userData = useSelector((state: RootState) => state.UserData.data);

  const handleSendMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (HomeInputs.chatInput.current?.value.trim()) {
      sendMessage({ event, HomeInputs, currentChat });
      HomeInputs.chatInput.current.value = '';
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (HomeInputs.chatInput.current?.value.trim()) {
        const mockEvent = { preventDefault: () => {} } as React.MouseEvent<HTMLDivElement>;
        sendMessage({ event: mockEvent, HomeInputs, currentChat });
        HomeInputs.chatInput.current.value = '';
      }
    }
  };

  return (
    <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 rounded-2xl p-3">
      {/* Attachment Button */}
      <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
        <FontAwesomeIcon icon={faPaperclip} className="h-5 w-5" />
      </button>

      {/* Input Field */}
      <div className="flex-1 relative">
        <input
          type="text"
          className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none py-2 px-4 rounded-xl"
          placeholder="Type a message..."
          ref={HomeInputs.chatInput}
          onKeyPress={handleKeyPress}
        />
      </div>

      {/* Emoji Button */}
      <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
        <FontAwesomeIcon icon={faSmile} className="h-5 w-5" />
      </button>

      {/* Voice/Send Button */}
      <button
        onClick={handleSendMessage}
        className="p-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full transition-all duration-200 hover:scale-105 shadow-md"
      >
        <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
      </button>
    </div>
  );
};

export default InputBox;