const fruits = require("../modules/fruits"); // commonJS
// import fruits from './modules/fruits.js'; // es6

//  ==== INDEX ====
const fruitIndex = (req, res) => {
  res.render("Index", { fruits: fruits });
};
// router.get('/fruits', (req, res)=>{
//     res.send(fruits)
// });

// ==== NEW ====
const fruitNew = (req, res) => {
  // {fruits: fruits} can be just {fruits}
  res.render("New", { fruits });
};

//  ==== CREATE ====
const fruitCreate = (req, res) => {
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
};

//  ==== SHOW ====
const fruitShow = (req, res) => {
  // load a 'view', look in views folder, find a file called "Show"
  // second param must be an object
  // this gives us the prop of fruit, which can be destructured
  res.render("Show", {
    fruit: fruits[req.params.index],
    index: [req.params.index],
  });
  // send (this specific item) to the browser
  // res.send(fruits[req.params.index])
};

//  ==== EDIT ====
const fruitEdit = (req, res) => {
  res.render("Edit", {
    fruit: fruits[req.params.index],
    index: [req.params.index],
  });
};

//  ==== UPDATE ====
const fruitUpdate = (req, res) => {
  console.log(req.body);
  req.body.readyToEat === "on"
    ? (req.body.readyToEat = true)
    : (req.body.readyToEat = false);
  fruits.splice(req.params.index, 1, req.body);
  // fruits[req.params.index] = req.body;
  res.redirect("/");
};

//  ==== DELETE ====
const fruitDelete = (req, res) => {
  fruits.splice(req.params.index, 1);
  console.log("deleting");
  res.redirect("/");
};

module.exports = {
  fruitCreate,
  fruitDelete,
  fruitEdit,
  fruitNew,
  fruitIndex,
  fruitShow,
  fruitUpdate,
};
