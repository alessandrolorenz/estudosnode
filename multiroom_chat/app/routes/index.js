module.exports = function(application){ //application é app passada do server.js
  application.get('/', function(req, res){
  //res.send('<http><body><h1>Teste</h1></body></html>');
    application.app.controllers.index.home(application, req, res);
  })
}