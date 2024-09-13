import {createSlice} from '@reduxjs/toolkit'
const userslice= createSlice({
    name:"user",
    initialState:{
        authuser:null,
        otherUser:null,
        selectuser:null

    },
    reducers:{
        setauth:(state,action)=>{
            state.authuser=action.payload
        },
        otherUsers:(state,action)=>{
            state.otherUser=action.payload
        },
        setselectuser:(state,action)=>{
            state.selectuser=action.payload
        }
    }
})
export const {setauth,otherUsers,setselectuser}=userslice.actions;
export default userslice.reducer;