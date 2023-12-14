import { createContext, useContext, useReducer, useState } from "react";
import counterReducer from "./counterReducer";

const CounterContext = createContext();

export function useCounterContext() {
    return useContext(CounterContext);
}

export let initialState = 0;


export default function CounterProvider(props) {
    let [counter, dispatch] = useReducer(counterReducer, initialState);
    

    return(
    <CounterContext.Provider value={{ counter, dispatch }}>
        {props.children}
    </CounterContext.Provider>
    )
}