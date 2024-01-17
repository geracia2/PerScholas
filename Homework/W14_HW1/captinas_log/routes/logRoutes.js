// Modules
const express = require("express");

// load router
const router = express.Router();

// load controller
// const logController = require('../controllers/logController')

// load Models from DB
const Logs = require("../models/Logs");

// !! b/c of Router, all following routes will have
// /log in front of them

// =======================================

// // == INDEX ==
// // /log/
// router.get('/', logController.logIndex)

// == NEW ==
// url: localhost:3000/logs/new
// router.get('/new', logController.logNew)
router.get("/new", (req, res) => {
  // res.send("new"); // test
  res.render("New");
});

// // == SHOW ==
// router.get('/:index', logController.logShow)

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
  res.redirect('/')
});

// // == EDIT ==
// router.get('/:index/edit', logController.logEdit)

// // == DELETE ==
// router.delete('/:index', logController.logDelete)

// // == UPDATE ==
// router.put('/:index', logController.logUpdate)

// export has to stay as router, the above is updating the module we loaded in
module.exports = router;
