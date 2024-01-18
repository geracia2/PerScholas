// Modules
const express = require("express");
// load Models from DB
const Logs = require("../models/LogsModel");
// load router
const router = express.Router();

// load controller
// const logController = require('../controllers/logController')

// !! b/c of Router, all following routes will have
// /log in front of them

// =======================================

// == INDEX ==
// /logs/
// router.get('/', logController.logIndex)
router.get("/", async (req, res) => {
  // res.send('you are on logs index') // test
  let response;
  try {
    response = await Logs.find();
    console.log(`Logs find()`, response);
  } catch (error) {
    console.log(`! Logs.find() error: `, error);
  }
  res.render("Index", { logsProp: response });
});

// == NEW ==
// url: localhost:3000/logs/new
// router.get('/new', logController.logNew)
router.get("/new", (req, res) => {
  // res.send("new"); // test
  res.render("New");
});

// == SHOW ==
router.get("/:index", async (req, res) => {
  //response = renderThis(views/'Show', props{ pokeProp= pokemonArray[i of paramFromRoutes]})
  let response;
  try {
    response = await Logs.findById(req.params.index);
    console.log('Logs.findById: ', response);
  } catch (error) {
    console.log(`! Logs.findById error:`, error);
  }
  res.render("Show", { logsProp: response });
});

// == CREATE ==
// router.post('/', logController.logCreate)
router.post("/", async (req, res) => {
  // res.send("received"); // test
  req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
  // res.send(req.body); // test
  try {
    let result = await Logs.create(req.body);
    console.log("data saved ", result);
  } catch (error) {
    console.log("MongoDB Create error: ", error);
  }
  res.redirect("/logs");
});

// // == EDIT ==
// router.get('/:index/edit', logController.logEdit)

// == DELETE ==
router.delete("/:index", async (req, res) => {
  try {
    await Logs.findByIdAndDelete(req.params.index);
    console.log("Deleting: " + Logs.findByIdAndDelete(req.params.index));
  } catch (error) {
    console.log(error);
  }
  res.redirect("/logs");
});

// // == UPDATE ==
// router.put('/:index', logController.logUpdate)

// export has to stay as router, the above is updating the module we loaded in
module.exports = router;
