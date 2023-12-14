// _/- src/features/featureComponent/featureSlice.jsx -\_

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

// export a slice of state with reducers
export const counterSlice = createSlice({
  name: "counter", // semantic name of  you slice
  //initialState, // written like this to say initialState: initialState, could be initialState: []
  initialState: count,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    deccrement: (state) => {
      state.count -= 1;
    },
    // add more actions
  },
});

// named export of reducers, add more actions here too
export const { increment, decrement } = counterSlice.actions;

// final export of reducer
export default counterSlice.reducer;