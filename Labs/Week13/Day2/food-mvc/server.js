// to use ES6 add "type": "module", to package.json
// in your exports of data change module.export to export default
// add the file extension to imports

const express = require("express"); // commonJS
// import express from 'express'; // es6

const fruits = require("./modules/fruits"); // commonJS
// import fruits from './modules/fruits.js'; // es6

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

// ROUTES
//  ==== ROOT ====
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//  ==== INDEX ====
app.get("/fruits", (req, res) => {
  res.render("Index", { fruits: fruits });
});
// app.get('/fruits', (req, res)=>{
//     res.send(fruits)
// });

// ==== NEW ====
app.get("/fruits/new", (req, res) => {
  // {fruits: fruits} can be just {fruits}
  res.render("New", { fruits });
});

//  ==== CREATE ====
app.post("/fruits", (req, res) => {
  // req.boy gives us an obj with our key.value inputs
  // res.send(req.body);
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true; //do some data correction
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false; //do some data correction
  }
  fruits.push(req.body);
  console.log(req.body);
  //   res.redirect("/fruits"); //send the user back to /fruits
});

//  ==== SHOW ====
app.get("/fruits/:index", (req, res) => {
  // load a 'view', look in views folder, find a file called "Show"
  // second param must be an object
  // this gives us the prop of fruit, which can be destructured
  res.render("Show", {
    fruit: fruits[req.params.index],
    index: [req.params.index],
  });
  // send (this specific item) to the browser
  // res.send(fruits[req.params.index])
});

//  ==== EDIT ====
app.get("/fruits/:index/edit", (req, res) => {
  res.render("Edit", {
    fruit: fruits[req.params.index],
    index: [req.params.index],
  });
});

//  ==== UPDATE ====
app.put("/fruits/:index", (req, res) => {
  console.log(req.body);
  req.body.readyToEat === "on"
    ? (req.body.readyToEat = true)
    : (req.body.readyToEat = false);
  fruits.splice(req.params.index, 1, req.body);
  // fruits[req.params.index] = req.body;
  res.redirect("/fruits");
});

//  ==== DELETE ====
app.delete('/fruits/:index', (req, res) => {
    fruits.splice(req.params.index, 1)
    console.log('deleting')
    res.redirect('/fruits')
})

app.listen(PORT, (req, res) => {
  console.log(`Listening to port: ${PORT}`);
});
