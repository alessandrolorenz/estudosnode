function JogoDAO(connection){ 
  this._connection = connection(); 
}

JogoDAO.prototype.gerarParametros = function(usuario){

  this._connection.open( function(err, mongoClient){ // executa uma acao que é a func de callbak(que é uma acao a ser tomada)
    mongoClient.collection("jogo", function(err, collection){ // prim param é o nom da collect e o seg é a func calback
        collection.insert({
          usuario: usuario,
              moeda: 15,
              suditos: 10,
              temor: Math.floor(Math.random() * 1000),
              sabedoria: Math.floor(Math.random() * 1000),
              comercio: Math.floor(Math.random() * 1000),
              magia: Math.floor(Math.random() * 1000)
        });

        mongoClient.close();
    });
  });
}


JogoDAO.prototype.iniciaJogo = function(res, usuario, casa, mensagem){
  this._connection.open(function(err, mongoclient){ 
    mongoclient.collection("jogo", function(err, collection){
        collection.find({usuario : usuario}).toArray(function(err, result){     
          // console.log(result[0]);
          res.render('jogo', {img_casa: casa, jogo: result[0], mensagem : mensagem});
          mongoclient.close();

        });   
    });
  });
}


JogoDAO.prototype.acao = function(dadosForm){ // acao é dadosForm
  this._connection.open(function(err, mongoclient){
    mongoclient.collection("acao", function(err, collection){
      
      var date = new Date();
      var tempo = null;

      switch (dadosForm.acao){
        case 1: tempo = 1 * 60 * 60000;
        case 2: tempo = 2 * 60 * 60000;
        case 3: tempo = 4 * 60 * 60000;
        case 4: tempo = 4 * 60 * 60000;
      }

      dadosForm.acao_termina_em = date.getTime() + tempo;
      collection.insert(dadosForm);

      mongoclient.close
    });
  });

}


JogoDAO.prototype.getAcoes = function(usuario) {
  this._connection.open(function(err, mongoclient){ 
    mongoclient.collection("acao", function(err, collection){
        collection.find({usuario : usuario}).toArray(function(err, result){     
          console.log(result);
         
          
          mongoclient.close();

        });   
    });
  });
}




module.exports = function(){
  return JogoDAO;
}