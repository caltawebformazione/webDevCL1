## <span id="anchor"></span>Per convertire il presente documento

### <span id="anchor"></span>Da odt a md:

pandoc -f odt -t gfm Progetto\\ corso\\ sviluppatore\\ web\\
full-stack.odt \> README.md

## <span id="anchor"></span>Da md a odt

pandoc -f gfm -t odt README.md \> Progetto\\ corso\\ sviluppatore\\
web\\ full-stack.odt

## <span id="anchor"></span>Proposta di strutturazione in moduli del progetto di formazione per sviluppatori web **f**ull-**s**tack

Esistono diverse alternative per la scelta del framework back end.
Nodejs, oltre che una scelta Gben supportata ed efficiente ha il
vantaggio di poter essere scelto senza dover imparare un nuovo
linguaggio per chi conosce javascript. Javascript deve necessariamente
essere conosciuto a prescindere, perché allo stato è l'unico linguaggio
utilizzabile per la realizzazione del front-end. Infatti web assembly
non è ancora molto maturo e non consente una manipolazione diretta del
DOM senza passare da javascript. Gli applet java, gli activex ed i
plugin come flash sono stati deprecati da tempo per ragioni di
sicurezza. I framework per il front-end che vanno attualmente per la
maggiore sono tre e sono: Angularjs, che è in declino, Reactjs che è il
framework di facebook, che gode del primato di popolarità attuale, e
VueJs un po’ meno popolare di ReactJs ma in crescita. Gli ultimi due si
basano essenzialmente su un dom virtuale che è una estenzione di html
che semplifica la scrittura di codice javascript. ReactJs si basa sui
componenti che incorporano stili, codice e html, VueJs mantiene la
separazione tra html stili e codice. Entrambi hanno una buona
documentazione e dei buoni tutorial. Dato che ReactJs è sostenuto da
aziende come Facebook la scelta ricade su di esso perché sono ridotti al
minimo i rischi di apprendere nozioni non valide nel tempo. Lo stack
prescelto è quindi NodeJs-ReactJs.

Forse sarebbe meglio separare i moduli con delle pause per poter
consentire loro di avere più tempo per prendere confidenza con le cose
apprese. Alcuni potrebbero optare per una parte dei moduli, se ritengono
di non avere necessità di approfondire tutto ed attirare persone che
avrebbero timore di un eccessivo sovraccarico. Il corso si dovrebbe
articolare nelle seguenti parti:

### <span id="anchor"></span>Nozioni sulle reti e sui sistemi operativi indispensabili

Questo modulo si propone di verificare ed integrare la conoscenza delle
nozioni indispensabili sull’utilizzo dei computer dei sistemi operativi,
sui server, su Internet ed i protocolli di rete TCP/IP, HTTP. HTTPS,
Ethernet.

### <span id="anchor"></span>Controllo di versione git/github e nozioni sui processi AGILE/SCRUM/UP

Questo modulo, precede gli altri, ma serve solo a gettare le basi del
versioning con git. Comunque solo l’applicazione concreta del versioning
consentirebbe agli allievi di impadronirsi di tali tecniche. Pertanto
gli allievi verranno accompagnati durante tutto il corso nelle
esercitazioni pratiche per essere guidarli nell’utilizzo corretto del
controllo di versione e sui principi del manifesto AGILE per la
progettazione del software. Questo modulo, inoltre, dovrebbe introdurre
e rendere confidenti gli allievi sull’utilizzo dell’IDE prescelto. Delle
scelte possibili sono WebStorm di JetBrain o VS-Code. Il modulo è
suddiviso nelle seguenti parti:

  - Le basi di GIT.
  - Introduzione a WebStorm/VS-Code ed utilizzo del versioning con tali
    strumenti
  - processi AGILE ed introduzione a SCRUM utilizzando i progetti Github

### <span id="anchor"></span>Basi di HTML5, DOM e CSS

Questa prima parte del corso si focalizzerebbe sul front-end, con i
seguenti moduli:

  - html5,
  - css3,

Il modulo ha come oggetto la conoscenza delle basi di HTML5, del
Document Object Model e di CSS3. L’obiettivo del modulo è mettere in
grado di creare semplici pagine statiche utilizzando il browser e l’ IDE
prescelto. In questo primo modulo, pertanto, si inizierà ad usare un IDE
scelto tra Web Storm o VS-Code. La parte reladiva al css3 dovrebbe
essere particolarmente orientato al comportamento responsive, oltre che
sulle nozioni generali sui fogli di stile.

Le esercitazioni verteranno nella realizzazione di pagine statiche
simili a quelle che verranno proiettate.

### <span id="anchor"></span>Introduzione alla programmazione orientata agli oggetti usando javascript e la programmazione lato client

