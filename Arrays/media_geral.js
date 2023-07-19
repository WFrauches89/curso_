const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// function calcMedia (notasSala) {
//     const somaNota = notasSala.reduce((storage, nota) => {
//         return storage + nota;
//     }, 0);

//     const mediaSala = somaNota/notasSala.length;

//     return mediaSala;
// }

// console.log(`A média das notas da sala de JavaScript é: ${calcMedia(salaJS)}.`);
// console.log();
// console.log(`A média das notas da sala de Java é: ${calcMedia(salaJava)}.`);
// console.log();
// console.log(`A média das notas da sala de Python é: ${calcMedia(salaPython)}.`);

function calcMedia (notasSala) {
    const somaNota = notasSala.reduce((acc, nota) => acc + nota, 0);

    const mediaSala = somaNota/notasSala.length;

    return mediaSala;
}
console.log();
console.log(`A média das notas da sala de JavaScript é: ${calcMedia(salaJS)}.`);
console.log();
console.log(`A média das notas da sala de Java é: ${calcMedia(salaJava)}.`);
console.log();
console.log(`A média das notas da sala de Python é: ${calcMedia(salaPython)}.`);
console.log();

const numeros = [43, 50, 65, 12];

const soma = numeros.reduce((acc, atual) => atual + acc, 0);

console.log(soma);




