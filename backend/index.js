const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {PORT} = require('./config');

const apiRouter = require('./routes/api');

const app = express();

require("./database/connect");

app.use(bodyParser.json());
app.use(cors());
app.use('/api/', apiRouter);

app.listen(PORT, function(){
    console.log(`Lisning on port ${PORT}`)
})