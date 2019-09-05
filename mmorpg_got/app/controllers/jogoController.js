module.exports.jogo = function(application, req, res){  

  if(!req.session.autorizado){
    res.render('index',{validacao:{}, msg:'Autentique-se para acessar o jogo'});
    return;
  }

  var mensagem = '';
  if(req.query.mensagem != '') {
    mensagem = req.query.mensagem;
  }

  var usuario = req.session.usuario;
  var casa = req.session.casa;

  var connection = application.config.dbConnection;
  var jogoDAO = new application.app.models.JogoDAO(connection);

  jogoDAO.iniciaJogo(res, usuario, casa, mensagem); 
}


module.exports.sair = function(application, req, res){
 req.session.destroy(function(err){
  res.render('index', {validacao: {}, msg: ''})
 });
}

module.exports.suditos = function(application, req, res){
  if(!req.session.autorizado){
    res.render('index',{validacao:{}, msg:'Autentique-se para acessar o jogo'});
    return;
  }
  res.render('aldeoes', {validacao: {}, msg: ''})
}

module.exports.pergaminhos = function(application, req, res){
  if(req.session.autorizado != true){
    res.render('index',{validacao:{}, msg:'Autentique-se para acessar o jogo'});
    return;
  }
  /* recuperar as acoes doDB */
  var connection = application.config.dbConnection;
  var jogoDAO = new application.app.models.JogoDAO(connection);

  var usuario = req.session.usuario;

  jogoDAO.getAcoes(usuario, res);

  // res.render('pergaminhos'}); // render vai para a DAO
}





module.exports.ordenar_acao_sudito = function(application, req, res){
  
  var dadosForm = req.body;

  req.assert('acao', 'A acao dever informada').notEmpty();
  req.assert('quantidade', 'A quantidade dever informada').notEmpty();

  var erros = req.validationErrors();

  if(erros){
    res.redirect('jogo?mensagem=A'); //redirect o contoller associado a rota faz tratativas (precisa passar por la para ter os parametros) (e pq é post)
    return;
  }

  var connection = application.config.dbConnection;
  var jogoDAO = new application.app.models.JogoDAO(connection);


  dadosForm.usuario = req.session.usuario; // coloca um campo novo no jason
  jogoDAO.acao(dadosForm);

  res.redirect('jogo?mensagem=B');

}
