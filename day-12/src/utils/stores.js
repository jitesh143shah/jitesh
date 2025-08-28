import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./createSlice "

const store = configureStore({
    reducer: {
        counter: counterSlice,
    }
});
export default store

