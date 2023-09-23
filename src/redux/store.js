import dataReducers from "./reducer/reducerIndex";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: dataReducers
})

export  default store;