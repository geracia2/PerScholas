import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

// make fetch easier
import axios from "axios";

export default function App() {
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState("");
  let [listType, setListType] = useState("all");

  function handleChange(event) {
    setInput(event.target.value);
  }

  // first connect,
  // Reuse in CRUD
  useEffect(() => {
    const getData = async () => {
      try {
        // using vite.config we use a proxy to add the before of 'http://localhost:8080'
        // the proxy is just making this cleaner
        // const response = await fetch("/api/test");
        // const response = await fetch("/api/todos");
        // const data = await response.json();
        // console.log(data);
        // setTodos(data);

        // axios option:
        const response = await axios.get('/api/todos')
        console.log(response)
        setTodos(response.data)
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
      // optoin 1 use fetch for "create" route
      //   const url = "/api/todos";
      //   const options = {
      //     method: "POST", // GET, POST, PUT, DELETE
      //     body: JSON.stringify(todo), // transferring data needs to be strings, add express.json() to the server to receive
      //     headers: {
      //       // headers just telling the receiving server what the request type is, basically to take this string and use a json method to decode?
      //       "Content-Type": "application/json",
      //     },
      //   };
      //   const response = await fetch(url, options);
      //   const newTodo = await response.json();
      //   setTodos([...todos, newTodo]);
      //   console.log(newTodo);
      //   setInput("");
      // } catch (error) {
      //   console.warn(error);
      // }

      // option 2 axios with destructured response
      const response = await axios.post("/api/todos", todo);

      setTodos([...todos, response.data]);
      setInput("");
    } catch (err) {
      console.log(err);
    }

    // how we were constructing the items before:
    // let item = {
    // text: input,
    // completed false is handled by the schema and id by MongoDB
    // completed: false,
    // id: crypto.randomUUID(), // 2188jd-293483-dfllkaksldf
    // };
  }

  // D in CRUD
  async function deleteTodo(id) {
    try {
      //   OPTION 1: use fetch for "delete" route
      //   let url = `/api/todos/${id}`;
      //   let options = {
      //     method: "DELETE",
      //   }; // delete doesn't need a body or header, just the ID
      //   await fetch(url, options);
      //   let newTodos = todos.filter((item) => item._id !== id);
      //   setTodos(newTodos);
      // } catch (err) {
      //   console.warn(err);
      // }

      // OPTION 2: use axios
      await axios.delete(`/api/todos/${id}`);
      let newTodos = todos.filter((todo) => todo._id !== id);
      setTodos(newTodos);
    } catch (err) {
      console.log(err);
    }
  }

  // Update in CRUD
  async function completeTodo(id) {
    try {
      let newTodos = [...todos];
      let todo = newTodos.find((item) => item._id === id);
      todo.completed = !todo.completed;

      // OPTION 1: use fetch for "update" route
      //   const url = `/api/todos/${id}`;
      //   const options = {
      //     method: "PUT",
      //     body: JSON.stringify(todo),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   };
      //   const response = await fetch(url, options);
      //   setTodos(newTodos);
      // } catch (err) {
      //   console.log(err);
      // }

      // OPTION 2: use axios
      await axios.put(`/api/todos/${id}`, todo);
      setTodos(newTodos);
    } catch (err) {
      console.log(err);
    }
    // let newTodos = todos.map((item) =>
    //   item.id === id ? { ...item, completed: !item.completed } : item
    // );
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
