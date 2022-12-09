class Evento{
  pars;
  figurePathString;
  soundPathString;
  containerElement;
  constructor (txtJsonPars){
    this.pars=JSON.parse(txtJsonPars);
    this.figurePathString = this.pars.figurePathString;
    this.soundPathString  = this.pars.soundPathString;
    this.containerElement = this.pars.containerElement;

  }
}

class DragDropArea {
  squareSearchListObject = new SquareSearchList();

  touchStart(e){
    console.log("touchStart");
    e.preventDefault();
    /*/
    //console.log("touchEvent e: ---------------------------------");
    //console.log(e);
    //console.log("----------------------------------------");
    /**/
    if (e.target.tagName==="IMG"){
      //console.log("e.target.tagName===\"IMG\"");
      //console.log(e);
      e.target.addEventListener("touchmove",this.touchMove.bind(this));
      e.target.addEventListener("touchend",this.touchEnd.bind(this));
    }
    wrapper.esatto();
    const touchLocation = e.targetTouches[0];
    let X = touchLocation.pageX;
    let Y = touchLocation.pageY;
    let nearSquare = this.squareSearchListObject.searchNearSquare(X,Y);
    if (nearSquare != undefined) {
      /*/
      //console.log("chiamato Wrapper.selSource da "+this.constructor.name+".touchStart()");
      //console.log(this.squareSearchList);
      //console.log("-------------------------------");
      /**/
      wrapper.selSource(nearSquare.squareNode);// il pezzo viene selezionato
    }
  }

  touchMove(e){
    console.log("touchMove");
    if(wrapper.srcNode == null || wrapper.srcNode == undefined){
      return(false) ;
    }
    e.preventDefault();

    let touchLocation = e.targetTouches[0];
    /*/
    //console.log("e.targetTouches");
    //console.log(e.targetTouches);
    //console.log("---------------------------------------------------");
    /**/
    let X = touchLocation.pageX - wrapper.srcNode.width/3;
    let Y = touchLocation.pageY - wrapper.srcNode.height/3;

    wrapper.srcNode.style.left = X + 'px';
    wrapper.srcNode.style.top = Y + 'px';
    //console.log("X;"+X+" Y:"+Y);

    if(X<0 || Y<0){
      //console.log("\t-la destinazione è fuori schermo");
      wrapper.destNode = null;
      wrapper.annullaSpostamento();
      return false;
    }

    let destParentNode = chessboard.squareAtPosition(X,Y);

    if (destParentNode == null) {
      //console.log("\t-la destinazione non è sulla scacchiera");
      wrapper.destNode = null;
      wrapper.destParentNode = null;
      return;
    }
    let destNode = destParentNode.firstChild;

    /*/
    //console.log("\t-la destinazione è sulla scacchiera");
    //console.log("\t-destNode: " + destNode.tagName + "\tid: "+ destNode.id);
    //console.log("\t-destParentNode: " + destParentNode.tagName + "\tid: "+ destParentNode.id);
    //console.log("\t-wrapper.destNode: "+ wrapper.destNode);
    //console.log("\t-wrapper.destParentNode: "+ wrapper.destParentNode);
    /**/

    if (wrapper.destNode !== null && wrapper.destNode !== undefined && wrapper.destNode !== destNode) {
      wrapper.destNode.classList.remove("over");
    }

    wrapper.destNode = destNode;
    wrapper.destParentNode = destParentNode;
    wrapper.destNode.classList.add("over");
  }

