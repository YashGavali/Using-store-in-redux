import { combineReducers } from "@reduxjs/toolkit";
import { transactionReducer } from "./transaction";

export const reducer = combineReducers({
    transactionReducer,
})