const express = require("express");

const router = express.Router();

const fruitController = require('../controllers/fruitController');

//  ==== INDEX ====
router.get("/", (req, res) => {
  res.render("Index", { fruits: fruits });
});
// router.get('/fruits', (req, res)=>{
//     res.send(fruits)
// });

// ==== NEW ====
router.get("/new", fruitController.fruitIndex);

//  ==== CREATE ====
router.post("/", (req, res) => {
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
router.get("/:index", (req, res) => {
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
router.get("/:index/edit", (req, res) => {
  res.render("Edit", {
    fruit: fruits[req.params.index],
    index: [req.params.index],
  });
});

//  ==== UPDATE ====
router.put("/:index", (req, res) => {
  console.log(req.body);
  req.body.readyToEat === "on"
    ? (req.body.readyToEat = true)
    : (req.body.readyToEat = false);
  fruits.splice(req.params.index, 1, req.body);
  // fruits[req.params.index] = req.body;
  res.redirect("/");
});

//  ==== DELETE ====
router.delete("/:index", (req, res) => {
  fruits.splice(req.params.index, 1);
  console.log("deleting");
  res.redirect("/");
});
 

module.exports = router;