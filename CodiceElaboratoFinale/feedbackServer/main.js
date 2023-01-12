/* jshint esnext: true */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const { buildSchema, GraphQLSchema, GraphQLEnumType } = require('graphql');

const path = require('path');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

const feedbackModel = require('./model.js');

/***********************
** TRAFFICO PARTE UTENTE
*/
// GET request proveniente dall'utente del browser
app.get('/', function (req, res) {
    app.use(express.static(path.join('www')));
    res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

// URI alternativa GET request proveniente dall'utente del browser
app.get('/feedback', function (req, res) {
    app.use(express.static(path.join('www')));
    res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

// POST request di tipo HTML-FORM doll'utente del browser
app.post('/', urlencodedParser, function (req, res) {
    feedbackModel.put(req.body);
    res.sendFile(path.join(__dirname + '/www/response.html'));
});

/***********************
** TRAFFICO PARTE AMMINISTRATIVA
*/

// GET request da parte amministrativa
app.get('/admin', function (req, res) {
    app.use(express.static(path.join(__dirname, 'admin')));
    res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});
/*richiesta POST originata da MessageTable.sendAnswer
  l'oggetto json contenuto nella richiesta è il seguente:
  composta come segue:
{
    id: <id messaggio>,
    createdAt: "Mon Oct 01 2018 ..",
    updatedAt: "Mon Oct 01 2018 ..",
    ticket: <numero ticket puntatore alla tabella tickets>,
    qa: "(Q|A)" <Query o Answer>,
    text: <Testo del messaggio>
}
Il response restituito al client è un oggetto json composto come segue:
{
    id: <id nuovo messaggio o messaggio modificato>,
    isNewRecord: <booleano>,
}
*/
// Nuovo messaggio
app.post('/setMessage', jsonParser, function (req, res) {
    feedbackModel.setMessage(req.body).
        then(r => {
            res.json(r);
        }).
        catch(message => {
            res.status(405).send(message);
        });
});
// Aggiornamento messaggio
app.post('/updateMessage', jsonParser, function (req, res) {
    feedbackModel.updateMessage(req.body).
        then(r => {
            res.json(r);
        }).
        catch(message => {
            res.status(405).send(message);
        });
});

/*richiesta POST originata da TicketTable.fetchData
  l'oggetto json contenuto nella richiesta è il seguente:
{
      pageSize: state.pageSize,
      page: state.page,
      sorted: [{id: <nome campo ordinamento>, desc: <booleano>}],
      filtered: [{id: <nome campo filtro>, value: <valore filtro>}],
      startDate: <yyyy-mm-dd>,
      endDate: <yyyy-mm-dd>
}

Il response restituito al client è un oggetto json composto
da un contatore del numero di righe ed un vettore di righe:
{
    count: <numero di record letti>,
    rows: [
        {
            id: 4,
            createdAt: "Mon Oct 01 2018 ..",
            updatedAt: "Mon Oct 01 2018 ..",
            name: "Don Chisciotte",
            subject "Il fato ci è avverso",
            country: "Italy",
            email: "chisciotte@gmail.com"
        },
        ...
    ]
}
*/
app.post('/readTickets', jsonParser, function (req, res) {
    feedbackModel.getTickets(req.body).
        then(page => {
            res.json(page);
        }).
        catch(message => {
            res.status(405).send(message);
        });
});

/*richiesta POST originata da MessagesTable.fetchData
  l'oggetto json contenuto nella richiesta è il seguente:
{
      ticket: <numero ticket>,
      sorted: [{id: <nome campo ordinamento>, desc: <booleano>}],
      filtered: [{id: <nome campo filtro>, value: <valore filtro>}],
}

Il response restituito al client è un oggetto json composto
da un contatore del numero di righe ed un vettore di righe:
{
    count: <numero di record letti>,
    rows: [
        {
            id: <Unique id>,
            createdAt: "Mon Oct 01 2018 ..",
            updatedAt: "Mon Oct 01 2018 ..",
            ticket: <numero ticket puntatore alla tabella tickets>,
            qa: "(Q|A)" <Query o Answer>,
            text: <Testo del messaggio>
        },
        ...
    ]
}
*/

app.post('/readMessages', jsonParser, function (req, res) {
    feedbackModel.getMessages(req.body).
        then(page => {
            res.json(page);
        }).
        catch(message => {
            res.status(405).send(message);
        });
});

/***********************
** VERSIONE GRAPHQL PARTE AMMINISTRATIVA
*/
/* jshint ignore:start */
/*
Type QA {
    <enum {Q,A}>
}
type Date {
    <yyyy-mm-dd>
}
type Email {
    <sss@sss>
}
*/
var schema = buildSchema(`
input Sort {
    id: String,
    desc: Boolean
}
input Filter {
    id: String,
    value: String,
}
type Ticket {
    id: ID!,
    createdAt: String,
    updatedAt: String,
    name: String,
    subject: String,
    country: String,
    email: String
}
type Tickets {
    count: Int,
    rows: [ Ticket ]
}
input TicketsRequest{
    ticket: Int,
    sorted: [Sort],
    filtered: [Filter]
    pageSize: Int,
    page: Int,
    startDate: String,
    endDate: String
}
input SetMessageInput {
    ticket: Int!,
    text: String!,
    qa: String!
}
input UpdateMessageInput {
    id: ID!,
    ticket: Int!,
    text: String!,
    qa: String!,
    createdAt: String,
    updatedAt: String,
}
type Message {
    id: ID!,
    ticket: Int!,
    text: String!,
    qa: String!,
    createdAt: String,
    updatedAt: String,
}
type Messages {
    count: Int,
    rows: [ Message ]
}
input MessagesRequest{
    ticket: ID!,
    sorted: [Sort],
    filtered: [Filter]
}
type SetMessageResponse
{
    id: ID!,
    isNewRecord: Boolean,
}
type Query {
    getTickets(ticketsRequest: TicketsRequest): Tickets,
    getMessages(messagesRequest: MessagesRequest): Messages,
}
type Mutation {
    setMessage(message: SetMessageInput): SetMessageResponse,
    updateMessage(message: UpdateMessageInput): Boolean
}
`
);
/* Richiesta GraphQL dei tickets
{
    getTickets(ticketsRequest: {
        page: 0,
        pageSize: 20,
        sorted: [
          {id: "name", desc: true},
        	{id: "createdAt", desc: false}
        ],
       	filtered: [{id: "qaname", value: "C"}],
        startDate: "2018-10-01",
        endDate: "2018-10-04"
    })
    {
        count,
        rows {id, createdAt, updatedAt, name, subject, country, email}
    }
}
*/
/* Richiesta GraphQL dei messages
{
    getMessages(messagesRequest: {
        ticket: 4,
      	sorted: [{id: "createdAt", desc: true},{id: "createdAt", desc: true}],
      	filtered: [{id: "qa", value: "A"}]
    })
    {
        count,
				rows {id, ticket, text, qa, createdAt, updatedAt}
    }
}
mutation {
    setMessage (message: {
      ticket: 4,
    	qa: "A",
      text: "Nuovo messaggio GraphQL di tipo A, ticket n. 4"
    })
    {
      id,isNewRecord
    }
}
mutation {
    updateMessage (message: {
      id: 115,
      ticket: 4,
    	qa: "A",
      text: "Aggiornamento messaggio GraphQL id 115, ticket n. 4"
    })
}
*/
let root = {
    getTickets: async req => {
        return await feedbackModel.getTickets(req.ticketsRequest);
    },
    getMessages: async req => {
        return await feedbackModel.getMessages(req.messagesRequest);
    },
    setMessage: async req => {
        return await feedbackModel.setMessage(req.message);
    },
    updateMessage: async req => {
        return await feedbackModel.updateMessage(req.message);
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

var server = app.listen(8080, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Feedback server in ascolto su http://%s:%s/graphql', host, port)
})
