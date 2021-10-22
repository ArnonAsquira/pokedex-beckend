const express = require('express');
const Router = express.Router();
const fs = require('fs');
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

Router.use(express.json()) 



module.exports = Router;

Router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    try{
        if(fs.readFileSync(`C:\\Users\\arnon\\OneDrive\\מסמכים\\GitHub\\pokedex-beckend\\back\\user\\Arnon/${id}.json`)) {
            fs.unlinkSync(`C:\\Users\\arnon\\OneDrive\\מסמכים\\GitHub\\pokedex-beckend\\back\\user\\Arnon/${id}.json`);
            res.send('pokemon released');
            return;
        }
        throw 'error'
    } catch (error) {
        console.log(error);
        res.status(403).send('pokemon was not caught') ;
    }
    // res.send('pokemon caught');
})