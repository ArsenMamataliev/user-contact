import { configureStore } from "@reduxjs/toolkit";
import userConstactSlice from "./userConstactSlice";

const store = configureStore({
    reducer: {
    userContact: userConstactSlice
    },
});

export default store;