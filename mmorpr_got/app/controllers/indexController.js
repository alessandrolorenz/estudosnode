module.exports.home = function(application, req, res){
  res.render('index', {validacao: {}, msg:'' });
};

module.exports.autenticar = function(application, req, res){
  var dadosForm = req.body;

  req.assert('usuario', 'Campo usuário não pode ser vasio').notEmpty();
  req.assert('senha', 'Campo senha não pode ser vasio').notEmpty();

  var erros = req.validationErrors();

  if(erros){
    res.render("index", { validacao: erros, msg:''});
    return;
  }
  var connection  = application.config.dbConnection;
  var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

  UsuariosDAO.autenticar(dadosForm, req, res);


  //res.send('All good to create the session'); //só pode ter um response
  
}