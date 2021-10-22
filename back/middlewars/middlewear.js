const express = require('express');
const Router = express.Router();
const fs = require('fs');

Router.use(express.json()) // parses requests as json


const middlewear = (req, res, next) => {
    if(!req.headers.username) {
        res.status(401).send('you must have a valid user name headr');
        return;
    }
    if (!fs.existsSync(`./user/${req.headers.username}`)){
        fs.mkdirSync(`./user/${req.headers.username}/`);
    }
   next();
}


module.exports = middlewear;