import { combineReducers } from "redux";
import { contactReducer } from "./contacts";
import { userReducer } from "./user";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  contactReducer, userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware()/*.concat(logger)*/
});