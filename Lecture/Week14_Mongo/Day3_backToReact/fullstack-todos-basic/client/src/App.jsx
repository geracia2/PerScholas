import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

export default function App() {
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState("");
  let [listType, setListType] = useState("all");

  // first connect
  useEffect(() => {
    const getData = async () => {
      try {
        // using vite.config we use a proxy to add the before of 'http://localhost:8080'
        // the proxy is just making this cleaner
        const response = await fetch("/api/test");
        const data = await response.json()
        console.log(data);
        
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  function addToList() {
    let item = {
      text: input,
      completed: false,
      id: crypto.randomUUID(), // 2188jd-293483-dfllkaksldf
    };

    let newTodos = [...todos, item];

    setTodos(newTodos);
    setInput("");
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  function deleteTodo(id) {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }

  function completeTodo(id) {
    let newTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todos ({listType})</h1>

      <TodoList
        todos={todos}
        listType={listType}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />

      <input value={input} onChange={handleChange} />
      <button onClick={addToList}>Submit</button>

      <br />
      <br />

      <button onClick={() => setListType("all")}>All</button>
      <button onClick={() => setListType("complete")}>Completed</button>
      <button onClick={() => setListType("incomplete")}>Incomplete</button>
    </div>
  );
}
