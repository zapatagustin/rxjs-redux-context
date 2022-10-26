import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/user";

export const TumaStore = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})