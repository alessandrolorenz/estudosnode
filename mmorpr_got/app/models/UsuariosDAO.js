function UsuariosDAO(connection){ //classe (POO) // recebe a func
  this._connection = connection(); // a executa e guarda o valor do retorno
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
  this._connection.open( function(err, mongoClient){ // executa uma acao que é a func de callbak
        mongoClient.collection("usuarios", function(err, collection){ // prim param é o nom da collect e o seg é a func calback
            collection.insert(usuario);

            mongoClient.close();
        });
    });
}

module.exports = function(){
  return UsuariosDAO;
}