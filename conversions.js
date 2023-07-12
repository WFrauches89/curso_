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