const express = require('express');
const Router = express.Router();
const fs = require('fs');
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

Router.use(express.json()) // parses requests as json

Router.put('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try{
        if(fs.readdirSync(`./user./${req.headers.username}/${id}`)) {
            res.send('pokemon already caught');
            return;
        }
        throw 'error'
    } catch (error) {
            P.getPokemonByName(id)
            .then((response) =>  fs.writeFileSync(`C:\\Users\\arnon\\OneDrive\\מסמכים\\GitHub\\pokedex-beckend\\back\\user\\Arnon/${id}.json`, JSON.stringify({name: response.name, heigth: response.height, weight: response.weight, types: response.types, abilities: response.abilities, front_pic: response.sprites["front_default"], back_pic: response.sprites["front_default"]})), (err, data) => {
                if(error) {
                    console.log(error);
                }
            })
            .catch(error => console.log(error))       
    }
    res.send('pokemon caught');
})


module.exports = Router;