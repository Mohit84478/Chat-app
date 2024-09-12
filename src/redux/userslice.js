import {createSlice} from '@reduxjs/toolkit'
const userslice= createSlice({
    name:"user",
    initialState:{
        authuser:null,
        otherUser:[]

    },
    reducers:{
        setauth:(state,action)=>{
            state.authuser=action.payload
        },
        otherUsers:(state,action)=>{
            state.otherUser=[...state.otherUser,action.payload]
        }
    }
})
export const {setauth,otherUsers}=userslice.actions;
export default userslice.reducer;