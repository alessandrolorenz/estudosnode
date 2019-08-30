var mongo = require('mongodb');

var connMongoDB = function(){
   console.log('Entrou na conexão com o mongo');
   var db = new mongo.Db(
      'got', // nome do banco
      new mongo.Server(
        'localhost', // endereco servidor
        27017, // porta
        {} // terceiro argumento vasio
      ),
      {} // terceiro argumento vasio
   );
   return db;
}


module.exports = function(){
  console.log('acessou pelo cosign mas nao conectou');
  return connMongoDB;
}