//Templates Strings

const name = "Wanderson";

const age = 2023 - 1989;

const ciddNasc = 'Nova Friburgo';

// const pitch = "Meu nome é " + name + " tenho " + age + " anos e nasci em " + ciddNasc;

const pitch2 = `Meu nome é ${name}, tenho ${age} anos e nasci em ${ciddNasc}!`;

console.log(pitch2);

a = []
b = 20
c = true 
d = ''

if (b === 20 && c != false && d == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}


if (a == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

if (d) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

if (b == '20') {
    console.log('Verdade')
} else {
    console.log('Falso')
}

const nome = "Leo";
const idade = 7;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)

