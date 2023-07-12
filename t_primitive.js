// // Tipo primitivos de Number

//         const meuNumero = 3;

//         const firstNumber = 1;
//         const secondNumber = 2;

//         const operMath = firstNumber + secondNumber;
//         console.log(operMath);

//         // ponto flutuantes 

//         const floatNumber = 3.3;
//         const floatNumber2 = .5;

//         // NaN - Not a Number 

//         const alura = "Alura";

//         console.log(alura * floatNumber);

// // Tipo primitivos booleanos
// const booleA = 5;
// const booleB = 10;
// const booleC = "10";

// console.log(booleA === booleB);
// console.log(booleB === booleC);
// console.log(booleB == booleC);



// //Tipo primitivo String
// //Todos os itens diferentes de numeros e booleanos - entre aspas duplas ou simples

// const stringA = "Hello world!";
// const stringB = "123";
// const stringCitacao = 'E então ele disse: "Como aconteceu isso?"';

// console.log(stringA + stringB + stringCitacao ); //concatenacao



// //ordenação de array de números no JavaScript 
// //lista.sort((a, b) => a - b); // [1, 5, 8, 9, 10, 12, 15]

// const cifrao = '\u0024'
// const aMaiusculo = '\u0041'
// const tique = '\u2705'
// const hiragana = '\u3041'

// console.log(cifrao)
// console.log(aMaiusculo)
// console.log(tique)
// console.log(hiragana)

//var o node já reconhece e não é necessário a declaração, porém é boa prática
//o var poderá ser chamado em qualquer região do código



var heigth = 3;
var length = 7;

var square = heigth * length;

console.log(square);
var square;

//let o node já reconhece e não é necessário a declaração, porém é boa prática
//o let deverá ser declarado antes de ser chamado, ou seja somento na região do código posterior a declaração
//utilizamos let na maioria dos casos pois o var é muito livre e poderá resultar em duplicidade de declaração atrapalhando o código, boa prática.




let form = 'triangle';
let heigth2 = 5;
let length2 = 7;
let square2;

if (form === 'retangulo') {
    square2 = heigth2 * length2;
} else {
    square2 = (heigth2 * length2)/2;
}

console.log(square2);

//const é uma constante ou seja não receberá novas atribuições conforme var e let.
//const deverá ser declarada para inicilaizar ou ocorrerá o erro "missing initializer in const"

const forma = 'quad3';
const alt = 7;
const comp = 7;
let area;

if (forma === 'quad') {
    area = alt * comp;
} else {
    area = (alt * comp) / 2;
}

console.log(area);