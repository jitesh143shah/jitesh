import { createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state, action) => {
            console.log("increment");
            console.log(action.payload)
            state.value = state.value + 1;


        },
        decrement: (state, action) => {
            console.log("decrement");
            console.log(action.payload)
            state.value = state.value - 1;


        },
        reset: (state, action) => {
            state.value = state.value * 0;
        },

    },
});
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;