import { createSlice } from "@reduxjs/toolkit";
const getchat = createSlice({
    name: "chatmsg",
    initialState: {
        messagechat: null
    },
    reducers: {
        Messagechannel: (state, action) => {
            state.messagechat = action.payload;
        }
    }})
   export const {Messagechannel}=getchat.actions
   export default getchat.reducer;