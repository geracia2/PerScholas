
import './App.css';
import{ useState } from 'react' // special function

// calc

// addition
// sub
// multiply 
// divide

// reset input to ''

function App() {
  
//  result --------------------------
  let [result, setResult] = useState(0)

  function handleInc(evt) {
      setResult(result + 1) 
  }

  function handleDec(evt){
    setResult(result => result - 1)
  }
//  text field --------------------------
  const [typedInput, setTypedInput] = useState(0)

  function handleTypedInput(evt) {
    setTypedInput(evt.target.value)
  }

// setup pure functions -------------------
const [formula, setFormula] = useState('')
// const [formConcat, setFormConcat] = useState('')
  function handleAddition() {
    setResult(result + Number(typedInput));
    // change a formula state
    setTypedInput('')
    // updated  value of the formula 
    setFormula(result + ' + ' + typedInput)
  }
  function handleSubtraction() {
    setResult(result - Number(typedInput))
    setTypedInput('')
    setFormula(result + ' - ' + typedInput)
  }
  function handleMultiply() {
    setResult(result * Number(typedInput))
    setTypedInput('')
    setFormula(result + ' * ' + typedInput)
  }
  function handleDivide() {
    setResult(result / Number(typedInput))
    setTypedInput('')
    setFormula(result + ' / ' + typedInput)
  }
function getFormula() {
    setFormula(result + ' / ' + typedInput)
//     // return result + formula + typedInput
//     // setFormConcat(result + ' ' + formula + ' ' + typedInput)
//     // setFormConcat(result + typedInput)
//     setFormConcat(formula)
//     console.log(`result: ${result}`);
//     console.log(`formula: ${formula}`);
//     console.log(`typed: ${typedInput}`);
    console.log('test')
}
function clearTypeInput(){
    setTypedInput('')

}

return (
    <div className='container'>
        {/* {currentresult} {formula} {typedInput}*/}
        {/* <p>Formula <input value={()=> result + ' ' + formula + ' ' + typedInput} /> </p> */}
        <div className='cal'>
        <span>Calculate</span>
        <input className='formula' value={formula} />
        </div>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
        <input type="number" value={typedInput} onChange={handleTypedInput} />
        {/* <button onClick={() => {handleAddition(); getFormula();}}>Addition</button> */}
        {/* <button onClick={()=> {handleAddition; getFormula}}>Addition</button> */}
        <div className='operators'>
        <button onClick={handleAddition}>Addition</button>
        <button onClick={handleSubtraction}>Subtraction</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
        </div>
        <h1>Result: {result}</h1>
    </div>
  );
}

export default App;
