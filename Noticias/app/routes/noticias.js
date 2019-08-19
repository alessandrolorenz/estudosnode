// var dbConnection = require('../../config/dbConnection')

// se foi colocada a função no server e ele passa app como parametro
// é só recuperar o modulo atravez do app
module.exports = function(app) {

   app.get('/noticias', function(req, res){
    app.app.controllers.noticias.noticias(app, req, res);
       
    }); 

    app.get('/noticia', function(req, res) {
        app.app.controllers.noticias.noticia(app, req, res);
    

    });




}