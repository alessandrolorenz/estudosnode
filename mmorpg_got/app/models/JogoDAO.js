var ObjectID = require('mongodb').ObjectID;

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


JogoDAO.prototype.acao = function(acao){ // acao é dadosForm
  this._connection.open(function(err, mongoclient){
    mongoclient.collection("acao", function(err, collection){
      
      var date = new Date();     
      var tempo = null;

       switch (parseInt(acao.acao)){
              case 1: tempo = 2 * 60000; break;
              case 2: tempo = 3 * 60000; break;
              case 3: tempo = 5 * 60000; break;
              case 4: tempo = 5 * 60000; break;
      }

      acao.acao_termina_em = date.getTime() + tempo;
      collection.insert(acao);
     // console.log(acao);
      // mongoclient.close(); // tem que fechar depois para ainda ter disponivel os dados
    });

      mongoclient.collection("jogo", function(err, collection){
        var moedas = null;
        switch(parseInt(acao.acao)){
            case 1: moedas = -2 * acao.quantidade; break;
            case 2: moedas = -3 * acao.quantidade; break;
            case 3: moedas = -1 * acao.quantidade; break;
            case 4: moedas = -1 * acao.quantidade; break;
        }
        collection.update(
            { usuario: acao.usuario },
            { $inc: {
                moeda: moedas
            }}
        );
        
        mongoclient.close(); // fica aqi no final da segunda instrucao
    });
  }); 
}


JogoDAO.prototype.getAcoes = function(usuario, res) {
  this._connection.open(function(err, mongoclient){ 
    mongoclient.collection("acao", function(err, collection){

      date =new Date();
      momento_atual = date.getTime();

        collection.find({usuario : usuario, 
          acao_termina_em: {$gt:momento_atual}}).toArray(function(err, result){     
          res.render('pergaminhos', {acoes: result});

         // mongoclient.close();

        });   
    });
  });
}

// no mongo, não é string e sim objeto.. require do mongo o ObjectID e aqui execua sua funcao

JogoDAO.prototype.revogar_acao = function(_id, res) {
  this._connection.open(function(err, mongoclient){ 
    mongoclient.collection("acao", function(err, collection){
      collection.remove(
          {_id : ObjectID(_id)},
         function(err, result) {
          res.redirect("jogo?mensagem=D");
          mongoclient.close();
        } 
      );   
    });   
  });
}




module.exports = function(){
  return JogoDAO;
}