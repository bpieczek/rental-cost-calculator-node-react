require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiRouter = require('./routes/api');

const app = express();

require("./database/connect");

app.use(bodyParser.json());
app.use(cors());
app.use('/api/', apiRouter);

app.listen(process.env.PORT, function(){
    console.log(`Lisning on port ${process.env.PORT}`)
})