  touchEnd(e){
    console.log("touchEnd");
    e.stopPropagation(); // stops the browser from redirecting.
    let destNode = wrapper.destNode;
    if(wrapper.srcNode == null || wrapper.srcNode == undefined) {
      //console.log("nessun pezzo da collocare");
      return;
    }
    if(destNode == null || destNode == undefined) {
      /*/
      //console.log("nodo destinazione nullo");
      //console.log("spostamento annullato");
      /**/
      wrapper.annullaSpostamento();
      return;
    }
    if (wrapper.srcNode === destNode) {
      /*/
      //console.log("nodo destinazione coincidente con quello di partenza"+ wrapper.srcNode);
      //console.log("spostamento annullato");
      /**/
      wrapper.annullaSpostamento();
      return;
    }
    if (wrapper.destParentNode == null || wrapper.destParentNode == undefined ) {
      /*/
      //console.log("nodo destinazione esterno alla scacchiera");
      //console.log("spostamento annullato");
      /**/
      wrapper.annullaSpostamento();
      return;
    }

    if(wrapper.destParentNode.childElementCount > 1){
      /**/
      //console.log("nodo destinazione occupato");
      //console.log("spostamento annullato");
      /**/
      wrapper.annullaSpostamento();
      return;
    }

    // rimozione del pezzo dalla sua collocazione iniziale
    wrapper.srcNode.parentElement.removeChild(wrapper.srcNode);
    if(wrapper.srcParentNode.parentElement !== 'palette') {
      wrapper.srcParentNode.style.removeProperty('opacity');
      wrapper.srcParentNode.classList.remove('over');
    }

    // collocazione del pezzo nella scacchiera
    /*/
    //console.log("chiamato Chessboard.placePiece() da "+this.constructor.name+".touchEnd()");
    //console.log(this.squareSearchList);
    /**/
    chessboard.placePiece();
    /*/
    //console.log(this.squareSearchList);
    //console.log("-------------------------------");
    /**/

    // rimozione del pezzo da this.squareSearchList
    this.squareSearchListObject.remove(wrapper.srcParentNode);

    // Nessun pezzo selezionato
    wrapper.srcNode = undefined;

    return true;
  }

  handleDragStart(e) {
    //console.log("handleDragStart");
    wrapper.esatto();
    wrapper.srcNode = e.target;
    wrapper.srcParentNode = e.target.parentElement;
    e.target.parentElement.style.opacity = '0.4';
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.outerHTML);
  }


  handleDragEnd(e) {
    //console.log("handleDragEnd");
    if(e.target !== null) {
      if(e.target.tagName.toUpperCase() ==="IMG")
        e.target.parentElement.style.removeProperty('opacity');
      else
        e.target.style.removeProperty('opacity');
    }
  }

  handleDragOver(e) {
    // Mentre ci si muove
    //console.log("handleDragOver id:"+e.target.id);
    e.preventDefault();
    return false;
  }

  handleDragEnter(e) {
    console.log("handleDragEnter");
    let target = e.target;
    console.log(target);
    if(!target.classList.contains("square")) {
      target = target.parentElement;
    }
    console.log(target);
    target.classList.add("over");
    console.log(target);
    console.log("-------------------");
  }

  handleDragLeave(e) {
    console.log("handleDragLeave");
    let target = e.target;
    console.log(target);
    if(!target.classList.contains("square")) {
      target = target.parentElement;
    }
    console.log(target);

    if(wrapper.srcParentNode.id !== target.id) {
      console.log("wrapper.srcParentNode.id: "+wrapper.srcParentNode.id+"target.id: "+target.id);
      e.target.classList.remove('over');
    }

    console.log(target);
    console.log("-------------------");
  }

  handleDrop(e) {
    // al rilascio del mouse
    console.log("handleDrop");
    e.stopPropagation(); // stops the browser from redirecting.
    let target = e.target;
    if(!target.classList.contains("square")) {
      target = target.parentElement;
    }

    if(!target.classList.contains("square")) {
      console.log("destinazione non valida");
      debugger;
      //wrapper.srcParentNode.classList.add('over');
      return ;
    }

    if(target.parentElement.id !== "squares") {
      console.log("destinazione fuori dalla scacchiera");
      debugger;
      //wrapper.srcParentNode.classList.add('over');
      return ;
    }

    let destNode = target.firstChild;
    if(destNode == null) {
      console.log("la destinazione non contiene alcuna immagine");
      debugger;
      return ;
    }

    if(wrapper.srcNode.src !== destNode.src) {
      console.log("sbagliato");
      let html = e.dataTransfer.getData('text/html');
      let temp = document.createElement('template');
      temp.innerHTML = html;
      e.target.appendChild(temp.content.firstChild);
      wrapper.srcParentNode.classList.remove('over');
      wrapper.esatto(false);
    } else {
      console.log("esatto");
      destNode.classList.remove("hidden");
      e.target.classList.remove('over');
      document.getElementById("esatto").style.display="block";
      wrapper.esatto(true);
    }
    if(wrapper.srcParentNode.parentElement.id !== 'palette')
      wrapper.srcNode.parentElement.style.removeProperty('opacity');
    if(wrapper.srcParentNode.id !== target.id) {
      console.log("wrapper.srcParentNode.id: "+wrapper.srcParentNode.id+"target.id: "+target.id);
      wrapper.srcNode.parentElement.lastChild.remove();
    }
    else {
      console.log("sorgente e destinazione coincidenti");
      wrapper.srcParentNode.classList.add('over');
    }
    return true;
  }

}

