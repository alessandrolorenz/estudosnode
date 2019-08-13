var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send("<html><body><h1>Portal de notícias</h1></body></html>");
})

app.get('/tecnologia', function(req, res){
    res.send("<html><body><h1>Notícias de tecnologia</h1></body></html>");
})

app.listen(3000, function(){
    console.log("Servidor rodando com Express");
})