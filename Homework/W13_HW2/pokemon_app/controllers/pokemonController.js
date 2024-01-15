const pokemon = require("../models/pokemon");

const pokemonIndex = (req, res)=>{
    res.send(pokemon)
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