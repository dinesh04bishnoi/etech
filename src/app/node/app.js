// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

const port = 3000;
//middleware
app.use(cors());
app.use(bodyparser.json());
//routes
app.use('/api',route);

//testing serve
app.get('/',(req,res)=>{
    res.send('foober');
});

app.listen(port,()=>{
    console.log('Server is running at port:'+port);
});