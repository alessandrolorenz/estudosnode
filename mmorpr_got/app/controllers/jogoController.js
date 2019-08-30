module.exports.jogo = function(application, req, res){
  if(req.session.autorizado){
    res.render('jogo', {img_casa: req.session.casa});
  } else {
    res.render('index',{validacao:{}, msg:'Autentique-se para acessar o jogo'})
  }
}

module.exports.sair = function(application, req, res){
 req.session.destroy(function(err){ //func de callback(acao)
  res.render('index', {validacao: {}, msg: ''})
 });
}