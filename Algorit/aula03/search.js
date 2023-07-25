const list = require('./aOrdenado');

function search (aList, bInic, cFin, val) {
    console.log('bInic',bInic, 'cFin',cFin);
    const half = Math.floor((bInic + cFin)/2);
    const halfAct = aList[half];

    if (bInic > cFin) {
        return -1;
    }

    if(val === halfAct.preco){
        return half;
    }
    if(val < halfAct.preco){
        return search(aList, bInic, half -1, val);
    }
    if(val > halfAct.preco){
        return search(aList, half +1, cFin, val);
    }


}

console.log(search(list, 0, list.length -1, 22));

