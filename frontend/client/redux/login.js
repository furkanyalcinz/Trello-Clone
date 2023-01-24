import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loginPageIsOpen:false,
    isLoggedIn:false
}

export const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        loginPageToggle(state){
            state.loginPageIsOpen = !state.loginPageIsOpen
        },
        loggedin(state){
            state.isLoggedIn = !state.isLoggedIn
        }
       
    },
});
export const {loginPageToggle, loggedin} = loginSlice.actions;
export default loginSlice.reducer;