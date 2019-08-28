module.exports = function(app) {
    
    app.get('/formulario_inclusao', function(req, res){
        app.app.controllers.admin.formulario_inclusao(app, req, res); // instancia do controller que executa a funcao que esta no nele
    });

    app.post('/noticias/salvar', function(req, res){
        app.app.controllers.admin.noticia_salvar(app, req, res);
        
    });

}