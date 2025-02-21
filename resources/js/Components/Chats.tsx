import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import '/resources/css/app.css';
import { useHomeContext } from '../HomeContext';
import { useSelector } from 'react-redux';
import type { RootState } from '../Redux/StoreApp';
import Chat from './Chat';
import { searchChat } from '../Functions/Functions';
import { States } from './Hooks/States';

const Chats: React.FC = () => {
  const { setShowAddLayout } = useHomeContext();
  const userData = useSelector((state: RootState) => state.UserData.data);
  const userChats = userData ? userData.chats : [];
  const { searchChats, setSearchChats } = States();
  return (
    <div className="border-[#cbcbcb] border-r w-[24rem] bg-white p-0 m-0 box-border h-[100vh] float-left dark:bg-[#2c2c2c]">
      <header className="flex justify-center items-center gap-44 h-[100px] border-[#cbcbcb] border-b ">
        <p className="font-bold text-2xl text-black dark:text-white">Messages</p>
        <FontAwesomeIcon icon={faPlus} className="bg-indigo-500 text-white rounded-full h-6 p-1 w-6 cursor-pointer hover:bg-indigo-600" onClick={() => setShowAddLayout(true)} />
      </header>
      <div className="flex justify-center">
        <div className="relative h-28">
          <input
            type="text"
            placeholder="Search Messages"
            className="bg-[#f3f3f3] w-[350px] p-4 rounded-xl mt-6 hover:bg-[#e5e4e4] dark:bg-[#878686] dark:text-white dark:placeholder:text-white outline-none hover:border-[3px] border-b-indigo-500 border-[#878686] transition-all dark:hover:bg-[#999898]"
            onChange={(event) => searchChat({ event, setSearchChats, userChats })}
          />
          <FontAwesomeIcon icon={faSearch} className="absolute right-8 top-11 cursor-pointer text-gray-500 dark:text-gray-700" />
        </div>
      </div>
      <div className="overflow-y-scroll h-[75.5vh] scrollbar-thin scrollbar-track-slate-500 scrollbar-thumb-indigo-500">
        {searchChats &&
          searchChats.map((chat, index) => {
            return <Chat key={index} chat={chat} />;
          })}
        {userData?.chats &&
          !searchChats &&
          userData?.chats.map((chat, index) => {
            return <Chat key={index} chat={chat} />;
          })}
      </div>
    </div>
  );
};

export default Chats;
