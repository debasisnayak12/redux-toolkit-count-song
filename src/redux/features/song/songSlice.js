import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../counter/counterSlice";

const initialState = "";

const songSlice = createSlice({
    name: "song",
    initialState: initialState,
    reducers: {
        selectedSong: (state, action) => action.payload,
    },
    extraReducers: (builder) => {
        builder.addCase(reset, (state) => initialState)
    }
})

export const {selectedSong} = songSlice.actions;

export default songSlice.reducer;