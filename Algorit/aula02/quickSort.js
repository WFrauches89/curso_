const lista = require('./arrayOrdenado');
const changePos = require('./pivo');

function slicePivo (aList, bEsquerda, cDireita) {
    console.log('aList', aList)
    console.log('bEsquerda, cDireita', bEsquerda, cDireita)
    let pivot = aList[Math.floor((bEsquerda+cDireita)/2)];
    console.log('pivo', pivot);
    let bAtual = bEsquerda;
    let cAtual = cDireita;

    while (bAtual <= cAtual){
        while (aList[bAtual].preco < pivot.preco) {
            bAtual++;
        };
        while (aList[cAtual].preco > pivot.preco) {
            cAtual--;
        };
        if (bAtual <= cAtual) {
            changePos (aList, bAtual, cAtual);
            bAtual++;
            cAtual--;
        };
    };
    return bAtual;   

};


function quickSort (aList, bEsquerda, cDireita) {
    if (aList.length > 1) {
        let bIAtual = slicePivo(aList, bEsquerda, cDireita);
        if (bEsquerda < bIAtual -1) {
            quickSort(aList, bEsquerda, bIAtual -1);
        }
        if (bIAtual < cDireita) {
            quickSort(aList, bIAtual, cDireita);
        }
    }
    return aList;
}


console.log(quickSort(lista, 0, lista.length -1));
// console.log(lista[1].preco);