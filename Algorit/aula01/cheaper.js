const books = require("./bookslist.js");


function priceCurrent (listPos, positionActual) {
    let cheaper = positionActual;

     for (let i = positionActual; i < listPos.length; i++){
         if(listPos[i].price < listPos[cheaper].price){
             cheaper = i;
        }
    
    }

    return cheaper;

}

let smaller = priceCurrent(books, 0);

module.exports = priceCurrent;
       
console.log(`O livro mais barato custa R$ ${books[smaller].price},00 e o nome do livro é ${books[smaller].title}.`);
