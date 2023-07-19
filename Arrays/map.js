const notas = [10, 9.5, 8, 7, 6];

//map(); não altera o valor do array original, cria um novo, declarar nova const.
const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1; // Operador ternário comparação y >= x ? retorno : senão execute condição, substituindo assim if else
});

console.log(notas);
console.log();
console.log(notasAtualizadas);

const names = ['ana julia','BIA silva','CAio VinicIus'];

const namesStandart = names.map((namesfunc) => {
    return namesfunc.toUpperCase();
})

console.log(namesStandart);

const names2 = ['ana julia','BIA silva','CAio VinicIus'];

const namesStandart2 = names.map((namesD) => namesD.toLowerCase());

console.log(namesStandart2);


const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase();
}
console.log(nomeMaiusculas);

const arrayNums = [1, 2, 3, 4];

function multiplicaPorDez(num) {
    return num * 10;
};

const arraySomada = arrayNums.map(multiplicaPorDez);

console.log(arraySomada);

const arraySomada2 = arrayNums.map(num => num * 10);

console.log(arraySomada2);