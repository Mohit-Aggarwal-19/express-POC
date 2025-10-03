var express = require('express');
var app = express();

app.get('/',function(req,res,next){
    var err = new Error("Something wrong!");
    next(err);
});

app.get(/.*/, function(req, res, next) {
    var err = new Error("Something went wrong!");
    next(err);
});

app.use(function(err,req,res,next){
    res.status(500);
    res.send("Oops,Something went wrong!");
});

app.listen(5080);