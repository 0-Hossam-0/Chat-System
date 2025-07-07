import React, { FC } from 'react';
import { router } from '@inertiajs/react';
import { addChatUser } from '../Functions/Functions';
import { useHomeContext } from '../HomeContext';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../Redux/StoreApp';
import { States } from './Hooks/States';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUserPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Dialog: FC = () => {
  const { HomeInputs, HomeMessages, showAddLoadingState, showAddLayout, setAddLoadingState, setShowAddLayout } = useHomeContext();
  const UserData = useSelector((state: RootState) => state.UserData.data);
  const dispatch = useDispatch();
  const { setCurrentChat, currentChat } = States();
  
  return (
    showAddLayout && (
      <>
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity"></div>
        
        {/* Modal */}
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faUserPlus} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add Friend</h2>
              </div>
              <button
                onClick={() => setShowAddLayout(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} className="text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Username
                  </label>
                  <input
                    placeholder="Enter username to add as friend"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl border border-gray-200 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 outline-none transition-all"
                    ref={HomeInputs.username}
                  />
                </div>
                
                {/* Error/Success Message */}
                <div className="min-h-[24px]">
                  <p className="text-sm font-medium" ref={HomeMessages.addUser}></p>
                </div>

                {/* Loading State */}
                {showAddLoadingState && (
                  <div className="flex items-center justify-center py-2">
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin text-indigo-600 dark:text-indigo-400 mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Searching for user...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
              <button 
                className="flex-1 px-4 py-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl font-medium transition-colors"
                onClick={() => setShowAddLayout(false)}
              >
                Cancel
              </button>
              <button
                className="flex-1 px-4 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => addChatUser({ HomeMessages, HomeInputs, router, setAddLoadingState, UserData, dispatch, setCurrentChat, currentChat, setShowAddLayout })}
                disabled={showAddLoadingState}
              >
                Add Friend
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Dialog;