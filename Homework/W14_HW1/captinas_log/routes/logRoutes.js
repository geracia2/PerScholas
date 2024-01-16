// Modules
const express = require("express");
// load router
const router = express.Router();
// load controller
// const logController = require('../controllers/logController')

// !! b/c of Router, all following routes will have
// /log in front of them

// // ==index==
// // // /log/
// router.get('/', logController.logIndex)

// ==new==
// this is the url: http://localhost:3000/logs/new
router.get("/new", (req, res) => {
  res.send("new");
});



// // ==show==
// router.get('/:index', logController.logShow)

// // ==create==
// router.post('/', logController.logCreate)

// // ==edit==
// router.get('/:index/edit', logController.logEdit)

// // ==delete==
// router.delete('/:index', logController.logDelete)

// // ==update==
// router.put('/:index', logController.logUpdate)

// export has to stay as router, the above is updating the module we loaded in
module.exports = router;
