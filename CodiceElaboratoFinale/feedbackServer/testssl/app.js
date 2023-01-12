// app.js

const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const template = fs.readFileSync('index.ejs').toString();

const utente = {
  nome: 'Mario Rossi',
  bio: `
  Maecenas sed diam eget risus varius blandit sit amet non magna. 
  Maecenas sed diam eget risus varius blandit sit amet non magna. 
  Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
  Cum sociis natoque penatibus et magnis dis parturient montes, 
  nascetur ridiculus mus. Praesent commodo cursus magna, 
  vel scelerisque nisl consectetur et.
  `
}

const server = http.createServer((req, res) => {
  
  // cambiamo il valore di Content-type
  res.writeHead(200, {'Content-Type': 'text/html'});

  // {utente} è equivalente a {utente: utente}
  // il valore fa riferimento alla costante definita sopra
  const output = ejs.render(template, {utente});

  res.end(output);

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