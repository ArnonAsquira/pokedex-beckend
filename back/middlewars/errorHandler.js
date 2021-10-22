const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

 const errHandlingMiddlwear = (error, req, res, next) => {
    // sconsole.log(req.url);
    if(req.url.includes('get/')) {
        res.status(404).json({message: 'no such pokemon'});
        return;
    }
    if(req.method === "DELETE") {
        res.status(403).send('pokemon was not caught');
        return;
    }
    if(req.method === "PUT") [
        res.status(403).send('pokemon already caught or doesnt exsist')
    ]

    res.status(500).send('an error occured')
}


module.exports = errHandlingMiddlwear;
