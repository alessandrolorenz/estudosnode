module.exports = function(app) {
    
    app.get('/formulario_inclusao', function(req, res){
        res.render("admin/form_add_noticia", {validacao: {}, noticia : {}});
    });

    app.post('/noticias/salvar', function(req, res){

        var noticia = req.body;

        req.assert('titulo', 'Título obrigatorio').notEmpty();
        req.assert('resumo', 'Resumo obrigatorio').notEmpty();
        req.assert('resumo', 'Resumo tem que ter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor obrigatorio').notEmpty();
        req.assert('data_noticia', 'Data obrigatorio').notEmpty(); // .isDate({format: 'YYY-MM-DD'});
        req.assert('noticia', 'Noticia obrigatorio').notEmpty();
 
        var erros = req.validationErrors();

        if(erros) {
            res.render("admin/form_add_noticia", {validacao : erros, noticia: noticia });
            return;
        }


        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });

    });

}