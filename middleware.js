var express = require('express');
var app = express();

app.use(function(req,res,next){
    console.log("start");
    next();
});

app.get("/middleWare",function(req,res,next){
    res.send("in the middle ware");
    next();
});

app.get("/middleWare",function(req,res){
    console.log("End Route");
});

app.listen(3500);