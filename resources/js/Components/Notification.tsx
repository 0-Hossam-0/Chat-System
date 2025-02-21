import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Notification: React.FC = ({}) => {
  const notification = useRef<HTMLInputElement | null>(null);
  const { show, message, type } = useSelector((state) => state.Notification);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        notification.current!.classList.remove('invisible');
        notification.current!.style.translate = '-140px';
      }, 0);
      setTimeout(() => {
        notification.current!.classList.add('invisible');
        notification.current!.style.translate = '300px';
      }, 5000);
    }
  }, [show]);
  return (
    <>
      {type === 'Success' && (
        <div className="space-y-2 p-4 absolute top-10 right-[-140px] transition-all duration-[400ms] invisible z-30" ref={notification}>
          <div
            role="alert"
            className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105"
          >
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5 flex-shrink-0 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
            <p className="text-xs font-semibold">Success - {message}</p>
          </div>
        </div>
      )}

      {type === 'Error' && (
        <div className="space-y-2 p-4 absolute top-10 right-[-140px] transition-all duration-[400ms] invisible z-30" ref={notification}>
          <div
            role="alert"
            className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform hover:scale-105"
          >
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5 flex-shrink-0 mr-2 text-red-600" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
            <p className="text-xs font-semibold">Error - {message}.</p>
          </div>
        </div>
      )}

      {type === 'Alert' && (
        <div className="space-y-2 p-4 w-full  absolute top-10 right-[-10px] transition-all duration-[400ms] invisible z-30" ref={notification}>
          <div
            role="alert"
            className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100 p-2 absolute top-10 right-[20px] transition-all duration-[400ms] translate-x-[130px] rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-yellow-200 dark:hover:bg-yellow-800 transform hover:scale-105"
            ref={notification}
          >
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-5 w-5 flex-shrink-0 mr-2 text-yellow-600" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
            <p className="text-xs font-semibold">Warning - {message}.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
