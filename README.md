## <span id="anchor"></span>Proposta di strutturazione in moduli del progetto di formazione per sviluppatori web **f**ull-**s**tack

Esistono diverse alternative per la scelta del framework back end.
Nodejs, oltre che una scelta ben supportata ed efficiente ha il
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

### <span id="anchor-1"></span>Nozioni sulle reti e sui sistemi operativi indispensabili

Questo modulo si propone di verificare ed integrare la conoscenza delle
nozioni indispensabili sull’utilizzo dei computer dei sistemi operativi,
sui server, su Internet ed i protocolli di rete TCP/IP, HTTP. HTTPS,
Ethernet.

### <span id="anchor-2"></span>Controllo di versione git/github e nozioni sui processi AGILE/SCRUM/UP

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

### Basi di HTML5, DOM e CSS

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

### Introduzione alla programmazione orientata agli oggetti usando javascript e la programmazione lato client

Una volta apprese le nozioni indispensabili per creare le interfacce
html usando il DOM, in questo modulo si inizierà ad usare javascript,
con esempi gradualmente sempre più complessi. Prendendo spunto dagli
esempi pratici si introdurrà la programmazione orientata agli oggetti
utilizzando il linguaggio javascript interagente col DOM di un browser.

### <span id="anchor-3"></span>Back-End Node-JS (staccare sql e mongodb)

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

### <span id="anchor-4"></span>Framework client ReactJs

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

### <span id="anchor-5"></span>Introduzione alla programmazione ad oggetti con PHP

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
