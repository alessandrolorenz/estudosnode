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

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
  this._connection.open( function(err, mongoClient){ 
    mongoClient.collection("usuarios", function(err, collection){
        collection.find(usuario).toArray(function(err, result){  //find retorna om ponteiro por isso tem que ser convertido em um array
             //{usuario: {$eq: usuario.usuario}, senha: {$eq: usuario.senha}} // query-mesmo que {usuario: usuario.usuario, senha: usuario.senha} - mesmo que obj usuario
          if(result[0] != undefined){
            req.session.autorizado = true; //cria a var autenticado na sessao
            req.session.usuario = result[0].usuario;
            req.session.casa = result[0].casa;
          }
          if(req.session.autorizado){
            res.redirect("jogo"); // com o redirect ao atualizar ele nao tenta enviar o form de novo
          } else {
            res.render('index', { validacao: {}, msg: 'Usuário não encontrado'});
          }


        });
       
        mongoClient.close();
    });
});
}


module.exports = function(){
  return UsuariosDAO;
}