class Palette extends DragDropArea{
  numSquares = 8;
  paletteNode;
  wrapper;
  constructor(wrapper) {
    super();
    this.wrapper = wrapper;
    this.paletteNode = document.createElement("div");
    this.paletteNode.id = "palette";
    document.getElementById("wrapper").appendChild(this.paletteNode);
    this.initPaletteTouchEvents();
  }

  populate(){
    let randomChessArray = chessboard.getRandomChessArray(this.numSquares);
    randomChessArray.forEach((labelToInsert) => {
      let square = new Square(this.paletteNode, labelToInsert);
      let squareNode = square.squareNode;
      squareNode.classList.add("piece");
      this.squareSearchListObject.push(square);
      this.initPaletteDragEvents(squareNode);
    });
  }

  initPaletteTouchEvents(){
    this.paletteNode.addEventListener('touchstart', this.touchStart.bind(this));
    this.paletteNode.addEventListener('touchmove', this.touchMove.bind(this));
    this.paletteNode.addEventListener('touchend', this.touchEnd.bind(this));
  }

  initPaletteDragEvents(paletteSquare){
    /*/
    paletteSquare.addEventListener('touchstart', this.handleDragStart);
    paletteSquare.addEventListener('touchend', this.handleDragEnd);
    paletteSquare.addEventListener('mousemove', this.touchMove.bind(this));
    /*/
    paletteSquare.addEventListener('dragstart', this.handleDragStart);
    paletteSquare.addEventListener('dragend', this.handleDragEnd);
    /**/
    paletteSquare.draggable = false;
    let image = paletteSquare.firstChild;
    image.draggable = true;
    image.classList.add("draggable");
  }
}

class Faccina {
  file;
  id;
  object;
  constructor(id,file) {
    this.file = file;
    this.id = id;
    this.object = document.createElement('div');
    this.object.id= id;
    let img = document.createElement('img');
    img.src=file;
    img.alt = '';
    this.object.style.display = "none";
    this.object.appendChild(img);
    document.body.appendChild(this.object);
  }
}
class Faccine{
  esattoObject;
  sbagliatoObject;
  inizioObject;

  constructor() {
    this.esattoObject = (new Faccina("esatto","img/esatto.gif")).object;
    this.inizioObject = (new Faccina("inizio","img/inizio.gif")).object;
    this.sbagliatoObject = (new Faccina("sbagliato","img/sbagliato.gif")).object;
  }
}

class Wrapper {
  dataTransfer;
  srcNode;
  srcParentNode;
  destNode;
  destParentNode;
  palette = new Palette(this);

  esatto(on){
    if(this.faccine.esattoObject == undefined) {
      this.faccine.esattoObject = document.getElementById("esatto");
      this.faccine.sbagliatoObject = document.getElementById("sbagliato");
    }
    if(on == undefined){
      this.faccine.esattoObject.style.display = "none";
      this.faccine.sbagliatoObject.style.display = "none";
      return;
    }
    if(on) {
      this.faccine.esattoObject.style.display = "block";
      this.faccine.sbagliatoObject.style.display = "none";
    } else {
      this.faccine.esattoObject.style.display = "none";
      this.faccine.sbagliatoObject.style.display = "block";
    }
  }

