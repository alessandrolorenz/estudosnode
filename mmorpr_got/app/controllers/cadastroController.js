module.exports.cadastro = function(application, req, res) {
  res.render('cadastro', {validacao:{}, dadosForm:{}});
}

module.exports.cadastrar = function(application, req, res) {
  var dadosForm = req.body;

  req.assert('nome', 'Nome não pode ser vasio').notEmpty();
  req.assert('usuario', 'Nome não pode ser vasio').notEmpty();
  req.assert('senha', 'Nome não pode ser vasio').notEmpty();
  req.assert('casa', 'Nome não pode ser vasio').notEmpty();

  var erros = req.validationErrors();

  if(erros){
    res.render('cadastro', { validacao : erros, dadosForm: dadosForm} );
    return;
  }

  var connection = application.config.dbConnection; // possui uma função mas nao é executada
  console.log(connection);
  var UsuariosDAO = new application.app.models.UsuariosDAO(connection); //passa a funcao para o obj

  UsuariosDAO.inserirUsuario(dadosForm);

  res.send('pode cadastrar');

}