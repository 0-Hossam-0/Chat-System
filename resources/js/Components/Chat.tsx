import React from 'react';
import logo from './Images/profile.png';
import type { ChatPropsComponent } from '../Types/Interfaces';
import { selectCurrentChat } from '../Functions/Functions';
import { useDispatch } from 'react-redux';
import { useHomeContext } from '../HomeContext';

const Chat: React.FC<ChatPropsComponent> = ({ chat }) => {
  const dispatch = useDispatch();
  const { setCurrentChat, currentChat } = useHomeContext();
  const { setShowAddLayout } = useHomeContext();
  
  const isActive = currentChat?.id === chat.id;
  
  return (
    <div 
      className={`flex hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer rounded-xl p-4 mb-2 select-none group ${
        isActive ? 'bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500' : ''
      }`}
      id={`${chat.id}`} 
      onClick={() => selectCurrentChat({ dispatch, chat, setCurrentChat, currentChat, setShowAddLayout })}
    >
      <div className="flex items-center gap-4 flex-1">
        {/* Avatar */}
        <div className="relative">
          <img 
            src={logo} 
            className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-600" 
            alt={`${chat.name} avatar`}
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
        </div>
        
        {/* Chat Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className={`font-semibold truncate ${
              isActive ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-900 dark:text-gray-100'
            }`}>
              {chat.name}
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
              1h
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
            {chat.lastMessage || 'No messages yet'}
          </p>
        </div>
      </div>
      
      {/* Unread indicator */}
      <div className="flex items-center">
        <div className="w-2 h-2 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
};

export default Chat;