Una volta apprese le nozioni indispensabili per creare le interfacce
html usando il DOM, in questo modulo si inizierà ad usare javascript,
con esempi gradualmente sempre più complessi. Prendendo spunto dagli
esempi pratici si introdurrà la programmazione orientata agli oggetti
utilizzando il linguaggio javascript interagente col DOM di un browser.

### <span id="anchor"></span>Back-End Node-JS (staccare sql e mongodb)

Una parte successiva, per il momento, tralascerebbe il front-end per
focalizzarsi sul lato server con node-js. Si introduce REST e si
realizza un progetto per registrare, leggere e cancellare righe di una
tabella di database. Questa tabella conterrà i campi per la tenuta di un
Backlog SCRUM. Questa parte avrebbe come moduli:

  - javascript lato server,
  - SQL e cenni di MongoDB,
  - sequelize come ORM,
  - express per il routing.

Il server realizzato verrebbe testato con strumenti come
<https://resttesttest.com/> o alternativi

Ciascuno potrà svolgere i propri esercizi installando NodeJs sul proprio
computer. In un secondo momento gli allievi produrranno collettivamente
il progetto oggetto del modulo su GitHub.

### <span id="anchor"></span>Framework client ReactJs

In questa parte viene realizzato il front end per l’aggiornamento dei
dati tabellari con prove di comunicazione ajax con il server che esegue
il progetto predisposto nella parte precedente. I moduli sono i
seguenti:

  - Convertire per ReactJs quanto già realizzato nella prima parte del
    corso.
  - Realizzare una form in doppio formato tabellare e maschera, per la
    comunicazione REST col server che esegue il progetto realizzato
    nella seconda parte.

Adoperando il progetto in precedenza realizzato in precedenza con NodeJs
i ragazzi potranno testare i propri componenti ReactJs facendoli
comunicare in REST con esso. Anche in questa fase si organizzeranno le
esercitazioni, in un primo momento con prove da implementare sul proprio
computer e successivamente produrranno in modo collaborativo il progetto
oggetto del modulo, anche suddividendo tra diversi gruppi parti del
progetto.

### <span id="anchor"></span>Introduzione alla programmazione ad oggetti con PHP

Per introdurre gli allievi ad un linguaggio molto diffuso lato server
abbiamo pensato a due possibili approcci.

  - In un caso il modulo php si baserebbe sull’utilizzo di php puro
    senza adoperare alcun framework per registrare semplici preferenze
    utente per modificare la modalità di visualizzazione di un semplice
    sito
  - Un’altra possibilità sarebbe invece quella di introdurre all’uso di
    un cms basato su php, nella fattispecie Wordpress. Si tratterebbe,
    in questo caso, di realizzare un semplice template molto basico con
    articoli e menu.

# <span id="anchor"></span>

# <span id="anchor"></span>Calendario

