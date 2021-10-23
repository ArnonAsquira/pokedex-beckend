const express = require('express');
const Router = express.Router();
const fs = require('fs');
const path = require('path');
const errHandlingMiddlwear = require('../middlewars/errorHandler');
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

Router.use(express.json()) // parses requests as json

Router.put('/:id', async (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    try{
        if(fs.readFileSync(path.resolve(__dirname, `../user/${req.headers.username}/${id}.json`))) {
            res.status(403).send('pokemon already caught');
            return;
        }
        throw 'error'
    } catch (error) {
            P.getPokemonByName(id)
            .then((response) =>  { fs.writeFileSync(path.resolve(__dirname, `../user/${req.headers.username}/${id}.json`), JSON.stringify({name: response.name, heigth: response.height, weight: response.weight, types: response.types, abilities: response.abilities, front_pic: response.sprites["front_default"], back_pic: response.sprites["front_default"]})), (err, data) => {
                if(error) {
                }
            } 
            res.send('pokemon caught')
        })
            .catch(error => {res.status(404).send('pokemon not found')
            return})       
    }
})

Router.use(errHandlingMiddlwear);

module.exports = Router;