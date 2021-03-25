const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./api');

const app =  express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Resolving CORS problems
app.use(cors());
app.use('/api', api);

const PORT = process.env.PORT || 3009;
app.listen(PORT, ()=> {
    console.log(`Running at port ${PORT}`);
})

