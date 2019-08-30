/* importat as conf do servidor  */
var app = require('./config/server');

var port = 80; //localhost (sem:80 só localhost)
// serao tratadas requisições http e socket na mesma porta... desde que tratadas corretamente
// primeiramente= passar o app.listen(...) para uma variavel que sera passada tb para o socket.io
var server = app.listen(80, function(){
  console.log('Servidor rodando na porta:  ' + port);
})

var io = require('socket.io').listen(server); // socket.io tb tem o listen
// criar conexao com o websocket - e que estamos escutando eventos de conexao (io.on)
app.set('io', io); // setando a variavel como global

io.on('connection', function(socket){
   console.log('O usuario conectou...');
   // a partir da instancia da pra criar outros eventos como disconnect
   socket.on('disconnect', function(){
     console.log('O cliente desconectou');
     
   });

   socket.on('msgParaServidor', function(data){ // esta ouvindo a mng e mandando de volta
      
    /* dialogos */
    socket.emit(
        'msgParaCliente',
        { apelido: data.apelido, mensagem: data.mensagem }
      );
      socket.broadcast.emit(
        'msgParaCliente',
        { apelido: data.apelido, mensagem: data.mensagem }
      );

      /* participanres */
      if(parseInt(data.apelido_atualizado_nos_clientes) == 0) {
        console.log(parseInt(data.apelido_atualizado_nos_clientes));
          socket.emit(
            'participanteParaCliente',
            { apelido: data.apelido }
          );
          socket.broadcast.emit(
            'participanteParaCliente',
            { apelido: data.apelido }
          );
      }
   });

  });  