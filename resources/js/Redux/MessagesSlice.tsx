import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { MessageProps } from '../Types/Interfaces';
import type { RootState } from './StoreApp';

const initialState = {
  messages: [] as MessageProps[],
  loading: false,
  error: null as string | null,
};


export const fetchUserMessages = createAsyncThunk<MessageProps[], string, { state: RootState; rejectValue: string }>('userData/fetchUserMessages', async (chatID, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await fetch(`/api/messages/${chatID}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data: MessageProps[] = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

const messagesSlice = createSlice({
  name: 'messages',
  initialState: initialState,
  reducers: {
    // addMessage(state, action) {
    //   state.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
      state.loading = false;
      state.error = null;
    }).addCase(fetchUserMessages.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchUserMessages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
  },
});

// export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
