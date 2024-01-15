// Modules
const express = require("express");
// load router
const router = express.Router();
// load controller
const pokemonController = require('../controllers/pokemonController')


// !! b/c of Router, all following routes will have
// /pokemon in front of them

// ==index== 
// // /pokemon/
router.get('/', pokemonController.pokemonIndex)

// // ==new==
// // /pokemon/new
// router.get('/new', pokemonController.pokemonNew)

// // ==show==
// router.get('/:index', pokemonController.pokemonShow)

// // ==create==
// router.post('/', pokemonController.pokemonCreate)

// // ==edit==
// router.get('/:index/edit', pokemonController.pokemonEdit)

// // ==delete==
// router.delete('/:index', pokemonController.pokemonDelete)

// // ==update==
// router.put('/:index', pokemonController.pokemonUpdate)

// export has to stay as router, the above is updating the module we loaded in
module.exports = router