
import './App.css';
import{ useState } from 'react' // special function

// what is happening inside useState():
// useState(initialState) {
// return[value, value]
// return[stateValue, functionThatChanges()]
// return[stateVariable, setState()]
// }

function App() {
  // let stateArray = useState(0) // -> [stateVariable, functionThatChangesIt]
  // let counter = stateArray[0]
  // let setCounter = stateArray[1]

  // array destructuring, replaced the above 3 lines.
  // [stateVariable, functionThatChangesIt] = initialState('anything')
  let [counter, setCounter] = useState(0)
  // let [counter, setCounter] = useState('0') if your initial state is a string, it will just concatenate


  function handleInc(evt) {
    // alert('works')
    // counter++  can't treat it like this. You need to grab the variable from memory with setCounter
    setCounter(counter + 1) 
  }

  // this is also like having an eventListener so you can use event as a parameter
  function handleDec(evt){
    // passing the next state directly
    // setCounter(counter - 1)
    // updater function
    // setCounter(previousState => {return nextState})
    setCounter(counter => counter - 1)
  }

  const [typedNumber, setTypedNumber] = useState(0)
  function handleTypedNumber(evt) {
    // let newValue = evt.target.value
    // setTypedNumber(newValue)
    // same as the above 2 lines
    setTypedNumber(evt.target.value)
  }
  function handleTypedUpdate() {
    // let a = counter;
    // let b = typedNumber;
    // console.log(a)
    // console.log(b)
    // setCounter(a + b)
    setCounter(counter + Number(typedNumber)) // you get a string from form so you need to turn it into an integer
    // setCounter(a => a + typedNumber)
  }
  

  const [typedText, setTypedText] = useState('hello')
  // remember this is like an event listener, the event is 
  function handleTextChange(evt) {
    setTypedText(evt.target.value);
  }

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <br />
      <input type="number" value={typedNumber} onChange={handleTypedNumber} />
      <input type="button" value="increment" onClick={handleTypedUpdate} />
      <br />
      <hr />
{/* -------------------- */}
      {/* value is what is in the field, onChange is a react function listening for changes with a parameter of whatever you put in the following {} */}
      <input value={typedText} onChange={handleTextChange} />
      <p>you typed: {typedText}</p>
      {/* a headless function allows us to add a function without it being called automatically by JSX */}
      <button onClick={()=> setTypedText('hello')}>Reset</button>
    </div>
  );
}

export default App;
