import React from 'react';
import logo from './Images/profile.png';
import { ChatPropsComponent } from '../Types/Interfaces';
import { selectCurrentChat } from '../Functions/Functions';
import { useDispatch } from 'react-redux';
import { useHomeContext } from '../HomeContext';

const Chat: React.FC<ChatPropsComponent> = ({ chat }) => {
  const dispatch = useDispatch();
  const { setCurrentChat, currentChat } = useHomeContext();
  const { setShowAddLayout } = useHomeContext();
  return (
    <div className="flex hover:bg-[#e0e0e7] transition-all dark:hover:bg-[#545456] cursor-pointer h-24 rounded-lg items-center w-[358px] ml-2 select-none mb-3" id={`${chat.id}`} onClick={() => selectCurrentChat({ dispatch, chat, setCurrentChat, currentChat, setShowAddLayout })}>
      <div className="flex gap-4">
        <img src={logo} className="w-12 h-12 ml-6" />
        <div>
          <div className="font-bold w-60 dark:text-[#dfdcdc]">{chat.name}</div>
          <div className="text-gray-500 dark:text-gray-400">{chat.lastMessage}</div>
        </div>
      </div>
      <div className="text-gray-500 dark:text-gray-400">1h</div>
    </div>
  );
};

export default Chat;
