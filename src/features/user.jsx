import { createSlice } from "@reduxjs/toolkit";

const initStateValue = {name:'', age:0,email:''};

export const userSlice = createSlice({
    name:'user',
    // initial state
    initialState:{value:initStateValue},
    // fns to alter the state
    reducers:{
        login:(state, action)=>{
            state.value = action.payload;
        },
        logout:(state)=>{
            state.value = initStateValue;
        }
    }
})

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;