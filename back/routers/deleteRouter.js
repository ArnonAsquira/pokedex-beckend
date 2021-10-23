const express = require('express');
const Router = express.Router();
const fs = require('fs');
const errHandlingMiddlwear = require('../middlewars/errorHandler');
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

Router.use(express.json()) 


Router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    try{
        if(fs.readFileSync(`C:\\Users\\arnon\\OneDrive\\מסמכים\\GitHub\\pokedex-beckend\\back\\user\\Arnon/${id}.json`)) {
            fs.unlinkSync(`C:\\Users\\arnon\\OneDrive\\מסמכים\\GitHub\\pokedex-beckend\\back\\user\\Arnon/${id}.json`);
            res.send('pokemon released');
            return;
        }
        throw 'error'
    } catch (error) {
        console.log('this pokemon was not caught');
        next(error);
        // res.status(403).send('pokemon was not caught') ;
    }
})

Router.use(errHandlingMiddlwear);

module.exports = Router;