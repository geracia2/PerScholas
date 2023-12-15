// _/- src/app/store.jsx -\_

import { configureStore } from "@reduxjs/toolkit";
// this was export default counterSlice.reducer
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    // state: stateReducer, // try to always have a ,
    counter: counterReducer,
  },
});
