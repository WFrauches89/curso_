const books = require('./arrayOrdenado');

function searchPivot (p, a) {
    let minors = 0; 
    for (let i = 0; i < a.length; i++) {
        let prodA = a[i];
        if(prodA.preco < p.preco){
            minors++;
        };
    };
    changePos(a, a.indexOf(p), minors);
    return a;
};

function changePos (a, from, to) {
    const elemA = a[from];
    const elemB = a[to];
   
    a[to] = elemA;
    a[from] = elemB;
    
};
 
function slicePivo (a) {
    let p = a[Math.floor(a.length /2)];
    console.log(p);
    searchPivot(p, a);
    let minors = 0;
    for(let i =0; i < a.length; i++){
        let dataA = a[i];
        if (dataA.preco < p.preco && i !== p) {
            changePos(a, i, minors);
            minors++;

        };
    
    };
    return a;

};

// console.log(slicePivo(books));
module.exports = changePos;


//console.log(searchPivot(books[3], books));
