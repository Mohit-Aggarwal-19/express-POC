var express = require('express');
var app = express();

var session = require('express-session');

app.use(session({secret:'My Secret Here'}));

app.get("/",function(req,res){
    req.session.username = "Programming experience";
    res.send("Session are set");
});

app.get("/get-session",function(req,res){
    res.send("Your session user name:"+req.session.username);
});

app.listen(5050);