
const { edFolha, edGalho } = require('../arrays');




function mergeList (listA, listB) {
    let listFinProd = [];
    let listFinPos = 0;    
    let listActA = 0;
    let listActB = 0;


    while (listActA < listA.length && listActB < listB.length) {
        let prodListA = listA[listActA]; 
        let prodListB = listB[listActB];
        
        if (prodListA.preco < prodListB.preco) {
            listFinProd[listFinPos] = prodListA;
            listActA++;
            
        } else {            
            listFinProd[listFinPos] = prodListB;
            listActB++;
            
        }
    
        listFinPos++;
        
    }

    while (listActA < listA.length) {
        listFinProd[listFinPos] = listA[listActA];
        listActA++;

    }
    while (listActB < listB.length) {
        listFinProd[listFinPos] = listB[listActB];;
        listActB++;

    }
    return listFinProd;
}

console.log(mergeList(edFolha, edGalho ));