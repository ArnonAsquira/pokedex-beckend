const express = require('express');
const Router = express.Router();
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

Router.use(express.json()) // parses requests as json

Router.get('/get/:id', (req, res) => {
  console.log(req.params.id)
    P.getPokemonByName(req.params.id)
    .then(response => {
        res.json({name: response.name, heigth: response.height, weight: response.weight, types: response.types, abilities: response.abilities, front_pic: response.sprites["front_default"], back_pic:response.sprites["front_default"]})
    })
})
Router.get('/query', (req, res) => {
  console.log(req.body);
  P.getPokemonByName(req.body.name)
  .then(response => {
      res.json({name: response.name, heigth: response.height, weight: response.weight, types: response.types, abilities: response.abilities, front_pic: response.sprites["front_default"], back_pic:response.sprites["front_default"]})
  })
})


module.exports = Router;