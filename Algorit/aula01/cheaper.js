const books = require("./bookslist.js");


function priceCurrent (listPos, positionActual) {
    let cheaper = positionActual;
    // let expensive = positionActual;

     for (let i = positionActual; i < listPos.length; i++){
         if(listPos[i].price < listPos[cheaper].price){
             cheaper = i;
        }
    
    }
    // for (let i = positionActual; i < listPos.length; i++){
    //     if(listPos[i].price > listPos[expensive].price){
    //         expensive = i;
    //     }
    // }
    return cheaper;
    // return expensive;
}

module.exports = priceCurrent;
       
// console.log(`O livro mais barato custa R$ ${books[smaller].price},00 e o nome do livro é ${books[smaller].title}.`);

// console.log(`O livro mais caro custa R$${books[taller].price},00 e o nome do livro é ${books[taller].title}.`);

