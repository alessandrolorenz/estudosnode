function NoticiasDAO(connection){
this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc', callback);
}
NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback); // id_noticia é um obj
}
NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._connection.query('insert into noticias set ? ' , noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
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
    
    return NoticiasDAO;
}