  musichettaIniziale(){
    let audioControl = document.createElement("audio");
    audioControl.src="audio/audio2.wav";
    document.body.appendChild(audioControl);

    let promise = audioControl.play();
    if (promise !== undefined){
      promise.then(_=> {
        //console.log("Autoplay iniziato");
      }).catch(error => {
        //console.error("Errore "+error+" - Autoplay non permesso.");
      });
    }
  }

  nascondiPezzi() {
    setTimeout(() => {
      let squarePieces = document.querySelectorAll("#squares>.piece>img");
      squarePieces.forEach((e) => {
        e.classList.add("hidden");
      });
      wrapper.inizio(false);
    }, 1000);
  }

  inizio(on){
    if(on == undefined){
      this.faccine.inizioObject.classList.add("hidden");
      return;
    }
    if(on) {
      this.palette.populate();
      //this.palette.initPaletteDragEvents(this);
      this.musichettaIniziale();
      this.faccine.inizioObject.classList.remove("hidden");
      this.nascondiPezzi();
      chessboard.initSquaresTouchDragEvents();
    } else {
      this.faccine.inizioObject.classList.add("hidden");
    }
  }

  constructor(){
    this.faccine = new Faccine();
    this.faccine.inizioObject.style.display='block';
    //this.esatto();
  }

  isDraggable(node){
    if (node == null || node == undefined){
      //console.log("Immagine non presente");
      return(false);
    }
    if (node.draggable == null || !node.draggable){
      //console.log("Immagine non spostabile:"+node.src);
      return(false);
    }
    return(true);
  }

  selSource(parentNode){
    let node = parentNode.lastChild;
    if(!this.isDraggable(node)) return;
    if (parentNode.parentElement.tagName.toUpperCase() === "BODY") return;
    if (this.srcNode != undefined) //il pezzo è già stato selezionato ma non collocato
    {
      this.srcNode.style.removeProperty('opacity'); //si deseleziona
      this.annullaSpostamento();
    }

    // il pezzo viene selezionato
    parentNode.style.opacity = '0.4';
    this.srcNode = node;
    this.srcParentNode = parentNode;
    this.dataTransfer = node.outerHTML;
    this.destNode = null;
    this.destParentNodeNode = null;
    this.detachImage();
  }

  detachImage(){
    //console.log("detachImage");
    // impostare larghezza ed altezza dell'immagine pari a quelle attuali in px
    let W = wrapper.srcNode.width;
    let H = wrapper.srcNode.height;
    // staccare l'immagine da dove si trova ed attaccarla a document
    wrapper.srcParentNode.removeChild(wrapper.srcNode);
    let X = wrapper.srcParentNode.offsetLeft + W/4;
    let Y = wrapper.srcParentNode.offsetTop + W/4;

    document.body.appendChild(wrapper.srcNode);

    wrapper.srcNode.style.width = W + 'px';
    wrapper.srcNode.style.height = H + 'px';
    wrapper.srcNode.style.left = X + 'px';
    wrapper.srcNode.style.top = Y + 'px';
    wrapper.destNode=wrapper.srcNode;

  }

  annullaSpostamento(){
    if (this.srcNode.parentElement.tagName.toUpperCase() !== "BODY")
      return false; // l'immagine è ancora collocata
    document.body.removeChild(this.srcNode);
    this.srcParentNode.appendChild(this.srcNode);
    this.srcNode.style.removeProperty("width");
    this.srcNode.style.removeProperty("height");
    this.srcNode.style.removeProperty("left");
    this.srcNode.style.removeProperty("top");
    this.srcParentNode.style.removeProperty("opacity");
    this.srcParentNode = null;
    this.srcNode = null;
  }

}

class SquareSearchList {
  //TODO implementare
  squareSearchList = Array();

  add(squareParentNode){
    //console.log("SquareSearchList.add()")
    if (this.squareSearchList
      .filter(wrongSquare => /*/wrongSquare.squareNode.id === wrapper.srcParentNode.id/*/false/**/)
      .length === 0)
    {
      let square = new Square(squareParentNode);
      this.squareSearchList.push(square);
    }
    //console.log(this.squareSearchList);
  }

