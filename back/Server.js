const express = require('express');
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
const cors = require('cors');
const getRouter = require('./routers/pokemonRouter');
const putRouter = require('./routers/putRouters')
const verifyUsernameMID = require('./middlewear');
const port = 3000;


const app = express();
app.use(verifyUsernameMID);

// app.use(express.json()) // parses requests as json

app.use(cors({
    origin: '*'
}));

app.use('/pokemon/', getRouter);

app.use('/pokemon/', getRouter);

app.use('/pokemon/catch/', putRouter);


app.listen(port, (error) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log(`listening on port ${port}`);
});