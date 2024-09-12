import { configureStore } from '@reduxjs/toolkit';
import reducers from './userslice'; // Ensure the path is correct

const store = configureStore({
    reducer: {
        user: reducers
    }
});

export default store;
