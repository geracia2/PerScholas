// Modules
const express = require("express");
const jsxEngine = require("jsx-view-engine");

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
// (set default root, for all things following '/' in specified route)
// if '/pokemon' is hit, use pokemonRoutes with '/pokemon/rout' after '/'
app.use("/pokemon", pokemonRoutes); // remove if not using Router


// Mount routes [root only if using MVC]
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
});