  push(squareParentNode){
    this.squareSearchList.push(squareParentNode);
  }

  remove(parentNode){
    this.squareSearchList = this.squareSearchList.filter(square =>
      square.squareNode.id !== parentNode.id
    );
  }

  searchNearSquare(X, Y){
    let nearSquare = this.squareSearchList[0];
    if (nearSquare == undefined) return undefined;
    let squareDistance = (nearSquare.X - X)**2 + (nearSquare.Y - Y)**2;
    let d;
    this.squareSearchList.forEach(square => {
      d = (square.X - X)**2 + (square.Y - Y)**2;
      if(d < squareDistance){
        nearSquare = square;
        squareDistance = d;
      }
    });
    return nearSquare;
  }

}

class Square {
  squareNode;
  X;
  Y;
  constructor(node,id) {
    if(node.classList.contains("square")|| id == undefined)
    {
      this.X = node.offsetLeft+node.clientWidth/2;
      this.Y = node.offsetTop+node.clientHeight/2;
      this.squareNode = node;
      return;
    }
    let squareNode = document.createElement("div");
    let imgNode = document.createElement("img");

    imgNode.src= 'https://caltaweb.it/scaccolandia_livello1/img/'+id+'.gif';

    squareNode.draggable = false;
    imgNode.draggable=false;

    squareNode.appendChild(imgNode);
    squareNode.classList.add("square");
    squareNode.setAttribute("id", id)
    node.appendChild(squareNode);
    this.X = squareNode.offsetLeft+squareNode.clientWidth/2;
    this.Y = squareNode.offsetTop+squareNode.clientHeight/2;
    this.squareNode = squareNode;
  }
  addClass(newClass){
    this.squareNode.classList.add(newClass);
  }
}

class Chessboard extends DragDropArea{
  bottomDiv = document.getElementById("bottom");
  leftDiv = document.getElementById("left");
  squaresNode = document.getElementById("squares");
  R; C; val = " ";
  bottomLabels = Array(this.C);
  //squareLabels = Array.from(Array(this.R), () => Array(this.C).fill(this.val));
  leftLabels = Array(this.R);
  constructor() {
    super();
    this.bottomLabels[0]="a";
    this.bottomLabels[1]="b";
    this.bottomLabels[2]="c";
    this.bottomLabels[3]="d";
    this.bottomLabels[4]="e";
    this.bottomLabels[5]="f";
    this.bottomLabels[6]="g";
    this.bottomLabels[7]="h";
    this.bottomLabels[8]="i";
    this.leftLabels[0]="1";
    this.leftLabels[1]="2";
    this.leftLabels[2]="3";
    this.leftLabels[3]="4";
    this.leftLabels[4]="5";
    this.leftLabels[5]="6";
    this.leftLabels[6]="7";
    this.leftLabels[7]="8";
    this.leftLabels[8]="9";
    this.R=this.leftLabels.length;
    this.C=this.bottomLabels.length;
    this.initSquares();
    this.initSide(this.bottomLabels,this.bottomDiv);
    this.initSide(this.leftLabels,this.leftDiv);
  }


  placePiece(){
    // collocazione del pezzo nella scacchiera
    if(wrapper.srcNode.src !== wrapper.destNode.src) {
      wrapper.destParentNode.appendChild(wrapper.srcNode);
      wrapper.srcNode.style.removeProperty("width");
      wrapper.srcNode.style.removeProperty("height");
      wrapper.srcNode.style.removeProperty("top");
      wrapper.srcNode.style.removeProperty("left");
      wrapper.destParentNode.classList.add('over');

      this.squareSearchListObject.add(wrapper.destParentNode);

      wrapper.esatto(false);
    } else {
      wrapper.srcNode = null;
      wrapper.destNode.classList.remove("hidden","over");
      document.getElementById("esatto").style.display="block";
      wrapper.esatto(true);
    }
    //console.log(this.squareSearchList);
  }

