// immediately import and fire function
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const Todo = require("./models/todosModel");

const app = express();
const PORT = 8080;

// load connection to server
const connectDB = require("./config");

// solves issues of connecting to a server from a react app
// app.use(cors())

// format request bodies to json, just like url_encode
// body.parser does this too, express just came out with their own
// axios will automatically convert the object to the json
app.use(express.json());
// instead of this:
// allow url parsing, req.body !! must be above routes !!
app.use(express.urlencoded({ extended: true }));

app.get("/api/test", (req, res) => {
  console.log(`test`);
  // res.send("Server says hello client");
  // server needs to send json when client rendering, not when server rendering
  res.json("Server says hello client");
});

// ==INDEX== :: GET
app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err);
  }
});

// ===CREATE== :: POST
app.post('/api/todos', async (req, res) => {
  try {
      console.log('POST /api/todos')
      console.log(req.body)
      const todo = await Todo.create(req.body)
      res.status(200).json(todo)
  } catch(err) {
      console.log(err.message)
      res.status(400).json(err)
  }
})

// ===DELETE== :: DELETE
app.delete('/api/todos/:id', async (req, res) => {
  try {
      console.log('DELETE /api/todos/:id')
      await Todo.findByIdAndDelete(req.params.id)
      res.status(200).json({ message: 'successfully deleted' })
  } catch(err) {
      console.log(err.message)
      res.status(400).json(err)
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port: `, PORT);
  connectDB();
});
