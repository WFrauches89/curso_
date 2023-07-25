const books = require('./arrayOrdenado');

function mergeSort (listArray, consoleTest = 0) {

    //console.log(`Aninhado em ${consoleTest}`);
    //console.log(listArray);



    if(listArray.length > 1) {
        const half = Math.floor(listArray.length / 2);
        const first = mergeSort(listArray.slice(0, half), consoleTest++);
        const second = mergeSort(listArray.slice(half, listArray.length), consoleTest++);
        listArray = sort(first, second);   
    }

    return listArray;
};

function sort (first, second) {
    let posAtuFirst = 0;
    let posAtuSecond = 0;
    const result = [];

    while (posAtuFirst < first.length && posAtuSecond < second.length) {
        let prodAtFirst = first[posAtuFirst];
        let prodAtSecond = second[posAtuSecond];

        if (prodAtFirst.preco < prodAtSecond.preco) {
            result.push(prodAtFirst);
            posAtuFirst++;

        } else {
            result.push(prodAtSecond);
            posAtuSecond++;
        }
    }
    return result.concat(posAtuFirst < first.length
    ? first.slice(posAtuFirst)
    : second.slice(posAtuSecond));
};

console.trace(mergeSort(books));
//console.log(mergeSort(books));

// function dorme(milissegundos){
//     return new Promise(resolve => setTimeout(resolve, milissegundos));
// }

// async function incrementaNumero(numero){
//     console.log(numero)
//     await dorme(10)
  
//     if (numero === 100) {
//             return 'finalizou'
//     }
//     return incrementaNumero(numero + 1)
//   }
  
   
//   incrementaNumero(1)