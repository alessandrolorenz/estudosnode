module.exports.index = function(app, req, res) {

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection); //uma instancia de NoticiasDAO

    // depois da consulta é necessario renderizar a consulta
    // - function que sera usada como callback para a function query(que retorna erro ou um resultado)
    
    noticiasModel.get5UltimasNoticias(function(error, result){

        res.render("home/index", {noticias : result});
    });


    
}