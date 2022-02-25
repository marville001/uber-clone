import { configureStore, createStore } from "@reduxjs/toolkit";
import navReducver from "./slices/navSlice"

export const store = configureStore({
    reducer:{
        nav: navReducver
    }
})