  squareAtPosition (x, y){
    let dest = document.elementFromPoint(x, y);
    //console.log("squareAtPosition - document.elementFromPoint(x, y):");
    /*/
    //console.log(dest);
    debugger;
    //console.log("---------------------------------------------------");
    /**/
    if (dest == null) {
      //console.log("document.elementFromPoint(x, y) ha restituito null");
      return null;
    };

    if (dest.id !== "squares") {
      if(dest.parentElement != null && dest.parentElement.id === "squares") return dest;
      /*/
      //console.log("document.elementFromPoint(x, y) ha restituito un elemento fuori da squares");
      //console.log(dest);
      /**/
      return null;
    };

    let widthSquares = dest.clientWidth;
    let xIndex = Math.floor((x-dest.offsetLeft)/widthSquares*9);
    let yIndex = Math.floor((y-dest.offsetTop)/widthSquares*9);
    let label = this.bottomLabels[xIndex]+this.leftLabels[yIndex];

    return document.getElementById(label);
  }

  initSide(labels, divNode){
    for (let label of labels ) {
      let square = new Square(divNode, label);
    }
  }

  initSquares() {
    let black = true;
    for (let row = 0; row < this.R; row++) for (let col = 0; col < this.R; col++) {
      let square = new Square(this.squaresNode, this.bottomLabels[col]+this.leftLabels[row]);
      square.addClass("piece")
      if(black)
        square.addClass("black")
      black = !black;
    }
  }

  initSquaresTouchDragEvents() {
    let squaresNode = document.getElementById("squares");
    squaresNode.addEventListener('touchstart', this.touchStart.bind(this));
    squaresNode.addEventListener('touchmove', this.touchMove.bind(this));
    squaresNode.addEventListener('touchend', this.touchEnd.bind(this));

    /*/
    squaresNode.addEventListener('dragstart', this.touchStart.bind(this));
    squaresNode.addEventListener('mousemove', this.touchMove.bind(this));
    squaresNode.addEventListener('drop', this.touchEnd.bind(this));
    /*/
    for (let squareNode of squaresNode.childNodes) {
      squareNode.draggable = false;

      squareNode.addEventListener('dragstart', this.handleDragStart);
      squareNode.addEventListener('dragover', this.handleDragOver);
      squareNode.addEventListener('dragenter', this.handleDragEnter);
      squareNode.addEventListener('dragleave', this.handleDragLeave);
      squareNode.addEventListener('dragend', this.handleDragEnd);
      squareNode.addEventListener('drop', this.handleDrop);

      squareNode.draggable = false;
      squareNode.firstChild.draggable = false;

    }
    /**/
  }

  getRandomLeftLabels(size){
    return this.getRandomSubarray(this.leftLabels, size);
  }

  getRandomBottomLabels(size){
    return this.getRandomSubarray(this.bottomLabels, size);
  }

  getRandomSubarray(arr, size) {
    let shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
  }

  getRandomChessArray(size){
    let extractedLeftLabels = this.getRandomLeftLabels(size);
    let extractedBottomLabels = this.getRandomBottomLabels(size);
    let createdLabels = [];
    for (let i = 0; i < size; i++) {
      let labelToInsert = extractedBottomLabels[i] + extractedLeftLabels[i];
      while(createdLabels.indexOf(labelToInsert)>-1) {
        extractedBottomLabels = this.getRandomBottomLabels(size);
        labelToInsert = extractedBottomLabels[i] + extractedLeftLabels[i];
      }
      createdLabels.push(labelToInsert)
    }
    return createdLabels;

  }

}

