module.exports = function(app) {
    
    app.get('/formulario_inclusao', function(req, res){
        app.app.controllers.admin.formulario_inclusao(app, req, res);
    });

    app.post('/noticias/salvar', function(req, res){
        app.app.controllers.admin.noticia_salvar(app, req, res);
        
    });

}