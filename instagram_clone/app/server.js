var express = require('express'),
    bodyParser = require('body-parser'),
    mongodb = require('mongodb');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = 8080;

app.listen(port);

var db = new mongodb.Db( // função do mongo que cria a instancia do mongo
  'instagram',
  new mongodb.Server('localhost', 27017, ),
  {}
);

console.log('Servidor rodando na porta ' + port);

app.get('/', function(req, res){
  res.send({msn: 'Olá'});
});

// POST (create)
app.post('/api', function(req, res){
  var dados = req.body;
  db.open(function(err, mongoclient){
    mongoclient.collection('postagens', function(err, collection){
      collection.insert(dados, function(err, records){
        if(err){
          res.json(err);
        } else {
          res.json({'status': 'Inclusao realizada.', records });
        }
        mongoclient.close();
      });
    });
  });
});

// POST (create)
app.get('/api', function(req, res){
  db.open(function(err, mongoclient){
    mongoclient.collection('postagens', function(err, collection){
      collection.find().toArray(function(err, result){
        if(err){
          res.json(err);
        } else {
          res.json(result);
        }
        mongoclient.close();
      });
    });
  });
});