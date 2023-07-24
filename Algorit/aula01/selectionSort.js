const books = require("./bookslist");
const priceCurrent = require("./cheaper");


for (let i = 0; i < books.length -1; i++) {

    let smaller = priceCurrent(books, i);
    let bookActual = books[i];
    //console.log('Livro atual é ',books[i]);
    let booksCheaperPrice = books[smaller];
    //console.log('Livro menor preço é ', books[smaller]);
    books[i] = booksCheaperPrice;
    books[smaller] = bookActual;
    
}

// console.log(books)
console.log(books[0].title, books[0].price);
console.log();
console.log();
console.log();



// Refatorado usando forEach;
// livros.forEach((livro, indice) => { o prim param não está sendo usadoportanto podemos omitir com >>>> "_" <<<<<

books.forEach((_, indice) => {
    let menor = priceCurrent(books, indice);
   
    let livroAtual = books[indice];
    let livroMenorPreco = books[menor];
   
    books[indice] = livroMenorPreco;
    books[menor] = livroAtual;
});
   
console.log(books);