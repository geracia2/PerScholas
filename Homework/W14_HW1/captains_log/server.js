require("dotenv").config();
// Modules
const express = require("express");
const jsxEngine = require("jsx-view-engine");
// Database Models
// import in controller and views too, may not need here
const mongoConfig = require("./config");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// import Routes
const logRoutes = require("./routes/logRoutes");

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
app.use(methodOverride("_method"));
// allow url parsing, req.body !! must be above routes !!
app.use(express.urlencoded({ extended: true }));
// (set default root, for all things following '/' in specified route)
// if '/pokemon' is hit, use pokemonRoutes with '/pokemon/rout' after '/'
app.use("/logs", logRoutes); // remove if not using Router

// Mount routes [root only if using MVC]
// in MVC flow: Server > Routes > Controllers > Views
// ==ROOT==
app.get("/", (req, res) => {
  res.send("Welcome to the logs app!");
});
// if not using routes, fre get would be:
// engine.method('route/:params', callback=>{req or res})
// app.get("/pokemon", (req, res) => {
//   res.send(pokemon);

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
  // connect later for  when we use mongoose and mongoDB
  mongoConfig();
});
