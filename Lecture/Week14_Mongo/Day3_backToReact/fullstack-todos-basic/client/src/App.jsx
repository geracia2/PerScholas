import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

export default function App() {
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState("");
  let [listType, setListType] = useState("all");

  // first connect,
  // R in CRUD
  useEffect(() => {
    const getData = async () => {
      try {
        // using vite.config we use a proxy to add the before of 'http://localhost:8080'
        // the proxy is just making this cleaner
        // const response = await fetch("/api/test");
        const response = await fetch("/api/todos");
        const data = await response.json();
        console.log(data);
        setTodos(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  // C in CRUD
  async function addToList() {
    let todo = { text: input };

    try {
      const url = "/api/todos";
      const options = {
        method: "POST", // GET, POST, PUT, DELETE
        body: JSON.stringify(todo), // transferring data needs to be strings, add express.json() to the server to receive
        headers: {
          // headers just telling the receiving server what the request type is, basically to take this string and use a json method to decode?
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, options);
      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
      console.log(newTodo);
      setInput("");
    } catch (error) {
      console.warn(error);
    }

    // how we were constructing the items before:
    // let item = {
    // text: input,
    // completed false is handled by the schema and id by MongoDB
    // completed: false,
    // id: crypto.randomUUID(), // 2188jd-293483-dfllkaksldf
    // };
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  // D in CRUD
  async function deleteTodo(id) {
    try {
      await fetch(`/api/todos/${id}`, {
        method: "DELETE",
        // delete doesn't need a body or header, just the ID
      });
      let newTodos = todos.filter((item) => item._id !== id);
      setTodos(newTodos);
    } catch (err) {
      console.warn(err);
    }
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
