var mysql = require('mysql');


var connMySQL = function() {
    console.log('A conexao com o BD foi estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'portal_noticias'
    });
}

// exporta a variavel (contendo a função) ao invés da função,
// entao a conexão é feita qnd necessario e não sempre
module.exports = function() {
    console.log('carregou o modulo de conexão (sem conectar)')
    return connMySQL;
    
}