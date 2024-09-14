import { configureStore } from '@reduxjs/toolkit';
import reducers from './userslice'; // Ensure the path is correct
import msgreducer from './msgslice'
const store = configureStore({
    reducer: {
        user: reducers,
        chatmsg:msgreducer

    }
});

export default store;
