import { configureStore } from "@reduxjs/toolkit";
import Snackbar from "../Hooks/Snackbar/Reducers";

export const store = configureStore({
    reducer:{
        snackbar : Snackbar
    }
})