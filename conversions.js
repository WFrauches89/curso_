// tipo de dados
//booleanos

// conversão implicita
// = atribuir valor == compara o valor descrito e === compara valor e tipo ex: 456 é diferente em tipo de "456"
const numb = 456;
const numb2 = '456';
const numb3 = Number('456');


console.log(numb == numb2);
console.log(typeof numb);
console.log(typeof numb2);
console.log(numb + numb2);
console.log(numb + Number(numb2));
console.log(numb + numb3);


console.log(numb + parseInt(numb2));
//conversão explicita

console.log(numb === numb2);

//Number()
//String()
//parseInt()

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings


telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação

largura = "10";
altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.


// palavras reservadas
// let var = 0; 
// let if = 0;
// let const = "Alura";

let varInicial = 0;
let ifFalse = 0;
let constDeTexto = "Alura";


var respostaDeTudo = 42
let idade = 29
const pi = 3.14
{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)


