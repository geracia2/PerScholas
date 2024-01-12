// to use ES6 add "type": "module", to package.json
// in your exports of data change module.export to export default
// add the file extension to imports
const express = require("express"); // commonJS
// import express from 'express'; // es6
const fruitsRoutes = require('./routes/fruitRoutes')

const methodOverride = require("method-override");

const app = express();
const PORT = 5000;

// set modules
// setup engine
const jsxEngine = require("jsx-view-engine"); // commonJS
// import jsxEngine from 'jsx-view-engine'; // es6

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// MIDDLEWARE
// near the top, around other app.use() calls, Above ROUTES
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// use /fruits first, everything in Routes should use /fruits now
app.use('/fruits', fruitsRoutes)

// ROUTES
//  ==== ROOT ====
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, (req, res) => {
  console.log(`Listening to port: ${PORT}`);
});
