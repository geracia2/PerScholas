// Require modules
const express = require("express");
const jsxEngine = require('jsx-view-engine');

// Create the Express app
const app = express();
const PORT = 3000;

// Configure the app (app.set)
app.set('view engine', 'jsx');
// setup our view engine
app.engine('jsx', jsxEngine());


// Mount middleware (app.use)


// Mount routes [root only if using MVC]
app.get("/", (req, res) => {
  res.send("Root");
});

app.listen(PORT, () => {
  console.log(`listening to port: ` + PORT);
});
