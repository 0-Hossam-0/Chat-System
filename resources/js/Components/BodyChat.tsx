import React from 'react';
import logo from './Images/profile.png';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/resources/css/home.css';
import SenderMessage from './SenderMessage';
import ReceiverMessage from './ReceiverMessage';
import InputBox from './InputBox';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/StoreApp';
import SkeletonBody from './SkeletonBody';
import { useHomeContext } from '../HomeContext';

const BodyChat: React.FC = () => {
  const inComingMessages = useSelector((state: RootState) => state.Messages);
  const userData = useSelector((state: RootState) => state.UserData);
  const { currentChat } = useHomeContext();
  if (currentChat && inComingMessages.loading !== true) {
    return (
      <div className="body">
        <div className="relative dark:bg-[#222327] h-screen overflow-x-hidden overflow-scroll scrollbar-thin scrollbar-track-slate-500 scrollbar-thumb-indigo-500 flex flex-col">
          <div className="flex border-b-2 border-[#cbcbcb] p-2 items-center gap-[70%] bg-white dark:bg-[#2c2c2c] sticky top-0 z-10" id="body-chat-header">
            <div className="flex gap-9">
              <div className="w-14 h-14">
                <img src={logo} className="ml-5" />
              </div>
              <div className="flex flex-col gap-1 w-5 ">
                <div className="h-fit font-bold w-80 dark:text-white">{currentChat.name}</div>
                <div className="relative">
                  <div className="text-green-500 select-none font-bold text-5xl w-5 absolute bottom-[0.3px]">.</div>
                  <div className="h-fit ml-4 text-xs dark:text-white">Online</div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-center bg-[#e7e7f7] w-32 h-10 rounded-lg hover:bg-[#c5c5de] cursor-pointer">
              <FontAwesomeIcon icon={faPhone} className="text-[#a9a8f7]" />
              <p className="font-bold text-[#a9a8f7]">Call</p>
            </div>
          </div>
          <div className="flex-1">
            {inComingMessages.messages.map((message) => {
              if (message && userData.data && message.senderID !== userData.data.id) {
                return <SenderMessage body={message.body} sendTime={'Time'} key={message.id} />;
              } else {
                return <ReceiverMessage body={message.body} sendTime={'Time'} key={message.id} />;
              }
            })}
          </div>
          <div className="mt-10"></div>
          <InputBox />
        </div>
      </div>
    );
  } else if (inComingMessages.loading !== false) {
    return <SkeletonBody />;
  } else {
    return <div className="bg-[#222327] h-screen"></div>;
  }
};

export default BodyChat;
