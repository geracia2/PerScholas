const pokemon = require("../models/pokemon");

const pokemonIndex = (req, res)=>{
    // res.send(pokemon) // test initial response
    res.render('Index', {pokemon: pokemon} )
}
const pokemonShow = (req, res)=>{
    //response = renderThis(views/'Show', props{ pokeProp= pokemonArray[i of paramFromRoutes]})
    res.render('Show', {pokemon: pokemon[req.params.index]} )
}


module.exports = {
    pokemonIndex,
    // pokemonNew,
    pokemonShow,
    // pokemonCreate,
    // pokemonEdit,
    // pokemonDelete,
    // pokemonUpdate,
}