| **MODULO**                                                                                                    | **UD**                                                  | **ORE** |         |         |
|---------------------------------------------------------------------------------------------------------------| ------------------------------------------------------- | ------- | ------- | ------- |
| **Controllo di versione git/github e nozioni sui processi AGILE/SCRUM/UP**                                    |                                                         | **15**  | **60**  | **60**  |
|                                                                                                               |                                                         | **15**  |         |         |
|                                                                                                               |                                                         | **15**  |         |         |
|                                                                                                               |                                                         | **15**  |         |         |
| **Nozioni sulle reti e sui sistemi operativi indispensabili**                                                 | ETHERNET                                                | **4**   | **25**  | **180** |
|                                                                                                               | TCP/IP, SOCKET                                          | **6**   |         |         |
|                                                                                                               | HTTP/REST                                               | **6**   |         |         |
|                                                                                                               | HTTPS                                                   | **5**   |         |         |
|                                                                                                               | REST                                                    | **4**   |         |         |
| **Basi di HTML5**                                                                                             | Breve storia della nascita di HTML5                     | **2**   | **28**  |         |
|                                                                                                               | Elementi di base di una pagina web                      | **2**   |         |         |
|                                                                                                               | Inserimento e formattazione di base del testo           | **2**   |         |         |
|                                                                                                               | Generazione di liste                                    | **2**   |         |         |
|                                                                                                               | Utilizzo delle tabelle                                  | **2**   |         |         |
|                                                                                                               | Navigazione tra i contenuti delle pagine web            | **2**   |         |         |
|                                                                                                               | Visualizzazione di immagini e creazione di mappe        | **2**   |         |         |
|                                                                                                               | Creazione di form e controlli utente                    | **6**   |         |         |
|                                                                                                               | Elementi per la strutturazione di una pagina HTML       | **2**   |         |         |
|                                                                                                               | Elementi semantici per il testo                         | **2**   |         |         |
|                                                                                                               | Miscellanea di elementi                                 | **4**   |         |         |
| **CSS3**                                                                                                      | Regole e selettori di base                              | **2**   | **50**  |         |
|                                                                                                               | Associazione di regole CSS                              | **4**   |         |         |
|                                                                                                               | Selettori avanzati                                      | **4**   |         |         |
|                                                                                                               | Pseudo-classi                                           | **4**   |         |         |
|                                                                                                               | Pseudo-elementi                                         | **2**   |         |         |
|                                                                                                               | Organizzazione a cascata                                | **2**   |         |         |
|                                                                                                               | L’ereditarietà                                          | **2**   |         |         |
|                                                                                                               | Valori e unità                                          | **2**   |         |         |
|                                                                                                               | Il box model                                            | **2**   |         |         |
|                                                                                                               | Proprietà dei font                                      | **4**   |         |         |
|                                                                                                               | Proprietà del testo                                     | **4**   |         |         |
|                                                                                                               | Proprietà del colore e degli sfondi                     | **4**   |         |         |
|                                                                                                               | Proprietà delle liste                                   | **2**   |         |         |
|                                                                                                               | Proprietà delle tabelle                                 | **3**   |         |         |
|                                                                                                               | Proprietà del box model                                 | **6**   |         |         |
|                                                                                                               | Le media query                                          | **3**   |         |         |
| **Introduzione alla programmazione orientata agli oggetti usando javascript e la programmazione lato client** | Concetti propedeutici della OOP                         | **2**   | **36**  |         |
|                                                                                                               | Variabili, letterali e tipi                             | **5**   |         |         |
|                                                                                                               | Array                                                   | **2**   |         |         |
|                                                                                                               | Operatori                                               | **6**   |         |         |
|                                                                                                               | Strutture di controllo                                  | **5**   |         |         |
|                                                                                                               | Funzioni                                                | **3**   |         |         |
|                                                                                                               | Oggetti                                                 | **4**   |         |         |
|                                                                                                               | Classi e prototipi                                      | **2**   |         |         |
|                                                                                                               | Ereditarietà e polimorfismo                             | **3**   |         |         |
|                                                                                                               | Errori software                                         | **2**   |         |         |
|                                                                                                               | La direttiva "use strict"                               | **2**   |         |         |
| **Javascript lato client**                                                                                    | Il Browser Object Model (BOM)                           | **5**   | **17**  |         |
|                                                                                                               | Il Document Object Model (DOM)                          | **4**   |         |         |
|                                                                                                               | Gestione degli eventi                                   | **6**   |         |         |
|                                                                                                               | Scripting dei CSS                                       | **2**   |         |         |
| **sql**                                                                                                       | Linguaggio definizione                                  | **6**   | **24**  |         |
|                                                                                                               | manipolazione                                           | **6**   |         |         |
|                                                                                                               | interrogazione                                          | **12**  |         |         |
| **NoSql**                                                                                                     | mongoDb                                                 | **20**  | **50**  | 300     |
|                                                                                                               | creazione documenti                                     | **10**  |         |         |
|                                                                                                               | interrogazione                                          | **10**  |         |         |
|                                                                                                               | manipolazione                                           | **10**  |         |         |
| **Back-End Node-JS**                                                                                          | Enviroment Node                                         | **20**  | **105** |         |
|                                                                                                               | instanziare un Server Express                           | **20**  |         |         |
|                                                                                                               | Connessione Databe Orm                                  | **12**  |         |         |
|                                                                                                               | Routing API                                             | **23**  |         |         |
|                                                                                                               | SOCKET IO                                               | **20**  |         |         |
|                                                                                                               | Descrizione del progetto da realizzare, rest api e test | **10**  |         |         |
| **Framework client ReactJs**                                                                                  | WHY REACT                                               | **10**  | **145** |         |
|                                                                                                               | PWA (progressive web application)                       | **15**  |         |         |
|                                                                                                               | Cicli di vita e state management                        | **20**  |         |         |
|                                                                                                               | React Hooks                                             | **20**  |         |         |
|                                                                                                               | React router                                            | **20**  |         |         |
|                                                                                                               | interazione con il Server                               | **30**  |         |         |
|                                                                                                               | Redux Observable                                        | **30**  |         |         |
| **Introduzione alla programmazione ad oggetti con PHP**                                                       | Introduzione PHP                                        | **30**  | **60**  | 60      |
|                                                                                                               | Crezione API (almeno 1) di riferimento in PHP           | **30**  |         |         |
| Ore Totali                                                                                                    |                                                         | 600     | 600     | 600     |
