module.exports.home = function(application, req, res){
  res.render('index', {validacao : {}}); // aqui que a index é renderizada,
                // então a variavel tem que ser passada para que no primeir acesso nao quebre
}