///////main-src.js////////
/**/
const chessStyle = document.createElement("style");
chessStyle.innerText = '[class~=square]{border-radius:12%;}.square.over{border-left-width:medium;}[class~=square]{margin-left:10%;}.square.over{border-bottom-width:medium;}#bottom,#squares,#chessboard,#left{display:grid;}.square.over{border-right-width:medium;}[class~=square]{margin-bottom:10%;}[class~=square]{margin-right:10%;}[class~=square]{margin-top:10%;}#chessboard{grid-template-areas:"left squares squares squares squares squares squares squares squares squares" "left squares squares squares squares squares squares squares squares squares" "left squares squares squares squares squares squares squares squares squares" "left squares squares squares squares squares squares squares squares squares" "left squares squares squares squares squares squares squares squares squares" "left squares squares squares squares squares squares squares squares squares" "left squares squares squares squares squares squares squares squares squares" "left squares squares squares squares squares squares squares squares squares" "left squares squares squares squares squares squares squares squares squares" ".... bottom bottom bottom bottom bottom bottom bottom bottom bottom";}img{flex-shrink:0;}[class~=square]{background-color:white;}.square.over{border-top-width:medium;}[class~=square]{justify-content:center;}[class~=square]{align-items:center;}.square.over{border-left-style:dotted;}.square.over{border-bottom-style:dotted;}#squares>.black{background-color:#999;}[class~=square]{overflow:hidden;}#chessboard,#squares,[class~=square]{aspect-ratio:1/1;}.square.over{border-right-style:dotted;}#left{grid-area:left;}.square.over{border-top-style:dotted;}img{width:80%;}.square.over{border-left-color:red;}.square.over{border-bottom-color:red;}[class~=square]{position:relative;}.square.over{border-right-color:red;}#bottom,#squares{grid-template-columns:repeat(9,11%);}img{height:80%;}#bottom{grid-area:bottom;}.draggable{cursor:move;}[class~=visible]{visibility:visible;}img{position:absolute;}[class~=visible]{opacity:1;}[class~=visible]{transition:opacity 2s linear;}[class~=hidden]{visibility:hidden;}.square.over{border-top-color:red;}.square.over{border-image:none;}[class~=hidden]{opacity:0;}#squares{grid-area:squares;}[class~=hidden]{transition:visibility 0s 2s,opacity 2s linear;}img{top:10%;}img{left:10%;}';
document.head.appendChild(chessStyle);
const wrapperStyle = document.createElement("style");
wrapperStyle.innerText = 'body{position:relative;}body{touch-action:none;}body{overflow:hidden;}header,h1{grid-area:header;}#chessboard{grid-area:chessboard;}h1,header{color:red;}header,h1{font-family:"Sofia",Caladea,sans-serif;}header,h1{text-align:center;}#chessboard{background-color:lightgray;}h1,header{text-shadow:3vmin 3vmin 3vmin #ababab;}#chessboard{box-shadow:1em 1em .5em #dedede;}#chessboard{border-radius:1em;}#chessboard{padding-left:1%;}h1,header{font-size:7vmin;}#chessboard{padding-bottom:1%;}#chessboard{padding-right:1%;}#chessboard{padding-top:1%;}#sbagliato,#inizio,#esatto{position:fixed;}#inizio,#sbagliato,#esatto{left:1vmin;}#esatto,#inizio,#sbagliato{bottom:1vmin;}#esatto,#inizio,#sbagliato{width:30vmin;}#sbagliato,#esatto,#inizio{height:30vmin;}#palette{display:grid;}#palette{grid-area:palette;}@media (orientation: landscape){[class~=square]{border-left-width:.1em;}#chessboard{width:80vmin;}[class~=square]{border-bottom-width:.1em;}[class~=square]{border-right-width:.1em;}#wrapper{grid-template-columns:auto 20vh auto 80vh auto;}#wrapper{grid-auto-rows:12vh minmax(min-content,max-content);}[class~=square]{border-top-width:.1em;}#wrapper{grid-template-areas:"... header  header header     ..." "... palette ...    chessboard ...";}[class~=square]{border-left-style:solid;}[class~=square]{border-bottom-style:solid;}[class~=square]{border-right-style:solid;}#palette{grid-column-gap:3vw;}#palette{grid-template-columns:repeat(2,7vh);}[class~=square]{border-top-style:solid;}[class~=square]{border-left-color:#555;}#palette{grid-template-rows:repeat(4,10vh);}[class~=square]{border-bottom-color:#555;}[class~=square]{border-right-color:#555;}[class~=square]{border-top-color:#555;}[class~=square]{border-image:none;}[class~=square]{box-shadow:.4vh .4vh;}@media (max-height: 600px){#chessboard{width:68vmin;}}}#wrapper{display:grid;}@media (orientation: portrait){[class~=square]{border-left-width:.1em;}[class~=square]{border-bottom-width:.1em;}#wrapper{grid-template-columns:minmax(60%,70vh);}[class~=square]{border-right-width:.1em;}[class~=square]{border-top-width:.1em;}[class~=square]{border-left-style:solid;}#wrapper{grid-template-areas:"header" "chessboard" "palette";}#palette{grid-template-columns:repeat(8,6.4vh);}#palette{grid-column-gap:1vw;}#palette{padding-left:20vw;}#palette{padding-bottom:5vh;}#palette{padding-right:5vw;}[class~=square]{border-bottom-style:solid;}#palette{padding-top:5vh;}[class~=square]{border-right-style:solid;}#wrapper{padding-left:6vw;}[class~=square]{border-top-style:solid;}#wrapper{padding-right:6vw;}#esatto,#inizio,#sbagliato{left:2vmin;}#sbagliato,#inizio,#esatto{bottom:3vmin;}#esatto,#inizio,#sbagliato{width:25vmin;}#inizio,#esatto,#sbagliato{height:25vmin;}[class~=square]{border-left-color:#555;}[class~=square]{border-bottom-color:#555;}[class~=square]{border-right-color:#555;}[class~=square]{border-top-color:#555;}[class~=square]{border-image:none;}[class~=square]{box-shadow:.2em .2em;}#header{font-size:5vmin;}@media (max-aspect-ratio: 8/10){#palette{grid-template-columns:repeat(4,8vw);grid-gap:2vmin;padding:5vh 5vw 5vh 50vw;}}@media (max-aspect-ratio: 2/3){#header{font-size:8vmin;}#wrapper{padding-left:0;}#palette{grid-template-columns:repeat(4,8vw);grid-gap:8vmin;padding:5vh 10vw 5vh 30vw;}}@media (max-width: 600px) and (min-width: 330px){[class~=square]{border:.08em solid #555;box-shadow:.08em .08em;}}@media (max-width: 330px){.square{border:.05em solid #555;box-shadow:.05em .05em;}}@media (max-width: 240px){[class~=square]{border:.01em solid #555;box-shadow:.01em .01em;}}@media (max-width: 180px){[class~=square]{border:0 solid #555;box-shadow:0 0;}}}';
document.head.appendChild(wrapperStyle);
/*/
//<link rel="stylesheet" href="css/chessboard.css" type="text/css">
//<link rel="stylesheet" href="css/wrapper.css" type="text/css">
//
const linkChessboardCss = document.createElement("link")
linkChessboardCss.setAttribute("rel","stylesheet");
linkChessboardCss.setAttribute("href","css/chessboard.css");
linkChessboardCss.setAttribute("type","text/css");
document.head.appendChild(linkChessboardCss);
const linkWrapperCss = document.createElement("link");
linkWrapperCss.setAttribute("rel","stylesheet");
linkWrapperCss.setAttribute("href","css/wrapper.css");
linkWrapperCss.setAttribute("type","text/css");
document.head.appendChild(linkWrapperCss);
/**/

let link1 = document.createElement("link");
link1.setAttribute("rel","stylesheet");
link1.setAttribute("href","https://fonts.googleapis.com/css?family=Sofia");
document.head.appendChild(link1);

let chessboard = new Chessboard();
let wrapper = new Wrapper();

function azioneInizialeMouseTouch(){
  window.removeEventListener('touchstart', azioneInizialeMouseTouch);
  window.removeEventListener('mousedown', azioneInizialeMouseTouch);
}

function azioneInizialeRilascio(){
  window.removeEventListener('touchend', azioneInizialeRilascio);
  window.removeEventListener('mouseup', azioneInizialeRilascio);
  wrapper.inizio(true);
}

if (/Mobi/.test(navigator.userAgent)) {
  window.addEventListener('touchstart', azioneInizialeMouseTouch);
  window.addEventListener('touchend', azioneInizialeRilascio);
} else {
  window.addEventListener('mousedown', azioneInizialeMouseTouch);
  window.addEventListener('mouseup', azioneInizialeRilascio);
}
