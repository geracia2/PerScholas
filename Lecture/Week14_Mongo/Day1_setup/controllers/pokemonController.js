const pokemon = require("../models/pokemon");
const Data = require('../models/dataModel')


// == INDEX ==
const pokemonIndex = async (req, res) => {
  // change the controller function to async
	// catch the MongoDB data and add it to the view prop
  let showData;
  try {
    // load all data with Model.find()
    let showData = await Data.find()
    // to find very specific data, say to get a response of just names, no extra data:
    // let showData = await Data.find({name:specific})
    console.log(showData);
  } catch (error) {
    console.log(error);
    res.send('there is an error')
  }
  res.render("Index", { props: showData });
};

// // == NEW ==
// const pokemonNew = (req, res) => {
//     res.render('New')
// }

// == SHOW ==
const pokemonShow = (req, res) => {
  //response = renderThis(views/'Show', props{ pokeProp= pokemonArray[i of paramFromRoutes]})
  // res.render("Show", { pokemon: pokemon[req.params.index] });
  // const data = await Model.findByID(req.params.index) // params 
  res.render("Show", { pokemon: pokemon[req.params.index] });
};

// // == CREATE ==
// ++++++ MongoDB version
// model.create(req.body) or model.create({objThatMatchesSchema}) is the main point 


// const pokemonCreate = (req, res) => {
//     console.log(req.body)
//     if (req.body.readyToEat === 'on') {
//         req.body.readyToEat = true
//     } else {
//         req.body.readyToEat = false
//     }
//     pokemon.push(req.body)
//     res.redirect('/pokemon')
// }

// // == EDIT ==
// const pokemonEdit = (req, res) => {
//     res.render('Edit', { pokemon: pokemon[req.params.index], index: req.params.index })
// }

// // == DELETE ==
// const pokemonDelete = (req, res) => {
//     pokemon.splice(req.params.index, 1)
//     console.log('deleting')
//     res.redirect('/pokemon')
// }

// // == UPDATE ==
// const pokemonUpdate = (req, res) => {
//     console.log('update')
//     if (req.body.readyToEat === 'on') {
//         req.body.readyToEat = true
//     } else {
//         req.body.readyToEat = false
//     }
//     pokemon[req.params.index] = req.body
//     res.redirect(`/pokemon/${req.params.index}`)
// }

module.exports = {
  pokemonIndex,
  // pokemonNew,
  pokemonShow,
  // pokemonCreate,
  // pokemonEdit,
  // pokemonDelete,
  // pokemonUpdate,
};
