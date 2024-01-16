// Modules
const express = require("express");
const jsxEngine = require("jsx-view-engine");
const mongoose = require('mongoose')
require('dotenv').config()
const mongoConfig = require('./configure')
// Database Models
const pokemon = require("./models/pokemon"); // import in controller and views too, may not need here

// Routes
const pokemonRoutes = require("./routes/pokemonRoutes");

// Express app
const app = express();
const PORT = 3000;

// Configure the app (app.set)
// app.set(); // if not using View
app.set("view engine", "jsx");
// setup our view engine
app.engine("jsx", jsxEngine());

// Mount middleware (app.use)
// all things that happen between a server connection and a request
// (set default root, for all things following '/' in specified route)
// if '/pokemon' is hit, use pokemonRoutes with '/pokemon/rout' after '/'
app.use("/pokemon", pokemonRoutes); // remove if not using Router

// mongoose.connect(process.env.MONGO_UI)


// Mount routes [root only if using MVC]
// in MVC flow: Server > Routes > Controllers > Views
// ==ROOT==
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});
// if not using routes, fre get would be:
// app.get("/pokemon", (req, res) => {
//   res.send(pokemon);
// });


app.listen(PORT, () => {
  console.log(`listening to port: ` + PORT);
  mongoConfig();
});
