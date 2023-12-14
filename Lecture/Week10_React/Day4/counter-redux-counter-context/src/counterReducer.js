import { initialState } from "./counterContext"

export default function counterReducer(state, action) {
    console.log(state)
    switch(action.type) {
        case "INCREASE":
            return state += 1
        case 'DECREASE':
            return state -= 1
        case "MULTIPLY":
            return state *= action.payload
        case "RESET":
            return initialState
        default:
            return state
    }
}