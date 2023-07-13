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


let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens)

let novaString = "Programe nas principais linguagens e plataformas. Explore linguagens como ";
console.log(novaString.concat("JavaScript,").concat(" Python,").concat(" e C#."))

let nome = "André";
let comunicacao = " Olá, sr. nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusurario",nome));

let frase= "Mergulhando em tecnologia."
console.log(frase.slice(0,11)) // Mergulhando

let frase2= "Mergulhando em tecnologia."
console.log(frase2.substr(0,11)) // Mergulhando

const palavra="alura";
console.log(palavra.toUpperCase()) //ALURA
console.log(palavra.toLowerCase()) //alura

const palavra2="Divertidamente"
console.log(palavra2.indexOf("e")) //3

const palavra3="Alura"
console.log(palavra3.indexOf("a")) //4

const palavra4="Alura"
console.log(palavra4[0]) //A

console.log("alura".charAt(3)) //r

const palavra6="alura";
console.log(palavra6.length) //5

let login = "   andre@emailteste.com      ";
let loginSemEspaco = login.trim();
console.log(loginSemEspaco); //andre@emailteste.com


// // Login


// const lukeLogin = () => {
//     let array = []
//     for( i = 0; i < 90000; i++){
//       array.push(i)
//     }
//     return "Luke logado com sucesso!"
//   }
  
//   const leiaLogin = () => {
//     let array = []
//     for( i = 0; i < 90000; i++){
//       array.push(i)
//     }
//     return "Leia logada com sucesso!"
//   }
  
//   lukeLogin()
//   leiaLogin()

// //refatorando Login

//   const acesso = (nome) => {
//     return `${nome} logou com sucesso no sistema!`
//   }
  
//   const autentica = (cargo) => {
//     let array = []
//     for( i = 0; i < cargo; i++){
//       array.push(i)
//     }
//     return true;
//   }
  
//   const loginRef = (pessoa, autentica) => {
//     if(pessoa.cargo === `funcionario`) {
//        autentica(90000)
//     } else if(pessoa.cargo === `diretoria`) {
//        autentica(900000)
//     }
//    return acesso(pessoa.nome)
//   }


// loginRef({cargo: `diretoria`, nome: `Leia`}, autentica)

