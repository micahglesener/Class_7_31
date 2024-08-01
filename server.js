
const http = require('http');

function serverFunc(req, res) {
  res.write('Hello World!') ; 
  res.end() ; 
}

serverObj = http.createServer(serverFunc) ;

serverObj.listen(8080) ;
