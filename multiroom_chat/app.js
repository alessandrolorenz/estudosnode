/* importat as conf do servidor  */

var app = require('./config/server');

/* parametrizar a porta de escuta  */

var port = 80; //localhost (sem:80 só localhost)

// serao tratadas requisições http e socket na mesma porta... desde que tratadas corretamente
// primeiramente= passar o app.listen(...) para uma variavel que sera passada tb para o socket.io

var server = app.listen(80, function(){
  console.log('Servidor rodando na porta:  ' + port);
})

var io = require('socket.io').listen(server); // socket.io tb tem o listen
// criar conexao com o websocket - e que estamos escutando eventos de conexao (io.on)
app.set('io', io); // setando a variavel global

io.on('connection', function(socket){
   console.log('O usuario conectou...');

   // a partir da instancia da pra criar outros evntos como disconnect
   socket.on('disconnect', function(){
     console.log('O cliente desconectou');
   });

   // eventos de escuta=on  eventoS de disparo=emit, por exemplo

  })  