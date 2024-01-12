const vegetables = require('../models/vegetables')

const vegetableIndex = (req, res) => {
    res.render('Index', { items: vegetables, nav: 'vegetables' })
}

const vegetableNew = (req, res) => {
    res.render('New')
}

// "show" route
const vegetableShow = (req, res) => {
    res.render('Show', { item: vegetables[req.params.index], index: req.params.index })
    // res.send(vegetables[req.params.index])
}

// "create" route
const vegetableCreate = (req, res) => {
    console.log(req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    vegetables.push(req.body)
    res.redirect('/vegetables')
}

// "edit" route
const vegetableEdit = (req, res) => {
    res.render('Edit', { item: vegetables[req.params.index], index: req.params.index })
}

// "destroy" route
const vegetableDelete = (req, res) => {
    vegetables.splice(req.params.index, 1)
    console.log('deleting')
    res.redirect('/vegetables')
}

// "update" route
const vegetableUpdate = (req, res) => {
    console.log('update')
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    vegetables[req.params.index] = req.body
    res.redirect(`/vegetables/${req.params.index}`)
}

module.exports = {
    vegetableCreate,
    vegetableDelete,
    vegetableEdit,
    vegetableIndex,
    vegetableNew,
    vegetableShow,
    vegetableUpdate
}