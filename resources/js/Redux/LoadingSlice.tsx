import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    show:false,
}

const loadingSlice = createSlice({
    name:'loadingLayout',
    initialState:initialState,
    reducers:{
        showLoadingState: (state) => {
            state.show = true;
        },
        removeLoadingState: (state) => {
            state.show = false;
        }
    }
})

export const {showLoadingState, removeLoadingState} = loadingSlice.actions;
export default loadingSlice.reducer; 