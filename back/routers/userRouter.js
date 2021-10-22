const express = require('express');
const Router = express.Router();
const fs = require('fs');
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

Router.use(express.json()) // parses requests as json

Router.post('/', (req, res) => {
    res.json({username: `${req.headers.username}`});
})



module.exports = Router;