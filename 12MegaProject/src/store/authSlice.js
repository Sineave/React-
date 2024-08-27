import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null
}

const authSlice = createSlice({
    name: 'auth',
    state: initialState,
    reducers:{
        login:(state,action)=>{
            state.status = true ;
            state.userData = action.payload.userData;
        },
        logout:(state)=>{
            state.status = false;
        }
    }
});

export const {login , logout} = authSlice.actions;

export default authSlice.reducers;