const vegetableController = require('../controllers/vegetableController')

const express = require('express')

const router = express.Router()

// const fruits = require('../models/fruits')

// "index" route
router.get('/', vegetableController.vegetableIndex)

// "new" route
router.get('/new', vegetableController.vegetableNew)

// "show" route
router.get('/:index', vegetableController.vegetableShow)

// "create" route
router.post('/', vegetableController.vegetableCreate)

// "edit" route
router.get('/:index/edit', vegetableController.vegetableEdit)

// "destroy" route
router.delete('/:index', vegetableController.vegetableDelete)

// "update" route
router.put('/:index', vegetableController.vegetableUpdate)

module.exports = router