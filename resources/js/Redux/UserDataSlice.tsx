import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserDataProps } from '../Types/Interfaces';
import { removeLoadingState, showLoadingState } from './LoadingSlice';

const initialState: { data: UserDataProps | null; error: string | null; loading: boolean } = {
  data: null,
  error: null,
  loading: false,
};

export const fetchUserData = createAsyncThunk<UserDataProps, void, { rejectValue: string }>('userData/fetchUserData', async (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    dispatch(showLoadingState());
    const response = await fetch(`/api/contacts`);

    dispatch(removeLoadingState());

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const data: UserDataProps = await response.json();
    return data;
  } catch (error) {
    dispatch(removeLoadingState());
    return rejectWithValue((error as Error).message);
  }
});

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    createChat(state, action) {
      state.data?.chats.push({
        name: action.payload.name,
        createdAt: null,
        lastMessage: null,
        id: action.payload.id,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { createChat } = userDataSlice.actions;
export default userDataSlice.reducer;
