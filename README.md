# <span id="anchor"></span>Proposta di strutturazione in moduli del progetto di formazione per sviluppatori web **f**ull-**s**tack

## Motivazione delle scelte effettuate

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
basano essenzialmente su un dom virtuale che è una estensione di html
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

## <span id="anchor"></span>Nozioni sulle reti e sui sistemi operativi indispensabili

Questo modulo si propone di verificare ed integrare la conoscenza delle
nozioni indispensabili sull’utilizzo dei computer dei sistemi operativi,
sui server, su Internet ed i protocolli di rete TCP/IP, HTTP. HTTPS,
Ethernet.

## <span id="anchor"></span>Controllo di versione git/github e nozioni sui processi AGILE/SCRUM/UP

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

## <span id="anchor"></span>Basi di HTML5, DOM e CSS

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

## <span id="anchor"></span>Introduzione alla programmazione orientata agli oggetti usando javascript e la programmazione lato client

Una volta apprese le nozioni indispensabili per creare le interfacce
html usando il DOM, in questo modulo si inizierà ad usare javascript,
con esempi gradualmente sempre più complessi. Prendendo spunto dagli
esempi pratici si introdurrà la programmazione orientata agli oggetti
utilizzando il linguaggio javascript interagente col DOM di un browser.

## <span id="anchor"></span>Back-End Node-JS (staccare sql e mongodb)

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
[https://resttesttest.com/](https://resttesttest.com/) o alternativi

Ciascuno potrà svolgere i propri esercizi installando NodeJs sul proprio
computer. In un secondo momento gli allievi produrranno collettivamente
il progetto oggetto del modulo su GitHub.

## <span id="anchor"></span>Framework client ReactJs

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

## <span id="anchor"></span>Introduzione alla programmazione ad oggetti con PHP

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

# <span id="anchor"></span>Calendario

Occorre articolare ulteriormente il seguente calendario suddividendo le ore che seguono tra teoria e progetto.
Il progetto sarà realizzato di pari passo, e sarà a cura del modulo SCRUM che, pertanto, dovrà essere  spalmato
abbinando le UD pratiche con le UD previste per i moduli sottostanti.


| **MODULO**                                                                                                    | **UD**                                                       | **ore** | **Teoria** | **Pratica/git/scrum** | **Pratica da remoto** | **Giorno** | **Settimana** |
|---------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|---------|------------|-----------------------|-----------------------|------------|---------------|
| **Nozioni sulle reti e sui sistemi operativi indispensabili**                                                 | ETHERNET, TCP/IP, SOCKET HTTP, HTTPS, REST                   | **5**   | 5          |                       |                       | 1          | 1             |
|                                                                                                               |                                                              | **5**   | 5          |                       |                       | 2          | 1             |
|                                                                                                               |                                                              | **5**   | 5          |                       |                       | 3          | 1             |
| **Controllo di versione git/github e nozioni sui processi AGILE/SCRUM/UP**                                    | GIT ed introduzione a SCRUM                                  | **5**   | 3          | 2                     | 3                     | 4          | 1             |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 5          | 1             |
| **Basi di HTML5**                                                                                             | Breve storia della nascita di HTML5                          | **1**   | 3          | 2                     | 3                     | 6          | 2             |
|                                                                                                               | Elementi di base di una pagina web                           | **2**   |            |                       |                       | 6          | 2             |
|                                                                                                               | Inserimento e formattazione di base del testo                | **2**   |            |                       |                       | 6          | 2             |
|                                                                                                               | Generazione di liste                                         | **1**   | 3          | 2                     | 3                     | 7          | 2             |
|                                                                                                               | Utilizzo delle tabelle                                       | **2**   |            |                       |                       | 7          | 2             |
|                                                                                                               | Navigazione tra i contenuti delle pagine web                 | **2**   |            |                       |                       | 7          | 2             |
|                                                                                                               | Visualizzazione di immagini e creazione di mappe             | **2**   | 3          | 2                     | 3                     | 8          | 2             |
|                                                                                                               | Creazione di form e controlli utente                         | **3**   |            |                       |                       | 8          | 2             |
|                                                                                                               | Elementi per la strutturazione di una pagina HTML            | **2**   | 3          | 2                     | 3                     | 9          | 2             |
|                                                                                                               | Elementi semantici per il testo                              | **2**   |            |                       |                       | 9          | 2             |
|                                                                                                               | Miscellanea di elementi                                      | **1**   |            |                       |                       | 9          | 2             |
| **CSS3**                                                                                                      | Regole e selettori di base                                   | **1**   | 3          | 2                     | 3                     | 10         | 2             |
|                                                                                                               | Associazione di regole CSS                                   | **2**   |            |                       |                       | 10         | 2             |
|                                                                                                               | Selettori avanzati                                           | **2**   |            |                       |                       | 10         | 2             |
|                                                                                                               | Pseudo-classi                                                | **2**   | 3          | 2                     | 3                     | 11         | 3             |
|                                                                                                               | Pseudo-elementi                                              | **1**   |            |                       |                       | 11         | 3             |
|                                                                                                               | Organizzazione a cascata                                     | **1**   |            |                       |                       | 11         | 3             |
|                                                                                                               | L’ereditarietà                                               | **1**   |            |                       |                       | 11         | 3             |
|                                                                                                               | Valori e unità                                               | **1**   | 3          | 2                     | 3                     | 12         | 3             |
|                                                                                                               | Il box model                                                 | **2**   |            |                       |                       | 12         | 3             |
|                                                                                                               | Proprietà dei font                                           | **2**   |            |                       |                       | 12         | 3             |
|                                                                                                               | Proprietà del testo                                          | **2**   | 3          | 2                     | 3                     | 13         | 3             |
|                                                                                                               | Proprietà del colore e degli sfondi                          | **2**   |            |                       |                       | 13         | 3             |
|                                                                                                               | Proprietà delle liste                                        | **1**   |            |                       |                       | 13         | 3             |
|                                                                                                               | Proprietà delle tabelle                                      | **1**   | 3          | 2                     | 3                     | 14         | 3             |
|                                                                                                               | Proprietà del box model                                      | **2**   |            |                       |                       | 14         | 3             |
|                                                                                                               | Le media query                                               | **2**   |            |                       |                       | 14         | 3             |
| **Introduzione alla programmazione orientata agli oggetti usando javascript e la programmazione lato client** | Concetti propedeutici della OOP                              | **2**   | 3          | 2                     | 3                     | 15         | 3             |
|                                                                                                               | Variabili, letterali e tipi                                  | **3**   |            |                       |                       | 15         | 3             |
|                                                                                                               | Array                                                        | **1**   | 3          | 2                     | 3                     | 16         | 4             |
|                                                                                                               | Operatori                                                    | **4**   |            |                       |                       | 16         | 4             |
|                                                                                                               | Strutture di controllo                                       | **3**   | 3          | 2                     | 3                     | 17         | 4             |
|                                                                                                               | Funzioni                                                     | **2**   |            |                       |                       | 17         | 4             |
|                                                                                                               | Oggetti                                                      | **3**   | 3          | 2                     | 3                     | 18         | 4             |
|                                                                                                               | Classi e prototipi                                           | **2**   |            |                       |                       | 18         | 4             |
|                                                                                                               | Ereditarietà e polimorfismo                                  | **2**   | 3          | 2                     | 3                     | 19         | 4             |
|                                                                                                               | Errori software                                              | **2**   |            |                       |                       | 19         | 4             |
|                                                                                                               | La direttiva "use strict"                                    | **1**   |            |                       |                       | 19         | 4             |
| **Javascript lato client**                                                                                    | Il Browser Object Model (BOM)                                | **5**   | 3          | 2                     | 3                     | 20         | 4             |
|                                                                                                               | Il Document Object Model (DOM)                               | **5**   | 3          | 2                     | 3                     | 21         | 5             |
|                                                                                                               | Gestione degli eventi                                        | **4**   | 3          | 2                     | 3                     | 22         | 5             |
|                                                                                                               | Scripting dei CSS                                            | **1**   |            |                       |                       | 22         | 5             |
| **sql**                                                                                                       | Linguaggio definizione, manipolazione, interrogazione        | **5**   | 3          | 2                     | 3                     | 23         | 5             |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 24         | 5             |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 25         | 5             |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 26         | 6             |
| **NoSql**                                                                                                     | mongoDb, creazione documenti, interrogazione, manipolazione, | **5**   | 3          | 2                     | 3                     | 27         | 6             |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 28         | 6             |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 29         | 6             |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 30         | 6             |
| **Back-End Node-JS**                                                                                          | Enviroment Node                                              | **5**   | 3          | 2                     | 3                     | 31         | 7             |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 32         | 7             |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 33         | 7             |
|                                                                                                               | instanziare un Server Express                                | **5**   | 3          | 2                     | 3                     | 34         | 7             |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 35         | 7             |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 36         | 8             |
|                                                                                                               | Connessione Database Orm                                     | **5**   | 3          | 2                     | 3                     | 37         | 8             |
|                                                                                                               |                                                              | **5**   | 4          | 2                     | 3                     | 38         |               |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 39         | 8             |
|                                                                                                               | Routing API                                                  | **5**   | 3          | 2                     | 3                     | 40         | 8             |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 41         | 9             |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 42         | 9             |
|                                                                                                               | SOCKET IO                                                    | **5**   | 3          | 2                     | 3                     | 43         | 9             |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 44         | 9             |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 45         | 9             |
|                                                                                                               | Descrizione del progetto da realizzare, rest api e test      | **5**   | 3          | 2                     | 3                     | 46         | 10            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 47         | 10            |
| **Framework client ReactJs**                                                                                  | WHY REACT                                                    | **5**   | 3          | 2                     | 3                     | 48         | 10            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 49         | 10            |
|                                                                                                               | PWA (progressive web application)                            | **5**   | 3          | 2                     | 3                     | 50         | 10            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 51         | 11            |
|                                                                                                               | Cicli di vita e state management                             | **5**   | 3          | 2                     | 3                     | 52         | 11            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 53         | 11            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 54         | 11            |
|                                                                                                               | React Hooks                                                  | **5**   | 3          | 2                     | 3                     | 55         | 11            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 56         | 12            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 57         | 12            |
|                                                                                                               | React router                                                 | **5**   | 3          | 2                     | 3                     | 58         | 12            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 59         | 12            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 60         | 12            |
|                                                                                                               | interazione con il Server                                    | **5**   | 3          | 2                     | 3                     | 61         | 13            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 62         | 13            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 63         | 13            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 64         | 13            |
|                                                                                                               | Redux Observable                                             | **5**   | 3          | 2                     | 3                     | 65         | 13            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 66         | 14            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 67         | 14            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 68         | 14            |
| **Introduzione alla programmazione ad oggetti con PHP**                                                       | Introduzione PHP                                             | **5**   | 3          | 2                     | 3                     | 69         | 14            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 70         | 14            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 71         | 15            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 72         | 15            |
|                                                                                                               | Creazione API (almeno 1) di riferimento in PHP               | **5**   | 3          | 2                     | 3                     | 73         | 15            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 74         | 15            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 75         | 15            |
|                                                                                                               |                                                              | **5**   | 3          | 2                     | 3                     | 76         | 16            |
| Ore Totali                                                                                                    |                                                              | 380     | 235        | 146                   | 219                   |            |               |

## <span id="anchor"></span>Per convertire il presente documento

### <span id="anchor"></span>Da odt a md:

    pandoc -f odt -t gfm "Progetto corso sviluppatore web full-stack.odt" > README.md

### <span id="anchor"></span>Da md a odt

    pandoc -f gfm -t odt README.md > "Progetto corso sviluppatore web full-stack.odt"
