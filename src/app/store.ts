import {combineReducers, createStore} from "@reduxjs/toolkit";
import queryReducer from "../features/query";

const reducer = combineReducers({
  query: queryReducer,
});

const store = createStore(reducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;