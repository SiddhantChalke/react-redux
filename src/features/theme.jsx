import { createSlice } from "@reduxjs/toolkit";

const initStateValue = '';

export const themeSlice = createSlice({
    name:'theme',
    // initial state
    initialState:{value:initStateValue},
    // fns to alter the state
    reducers:{
        changeColor:(state, action)=>{
            state.value = action.payload;
        },
        
    }
})

export const {changeColor} = themeSlice.actions;

export default themeSlice.reducer;