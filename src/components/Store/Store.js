import { configureStore } from "@reduxjs/toolkit";
import Snackbar from "../Hooks/Reducers/SnackbarReducers";

export const store = configureStore({
    reducer:{
        snackbar : Snackbar
    }
})