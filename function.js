let x = 15;
console.log(x);
x = 'Olá';
console.log(x);


function soma(numA,numB) {
    return numA + numB;
}

console.log(soma(15,742));
console.log(soma(-815,742));
console.log(soma(156,-742));


function mult(numA, numB) {
    return numA * numB;
}

console.log(mult(15,742));
console.log(mult(-815,742));
console.log(mult(-156,-742));
console.log(mult(soma(soma(15, 3),soma(3, 9)),soma(742, -142)));

function eText (namA = 'seu nome', idd = 'sua iddade', cdd = 'sua ciddade', job = 'seu trabalho') {
    return `Olá meu nome é ${namA}, tenho ${idd}, moro em ${cdd} e trabalho com ${job}`
}

console.log(eText('Wanderson', soma(2023, -1989), 'Nova Friburgo', 'TI'));
console.log(eText('Nova Friburgo', 'Wanderson', soma(2023, -1989), 'TI'));
console.log(eText(soma(2023, -1989), 'Nova Friburgo', 'TI',  'Wanderson'));
console.log(eText());

let nameA = 'W.Frauches';
let argue = `Este é um argumento válido feito por ${nameA}` ;
function comParametro(param) {
    console.log(param)
}
comParametro(argue);

//funções
// declarando funções exemplos
// function name(params) {-bloco de código-} 
//call function - params();

//expressão de função


const sum = function (numA, numB) { return numA + numB }
console.log(sum(5, 18));

//Expressão com retorno Cannot access 'summb' before initialization 
// console.log(summb(5, 18));
// const summb = function (numA, numB) { return numA + numB }


// principal diferença é - HOISTING - traz as declarações para trazer para cima no JS. A função você consegue chamar em qualquer parte, a expressão somente após a realização de sua initialization .

console.log(apresen());

function apresen() {
    return 'Olá, você pode chamar a função em qualquer local que ela lhe retorna conforme o código dentro ddo bloco!'
}

//Arrow functions - terceiro tipo de função

function hello(namedA) {
    return `Olá eu me chamo ${namedA}`
    }

console.log(hello("W.Frauches"));

// agora em Arrow function

const helloArrow = namedAr => `Olá eu me chamo ${namedAr}`;
console.log(helloArrow("W.Frauches em Arrow"));

const sumArrow = (num1A, num2A) => num1A + num2A;
console.log(sumArrow(5, 12));

//Arrow function com 2 ou mais linhas condicionantes 

const sum2LittleNumbrs = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return 'somente números de 1 a 9'
    } else {
        return num1 + num2;
    }
}
console.log(sum2LittleNumbrs(5, 18));


