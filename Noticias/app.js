var app = require('./config/server')

var port = 3000;

var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaNoticias= require('./app/routes/noticias');
rotaNoticias(app);

app.listen(port, function(){
    console.log("Servidor rodando com Express na porta: " + port);
})