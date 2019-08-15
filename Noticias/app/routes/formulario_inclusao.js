module.exports = function(app) {
    
    app.get('/formulario_inclusao', function(req, res){
        res.render("admin/form_add_noticia");
    })

}