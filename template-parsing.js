var express = require('express');
var app = express();

app.set('view engine','pug');
app.set('views','./views');

app.get('/template-parsing',function(req,res){
    res.render('template-parsing',{
        name:"My Home page",
        url: "https://google.com",
        user:{
            name:"Sudhanshu",
            age:"21"
        }
    });
});

app.listen(3009);