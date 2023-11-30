import './App.css';
import {useState} from 'react'
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  function handleChange(evt){
    setInput(evt.target.value)
  }
  function handleClick(){
    if (input !==''){
      // let newTodos = todos.slice() // without arguments slice just returns a copy
      // newTodos.push(input) // we don't want to directly modify the state var todos because it will not be redrawn by setState()
      // setTodos(newTodos)
      
      let newObjTodo = {
        text: input,
        completed: false,
        id: crypto.randomUUID()
      }

      // setTodos( prevTodos => [...prevTodos, input] ) // updater function
      // setTodos([...prevTodos, input]) // shorter way to do the above
      setTodos([...todos, newObjTodo]) 
      // clear text field
      setInput('') 
    } else {
      alert('Please add something')
    }

  }
  return (
    <div className="App">
      <h1>Todos</h1>
      {/* <input type="text" value={input} onChange={handleChange} /> */}
      {/* you can skip the handleChange if your function is small and do the following */}
      {/* since its an event listener and in JSX we can skip a lot */}
      <input type="text" value={input} onChange={e => setInput(e.target.value)} /> 
      <button onClick={handleClick}>Add</button>
      <>
        <ul>
          <button></button>
          {todos.map((item, index)=>(
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </>
    </div>
  );
}

export default App;
