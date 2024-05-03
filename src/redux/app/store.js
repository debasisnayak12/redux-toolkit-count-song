import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import songReducer from "../features/song/songSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        song: songReducer,
    }
})

export default store;