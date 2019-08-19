function Noticias(){

}

Noticias.prototype.getNoticias = function(connection, callback){
    connection.query('select * from noticias', callback);
}
Noticias.prototype.getNoticia = function(connection, callback){
    connection.query('select * from noticias where id_noticia = 2', callback);
}
Noticias.prototype.salvarNoticia = function (noticia, connection, callback) {
    connection.query('insert into noticias set ?' , noticia, callback);
}


module.exports = function(){

    // this.getNoticias = function(connection, callback){
    //     connection.query('select * from noticias', callback);
    // }
    // this.getNoticia = function(connection, callback){
    //     connection.query('select * from noticias where id_noticia = 1', callback);
    // }

    // this.salvarNoticia = function(noticia, connection, callback) {
    //     connection.query('insert into noticias set ?', noticia, callback)
    // }

    // return this;
    return Noticias;
}