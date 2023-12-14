import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     count: 0
// }

const initialState = 0;


const counterSlice = createSlice({
    name: "counter",
    // initialState = initialState (the Variable on 3)
    initialState,
    reducers: {
        increase: (state) => {
            return state = state + 1
            // return {count: state.count + 1}
        },
        decrease: (state) => {
            return state -= 1
        },
        multiply: (state, action) => {
            return state *= action.payload
        },
        reset: (state) => {
            return initialState
        }
    }
})



export const { increase, decrease, multiply, reset } = counterSlice.actions

export default counterSlice.reducer;