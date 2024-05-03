import { createSlice } from "@reduxjs/toolkit";

const initialState = {name:"deva", age:25, city:"Jharkhand"}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increase: (state, action) => {state.age = state.age + (action.payload || 1)},
        decrease: (state, action) => {state.age = state.age - (action.payload || 1)},
        reset: state => initialState,
    }
})

export const {increase, decrease, reset} = counterSlice.actions;

// const counterReducer = counterSlice.reducer
export default counterSlice.reducer;