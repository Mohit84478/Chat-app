import {configureStore} from '@reduxjs/toolkit'
import usereducer from "./userslice.js"
 const store=configureStore({
    reducer:{
user:usereducer
    }
 });
 export default store;