/* jshint esversion: 6 */

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://feedback:fbpw@localhost:3306/feedback');
const Op = Sequelize.Op;

class FeedbackModel {
  constructor(sequelize) {
    /* richiede come parametro di inizializzazzione
     * la connessione al database
     */
    this.sequelize = sequelize;
    this.sequelize
      .authenticate()
      .then(() => {
        console.log('Connessione al db stabilita con successo.');
      })
      .catch(err => {
        console.error('Tentativo di connessione al db senza successo: ', err);
      });

    // Definizione del Model della tabella tickets
    this.Tickets = sequelize.define('tickets', {
      name: {
        type: Sequelize.STRING(128)
      },
      email: {
        type: Sequelize.STRING(128),
        isEmail: true
      },
      country: {
        type: Sequelize.STRING(128)
      },
      subject: {
        type: Sequelize.STRING(2048)
      }
    });

    // Crea la tabella tickets se non esiste
    /*this.Tickets.sync({
      force: false
    });*/

  
    // Definizione del Model della tabella messages
    this.Messages = sequelize.define('messages', {
      ticket: {
        type: Sequelize.INTEGER(11)
      },
      qa: {
        type: Sequelize.ENUM(['Q','A'])
      },
      text: {
        type: Sequelize.STRING(2048)
      }
    });
  }

    // Crea la tabella messages se non esiste
    /*this.Messages.sync({
      force: false
    });*/

  // Aggiunge un nuovo ticket
  _putTicket(row) {
    let ticketRow = {
      name: row.name,
      email: row.email,
      country: row.country,
      subject: row.subject
    };
    return this.Tickets.create(ticketRow);
  }

  // Aggiunge un nuovo messaggio
  _putMessage(row) {
    let messageRow = {
      ticket: row.ticket,
      qa: row.qa,
      text: row.text
    };
    return this.Messages.create(messageRow);
  }

  _parseFiltered(pars){
    let returnObject = {};
    if (pars.filtered == undefined) return returnObject;
    return pars.filtered.map(f => {
      if (f.value.search(/^ *>=/) == 0) returnObject[f.id] = { [Op.gte]: `${f.value.replace(/ *>= */, " ")}` };
      else if (f.value.search(/^ *>/) == 0) returnObject[f.id] = { [Op.gt]: `${f.value.replace(/ *> */, "")}` };
      else if (f.value.search(/^ *<=/) == 0) returnObject[f.id] = { [Op.lte]: `${f.value.replace(/ *<= */, "")}` };
      else if (f.value.search(/^ *</) == 0) returnObject[f.id] = { [Op.lt]: `${f.value.replace(/ *< */, "")}` };
      else if (f.value.search(/^ *=/) == 0) returnObject[f.id] = { [Op.eq]: `${f.value.replace(/ *=* */, "")}` };
      else if (f.value == "all")
        delete returnObject[f.id];
      else returnObject[f.id] = { [Op.like]: `%${f.value}%` };
      return returnObject;
    });
  }

  _parseOrdered(pars){
    if (pars.sorted == undefined) return returnObject;
    return pars.sorted.map(o => {
      return[ o.id, o.desc ? 'DESC' : 'ASC' ];
    });
  }

  /* Aggiunge un nuovo ticket col primo messaggio
    @row: FeedbackRow
    @return: Promise -> success(:PutFeedbackRowResponse)
    (Tipi ancora da aggiungere nello schema graphQL)
    @calls this._putTichet e this._putMessage
  */
  put(feedbackRow) {
    this._putTicket(feedbackRow).then (insertedTicket => {
      feedbackRow.ticket = insertedTicket.id;
      this._putMessage(feedbackRow);
    });
  }

  /* Restituisce i ticket richiesti
    @ticketsRequest: TicketRequest
    @return: Promise -> success(:Tickets)
  */
  getTickets(ticketsRequest) {
    let where = this._parseFiltered(ticketsRequest);
    if (ticketsRequest.startDate == undefined && ticketsRequest.endDate == undefined){
      return new Promise((success, reject) => {
        console.log("ticketsRequest:");
        console.log(ticketsRequest);
        reject("Intervallo date non definito");

      });
    }
    if (ticketsRequest.startDate == undefined) {
      ticketsRequest.startDate=ticketsRequest.endDate;
    } else if (ticketsRequest.endDate == undefined) {
      ticketsRequest.endDate=ticketsRequest.startDate;
    }
    where.push({ createdAt: { [Op.gte]: `${ticketsRequest.startDate} 00:00:00` } });
    where.push({ createdAt: { [Op.lte]: `${ticketsRequest.endDate} 24:00:00` } });

    if (ticketsRequest.pageSize == undefined)
      ticketsRequest.pageSize = 20;

    let order = this._parseOrdered(ticketsRequest);

    return new Promise((success, reject) => {
      console.log("ticketsRequest:");
      console.log(ticketsRequest);
      this.Tickets.findAndCountAll({
        where: where,
        order: order,
        offset: ticketsRequest.page * ticketsRequest.pageSize,
        limit: ticketsRequest.pageSize
      }).then(result => {
        console.log(`lette ${result.count} righe`);
        success({
          count:result.count,
          rows:result.rows.map(r=>{return(r.dataValues);})
        });
      });
    });
  }

  /* Crea un nuovo messaggio o ne modifica uno preesistente
    con la stessa dataora
    @message :Message
    @return :Promise -> success(:SetMessageResponse)
  */
  setMessage(message) {
    return new Promise((success, reject) => {
      console.log("message:");
      console.log(message);
      this.Messages.findOrCreate({
        where: {
          createdAt: message.createdAt,
          text: message.text
        },
        defaults: message
      }).then(result => {
        success({
          id:result[0].id,
          isNewRecord:result[0].isNewRecord
        });
      });
    });
  }

  /* Aggiorna un messaggio con lo stesso id
    @message: Messag
    @return: Promise -> success(:Boolean)
  */
  updateMessage(message) {
    return this.Messages.upsert(message);
  }
  
  /* Restituisce i messaggi richiesti
    @messagesRequest: MessagesRequest
    @return: Promise -> success(:Messages)
  */
  getMessages(messagesRequest){
    let where = this._parseFiltered(messagesRequest);
    if (messagesRequest.ticket == undefined){
      return new Promise((success, reject) => {
        console.log("messagesRequest:");
        console.log(messagesRequest);
        reject("Manca il numero ticket");
      });
    }

    where.push({ ticket: { [Op.eq]: messagesRequest.ticket } });

    let order = this._parseOrdered(messagesRequest);

    return new Promise((success, reject) => {
      console.log("messagesRequest:");
      console.log(messagesRequest);
      this.Messages.findAndCountAll({
        where: where,
        order: order
      }).then(result => {
        console.log(`lette ${result.count} righe`);
        success({
          count:result.count,
          rows:result.rows.map(r=>{return(r.dataValues);})
        });
      });
    });
  }

}

module.exports = new FeedbackModel(sequelize);