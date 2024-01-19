// Modules
const express = require("express");
// load Models from DB
const Logs = require("../models/LogsModel");
// load router
const router = express.Router();

// load controller
const logController = require('../controllers/logController')

// !! b/c of Router, all following routes will have
// /log in front of them

// =======================================

// == INDEX ==
// /logs/
router.get("/", logController.index);

// == NEW ==
// url: localhost:3000/logs/new
// router.get('/new', logController.logNew)
router.get("/new", logController.new);

// == SHOW ==
// whats going on: response = renderThis(views/'Show', props{ pokeProp= pokemonArray[i of paramFromRoutes]})
router.get("/:index", logController.show);

// == CREATE ==
router.post("/", logController.create);

// == EDIT ==
router.get("/:index/edit", logController.edit);

// == DELETE ==
router.delete("/:index", logController.delete);

// == UPDATE ==
router.put("/:index", logController.update);



// export has to stay as router, the above is updating the module we loaded in
module.exports = router;
