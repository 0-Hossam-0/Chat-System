import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './NotificationSlice';
import loadingReducer from './LoadingSlice';
import userDataReducer from './UserDataSlice';
import MessagesReducer from './MessagesSlice';

export const storeApp = configureStore({
  reducer: {
    Notification: notificationReducer,
    LoadingLayout: loadingReducer,
    UserData :userDataReducer,
    Messages: MessagesReducer
  },
  devTools: true,
});
export type RootState = ReturnType<typeof storeApp.getState>;
export type HomeDispatch = typeof storeApp.dispatch;