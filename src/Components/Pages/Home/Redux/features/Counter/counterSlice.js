import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
    name: 'counter',

    initialState: {
        count: 0
    },

    reducers: {

        increment: (state) => {
            state.count = state.count + 1;
        },

        decrement: (state) => {
            state.count = state.count - 1;
        },

        incrementByValue: (state, actions) => {
            state.count = state.count + actions.payload;
        },

        decrementByValue: (state, actions) => {
            state.count = state.count - actions.payload;
        }

    }
})


export const { increment, decrement, incrementByValue, decrementByValue } = counterSlice.actions;

export default counterSlice.reducer;