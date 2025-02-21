import React, { useEffect, useRef, useState } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sendMessage } from '../Functions/Functions';
import Pusher from 'pusher-js';
import Cookies from 'js-cookie';
import { useHomeContext } from '../HomeContext';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/StoreApp';
import { States } from './Hooks/States';

const InputBox: React.FC = () => {
  const { HomeInputs } = useHomeContext();
  const paperIcon = useRef<HTMLDivElement | null>(null);
  const { currentChat } = useHomeContext();
  const userData = useSelector((state: RootState) => state.UserData.data);
  // useEffect(() => {
  //   console.log(encodeURIComponent(Cookies.get('auth_token')));
  //   Pusher.logToConsole = true;
  //   var pusher = new Pusher('e2a9b304326c1c70c32f', {
  //     cluster: 'eu',
  //     authEndpoint: '/broadcaster/auth',
  //     auth: {
  //       headers: {
  //         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
  //         Authorization: 'Bearer ' + encodeURIComponent(Cookies.get('auth_token')),
  //       },
  //     },
  //   });
  //   var channel = pusher.subscribe(`private-Chat.User.f68f7345-e3e9-11ef-ad88-3c2c30cf09ae`);
  //   channel.bind('Message', function (data) {
  //     console.log('Data =>', data);
  //     alert(JSON.stringify(data));
  //   });
  // }, []);

  HomeInputs.chatInput.current?.addEventListener('input', () => {
    if (HomeInputs.chatInput.current?.value !== '') {
      paperIcon.current!.style.visibility = 'visible';
      paperIcon.current!.style.cursor = 'pointer';
      HomeInputs.chatInput.current!.style.borderRadius = '0.375rem 0 0 0.375rem';
    } else if (HomeInputs.chatInput.current?.value === '') {
      paperIcon.current!.style.visibility = 'hidden';
      paperIcon.current!.style.cursor = 'auto';
      HomeInputs.chatInput.current.style.borderRadius = '0.375rem 0.375rem 0.375rem 0.375rem';
    }
  });

  return (
    <div className="bg-[#cac7c7] dark:bg-[#333232] rounded-xl sticky bottom-2 left-10 w-[90%] flex items-center p-5 ">
      <input type="text" className="input z-10 w-full p-3 h-11 outline-none dark:bg-[#c0c0c0] placeholder-[#000000] transition-all rounded-md" placeholder="Type a message" ref={HomeInputs.chatInput} />
      <div ref={paperIcon} className="icon p-2 w-10 transition ease-in-out text-xl dark:bg-[#c0c0c0] bg-white rounded-r-xl invisible" onClick={(event) => sendMessage({ event, HomeInputs, currentChat })}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
    </div>
  );
};

export default InputBox;
