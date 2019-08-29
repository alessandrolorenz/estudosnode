module.exports.iniciaChat = function(application, req, res){
  var dadosForm = req.body; //prop name do form sera pego aqui - name="apelido"

  req.assert('apelido', 'Nome ou apelido é obrigatorio').notEmpty();
  req.assert('apelido', 'Deve conter entre 3 e 15 caracteres').len(3, 15);

  var erros = req.validationErrors();

  if(erros){
    res.render("index", {validacao : erros});
    return;
  }

  application.get('io').emit(
    'msgParaCliente', // é o mesmo nome que receberá na view no on()
    {apelido: dadosForm.apelido, mensagem: 'acabou de entrar no chat'} // recuperado la como data na function
    
    ) 



  // io é uma instancia de io que está no app (tem que fazer entao uma variavel global no app)
// entao a partir do app(application) recupera ela (mas tem que ser com o get)
  res.render('chat', { dadosForm: dadosForm }); 
}