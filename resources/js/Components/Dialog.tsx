import React, { FC } from 'react';
import { router } from '@inertiajs/react';
import { addChatUser } from '../Functions/Functions';
import { useHomeContext } from '../HomeContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/StoreApp';
import { States } from './Hooks/States';

const Dialog: FC = () => {
  const { HomeInputs, HomeMessages, showAddLoadingState, showAddLayout, setAddLoadingState, setShowAddLayout } = useHomeContext();
  const UserData = useSelector((state: RootState) => state.UserData.data);
  const dispatch = useDispatch();
  const { setCurrentChat, currentChat } = States();
  return (
    showAddLayout && (
      <>
        <div className="opacity-70 w-full absolute z-20 h-screen bg-black"></div>
        <div className="flex flex-col items-center justify-center h-screen dark absolute right-1/2 translate-x-1/2 z-40 w-fit">
          <div className="w-[460px] max-w-md bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">Add friend</h2>

            <div className="flex flex-col">
              <input
                placeholder="Enter Username"
                className="bg-gray-700 text-gray-200 outline-0 focus:border-2 border-indigo-500 border-solid rounded-md p-2 mb-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                ref={HomeInputs.username}
              />
              <p className="text-red-500 ml-3" ref={HomeMessages.addUser}></p>
              {showAddLoadingState && (
                <div className="inline-block rounded-full text-indigo-600  dark:text-indigo-400 px-4  text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 select-none">
                  <div role="status" className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                  </div>
                  Loading
                </div>
              )}
              <div className="flex w-full gap-5 justify-center ">
                <button className="add-button before:bg-red-500 bg-black text-white font-bold py-2 w-[100px] px-4 rounded-md mt-4 hover:to-blue-600 transition ease-in-out duration-150 z-10" onClick={() => setShowAddLayout(false)}>
                  Close
                </button>
                <button
                  className="add-button bg-black text-white font-bold py-2 w-[250px] px-4 rounded-md mt-4 hover:to-blue-600 transition ease-in-out duration-150 z-10"
                  onClick={() => addChatUser({ HomeMessages, HomeInputs, router, setAddLoadingState, UserData, dispatch, setCurrentChat, currentChat, setShowAddLayout })}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Dialog;
