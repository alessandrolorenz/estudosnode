/* importar o módulo do framework express, etc... */
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');
/* iniciar o objeto do express */
var app = express();
/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');
/* configurar o middleware express.static */
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(expressValidator());
app.use(expressSession({
	secret: 'hasdfljhasder',
	resave: false, // salvar a sessao no sevidor
	saveUninitialized: false // pra salvar uma vez soh
}));
/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('app/routes')
	.then('config/dbConnection.js') // necessario passar o arquivo para que server nao seja carregado junto
	.then('app/models')
	.then('app/controllers')
	.into(app);
	
/* exportar o objeto app */
module.exports = app;