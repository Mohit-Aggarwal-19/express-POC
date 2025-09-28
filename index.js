var express = require('express');
var app = express();

// app.get('/', function(req,res){
//     res.send("Hello World from server side");
// });

// app.post('/form',function(req,res){
//     res.send("Hello this is from POST")
// });

// app.all("/allMethodAccepted",function(req,res){
//     res.send("All methods are accepted")
// });

// app.get('/:id',function(req,res){
//     res.send("ID is "+ req.params.id)
// });

// app.get('/user/:name/:id',function(req,res){
//     res.send("ID is: "+ req.params.id+" name is:"+ req.params.name)
// });

app.use('/',function(req,res,next){
    console.log('A new req recieved',Date.now());
    next();
});

app.get('/middlewareExample',function(req,res){
    res.send('Middle ware response');
});

app.listen(3000);