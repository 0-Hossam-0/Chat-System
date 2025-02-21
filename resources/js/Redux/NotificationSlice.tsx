import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  message: '',
  type: '',
};

const notificationSlice = createSlice({
  name: 'Notification',
  initialState: initialState,
  reducers: {
    setNotification: (state, action) => {
      state.message = action.payload.message;
      state.show = action.payload.show;
      state.type = action.payload.type;
    },
    resetNotification: (state) => {
      state.show = false;
    },
  },
});

export const { setNotification, resetNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
