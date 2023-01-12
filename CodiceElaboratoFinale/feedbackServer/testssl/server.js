var http = require('http');
const sqlite3 = require('sqlite3').verbose();
/*
let db = new sqlite3.Database(':goldFeedback:', (err) => {

    if (err) {
      return console.error(err.message);
    }

    console.log('Connesso al database in memoria SQlite.');

    db.close((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Connessione al database chiusa.');
    });

});
*/
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
})
 
server.listen(1337, '127.0.0.1');
console.log('Server goldFeedback in esecuzione all\'indirizzo http://127.0.0.1:1337/');
