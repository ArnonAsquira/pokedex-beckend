const express = require('express');
const Router = express.Router();
const fs = require('fs');
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

Router.use(express.json()) // parses requests as json


const middlewear = (req, res, next) => {
    if (!fs.existsSync(`./user/${req.headers.username}`)){
        fs.mkdirSync(`./user/${req.headers.username}/`);
    }
   next();
}

module.exports = middlewear;