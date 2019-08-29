/* importat o modulos */

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express(); // recebe a funcao do express e a executa = ()
/* setar as variaveis 'view engine' e 'views' do express  */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar os middlewares */
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

/* efetua o autoload de rotas, models, controllers e colocam no app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* exportar o obj app */
module.exports = app;