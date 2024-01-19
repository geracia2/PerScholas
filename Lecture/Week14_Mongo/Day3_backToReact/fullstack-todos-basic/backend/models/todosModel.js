const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  text: { type: String },
  completed: { type: Boolean, default: false },
});

const Todo = mongoose.model("todos", todoSchema);
module.exports = Todo;

// what we are looking at:
// function addToList() {
//   let item = {
//     text: input,
//     completed: false,
//     id: crypto.randomUUID(), // 2188jd-293483-dfllkaksldf
//   };

//   let newTodos = [...todos, item];

//   setTodos(newTodos);
//   setInput("");
// }
