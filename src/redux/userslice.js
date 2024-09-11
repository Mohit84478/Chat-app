import {createSlice} from '@reduxjs/toolkit'
const userslice= createSlice({
    name:"user",
    initialState:{
        authuser:"none",

    },
    reducers:{
        setauth:(state,action)=>{
            state.action=action.payload
        }
    }
})
export const {setauth}=userslice.actions;
export default userslice.reducer;