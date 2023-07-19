const names = ['ana', 'MARCOS', 'maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5];

const namesAtual = names.map((names) => names.toUpperCase());

//console.log(namesAtual);

const reprovados = namesAtual.filter((names, index) => {
    return notas[index] < 7;

});

console.log(reprovados);

const aprovados = namesAtual.filter((_, index) => {
    return notas[index] >= 7;

});

console.log(aprovados);