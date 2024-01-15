const pokemon = require("../models/pokemon");

const pokemonIndex = (req, res)=>{
    // res.send(pokemon) // test initial response
    res.render('Index', {pokemon} )
}


module.exports = {
    pokemonIndex,
    // pokemonNew,
    // pokemonShow,
    // pokemonCreate,
    // pokemonEdit,
    // pokemonDelete,
    // pokemonUpdate,
}