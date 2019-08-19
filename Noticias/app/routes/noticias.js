// var dbConnection = require('../../config/dbConnection')

// se foi colocada a função no server e ele passa app como parametro
// é só recuperar o modulo atravez do app
module.exports = function(app) {

   app.get('/noticias', function(req, res){

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel;


        noticiasModel.getNoticias(connection, function(error, result){ // passa a noticia e o callback
            res.render("noticias/noticias", {noticias : result});
        });       
    }); 

}