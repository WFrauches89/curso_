const datas = require("./client.json");

// console.log(datas);

// console.log(typeof datas);


// const lutador = require("./fighter.json");

// console.log(lutador.altura);

const clientString = JSON.stringify(datas);

console.log(clientString);
console.log();
console.log(typeof clientString);
console.log();
console.log(clientString.nome);
console.log();

const clientObjectFromString = JSON.parse(clientString);

console.log(clientObjectFromString);


// função de clonagem profunda com imutabilidade em JS
    // O typeof não sabe diferenciar um null de um object
console.log(typeof null === typeof {});

const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
      typeString.indexOf(' ') + 1,
      typeString.indexOf(']')
    ).toLowerCase()
};

console.log();
console.log();
console.log();

console.log(typeCheck([]));
console.log(typeCheck(null));
console.log(typeCheck({}));
console.log(typeCheck('teste'));
console.log(typeCheck(123)) ;

// Função de clonagem profunda de arrays

const cloneArray = (element) => {
    const clonedArray = []
    for (const item of element) {
      if (typeCheck(item) === 'array') clonedArray.push(cloneArray(item))
      else clonedArray.push(item)
    }
    return clonedArray
};

// const numbers = [1, 2, 3] ;
// const numbersCopy = numbers ;
// console.log(numbers === numbersCopy) ;
// console.log(numbers === cloneArray(numbers)) ;

 //ou segundo modelo refatorado
const cloneArrayRefat = (element) => {
    if (typeCheck(element) !== 'array') return element
    return element.map(cloneArrayRefat)
};

const numbers = [1, 2, 3] ;
const numbersCopy = numbers ;
console.log(numbers === numbersCopy) ;
console.log(numbers === cloneArrayRefat(numbers)) ;

// Função de clonagem profunda de objetos


// const cloneObject = (element) => {
//     if (typeCheck(element) !== 'object') return element;
//   };

  //https://www.alura.com.br/artigos/implementar-funcao-clonagem-profunda-imutabilidade-js?_gl=1*1ssv9k6*_ga*MTY4MzkwMTg5NC4xNjg2MDExMjc4*_ga_59FP0KYKSM*MTY4OTg4MjIxNS4xMDIuMS4xNjg5ODg2MjMyLjAuMC4w*_fplc*Ujl0ZDdFVHJlcyUyQko4d215WDhndHpQMVY3UERjRkR2Y2FmVkdHWWhLQldtWTBROWd0aHdENUFRQ0N5MzZOYm5kSzNYdTR2MXczVVVqc1olMkJ6RGNMYXRrUDZqJTJCN2FjVmlUT3ZUclRlRTZyanFXUnA0Y1lEJTJGZ0JPbjJKQ0NuZ0ElM0QlM0Q.
