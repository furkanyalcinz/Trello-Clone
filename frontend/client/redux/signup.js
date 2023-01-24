import { createSlice } from "@reduxjs/toolkit";

const initialState={
    signUpPageIsOpen:false,
}

export const signupSlice = createSlice({
    name:"signup",
    initialState,
    reducers:{
        signupPageToggle(state){
            state.signUpPageIsOpen = !state.signUpPageIsOpen
        },
       
    },
});
export const {signupPageToggle} = signupSlice.actions;
export default signupSlice.reducer;