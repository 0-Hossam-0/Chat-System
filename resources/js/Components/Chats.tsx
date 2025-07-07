import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import '../../css/app.css';
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
    <div className="border-[#e5e7eb] dark:border-[#374151] border-r w-[24rem] bg-white dark:bg-[#1f2937] p-0 m-0 box-border h-[100vh] float-left shadow-lg">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 h-[80px] border-b border-[#e5e7eb] dark:border-[#374151] bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-2xl text-gray-800 dark:text-white">Messages</h1>
          <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-xs font-semibold px-2 py-1 rounded-full">{userChats.length}</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setShowAddLayout(true)} className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full h-10 w-10 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md" title="Add new chat">
            <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
          </button>
          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <FontAwesomeIcon icon={faEllipsisV} className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-4 py-4 bg-gray-50 dark:bg-gray-800">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl px-4 py-3 pl-11 outline-none border border-gray-200 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 transition-all duration-200"
            onChange={(event) => searchChat({ event, setSearchChats, userChats })}
          />
          <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4" />
        </div>
      </div>

      {/* Chat List */}
      <div className="overflow-y-auto h-[calc(100vh-164px)] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-gray-600">
        {searchChats && searchChats.length > 0 ? (
          <div className="px-2 py-2">
            {searchChats.map((chat, index) => (
              <Chat key={index} chat={chat} />
            ))}
          </div>
        ) : searchChats && searchChats.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500 dark:text-gray-400">
            <FontAwesomeIcon icon={faSearch} className="h-12 w-12 mb-4 opacity-50" />
            <p className="text-lg font-medium">No conversations found</p>
            <p className="text-sm">Try searching with different keywords</p>
          </div>
        ) : userData?.chats && userData.chats.length > 0 ? (
          <div className="px-2 py-2">
            {userData.chats.map((chat, index) => (
              <Chat key={index} chat={chat} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500 dark:text-gray-400">
            <FontAwesomeIcon icon={faPlus} className="h-12 w-12 mb-4 opacity-50" />
            <p className="text-lg font-medium">No conversations yet</p>
            <p className="text-sm text-center px-8">Start a new conversation by clicking the + button above</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chats;
