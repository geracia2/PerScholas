const pokemon = require("../models/pokemon");

// // == INDEX ==
// const pokemonIndex = (req, res) => {
//   // res.send(pokemon) // test initial response
//   res.render("Index", { pokemon: pokemon });
// };

// // == NEW ==
// const pokemonNew = (req, res) => {
//     res.render('New')
// }

// // == SHOW ==
// const pokemonShow = (req, res) => {
//   //response = renderThis(views/'Show', props{ pokeProp= pokemonArray[i of paramFromRoutes]})
//   res.render("Show", { pokemon: pokemon[req.params.index] });
// };

// // == CREATE ==
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
