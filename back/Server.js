const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) =>{
   
})


app.listen(port, (error) =>{
    if(error) {
        console.log(error);
        return;
    }
    console.log(`listening on port ${port}`);
});