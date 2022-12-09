const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {

  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  if (filename == './') filename = 'index.html';
  const fileHTML = fs.readFileSync(filename);

  // cambiamo il valore di Content-type
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(fileHTML);

});

const callback = () => {
  const address = server.address().address;
  const port = server.address().port;
  console.log(`
  Server avviato all'indirizzo http://${address}:${port}
  `);
}

server
  .listen(
    8080, 
    '127.0.0.1',
    callback
  )