import { useState, useContext } from 'react'
import { useCounterContext } from "./counterContext"

function App() {

  const [input, setInput] = useState(0)
  const { dispatch, counter } = useCounterContext();
  // console.log(dispatch, counter)

  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleMultiply() {
    dispatch({type: "MULTIPLY", payload: input})
    setInput(0);
  }

  return (
    <div>
      <h3> Counter: {counter}</h3>
      <input type="number" onChange={handleChange} value={input}/>
      <br />
      <button onClick={() => dispatch({type: "INCREASE"})}>Increase</button>
      <br /> <br />
      <button onClick={() => dispatch({type: "DECREASE"})}>Decrease</button>
      <br /> <br />
      <button onClick={handleMultiply}>Times Input</button>
      <br /><br />
      <button onClick={() => dispatch({type: "RESET"})}>Reset Counter</button>
    </div>
  )
}

export default App
