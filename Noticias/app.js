var app = require('./config/server')

var port = 3000;

// var rotaNoticias = require('./app/routes/noticias')(app);

// var rotaHome = require('./app/routes/home');
// rotaHome(app);

// var rotaInclusaoNoticias= require('./app/routes/formulario_inclusao');
// rotaInclusaoNoticias(app);

app.listen(port, function(){
    console.log("Servidor rodando com Express na porta: " + port);
})