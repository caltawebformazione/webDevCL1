function printString(string) {
    return new Promise((resolve, reject) => {
        console.log(`in esecuzione printString(${string})`);
        setTimeout(
            () => { console.log(string); resolve();},
            1000
        )
    });
}
/*
promiseA = printString('A');
console.log(`ritorno da printString('A')`);
promiseA.then(()=>printString('B'));
console.log(`ritorno da promiseA.then(()=>printString('B'))`);
*/
async function printAll(){
    await printString("A")
    await printString("B")
    await printString("C")
  }
  printAll()