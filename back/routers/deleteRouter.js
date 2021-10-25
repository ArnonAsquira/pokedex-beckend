const express = require('express');
const Router = express.Router();
const fs = require('fs');
const path = require('path');
const errHandlingMiddlwear = require('../middlewars/errorHandler');
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

Router.use(express.json()) 


Router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    try{
        if(fs.readFileSync(path.resolve(__dirname, `../user/${req.headers.username}/${id}.json`))) {
            fs.unlinkSync(path.resolve(__dirname, `../user/${req.headers.username}/${id}.json`));
            res.send('pokemon released');
            return;
        }
        throw 'error'
    } catch (error) {
        console.log(req.params.id);
        console.log('this pokemon was not caught');
        next(error);
    }
})

Router.use(errHandlingMiddlwear);

module.exports = Router;