const express = require('express');
const path = require('path');
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
const cors = require('cors');
const getRouter = require('./back/routers/pokemonRouter');
const putRouter = require('./back/routers/putRouters');
const deleteRouter = require('./back/routers/deleteRouter');
const infoRouter =require('./back/routers/userRouter');
const verifyUsernameMID = require('./back/middlewars/middlewear');
const errHandlingMiddlwear = require('./back/middlewars/errorHandler');
const port = process.env.PORT || 3000;

const app = express();

app.use(cors({
    origin: '*',
    methods: '*'
}));

// app.use(verifyUsernameMID);

// app.use('/pokemon/', getRouter);

// app.use('/pokemon/catch/', putRouter);

// app.use('/pokemon/release/', deleteRouter);

// app.use('/info', infoRouter);

// app.use(function(err, req, res, next) {
//     console.log('reached error handler in server.js');
//     res.status(500).send(err);
// });

// app.use('/', express.static(path.resolve('./dist'))); // serve main path as static dir

// app.get('/', function(req, res) { // serve main path as static file
//   res.sendFile(path.resolve('./dist/index.html'))
// });

app.get('/' , (req, res) => {
    res.status(200).send('ok');
});


app.listen(port, (error) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log(`listening on port ${port}`);
});