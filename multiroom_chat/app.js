/* importat as conf do servidor  */

var app = require('./config/server');

/* parametrizar a porta de escuta  */

var port = 80; //localhost (sem:80 só localhost)

app.listen(80, function(){
  console.log('Servidor rodando na porta:  ' + port);
})

