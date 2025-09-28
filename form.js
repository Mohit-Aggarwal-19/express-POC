var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.render('form');
});

app.post('/',function(req,res){
    res.send("Name is: "+req.body.name+"Email is: "+req.body.email);
});

app.listen(3008);