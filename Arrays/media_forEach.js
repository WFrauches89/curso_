const notas = [10, 6.5, 8, 7.5];

// Função anonima - Função CallBack inserida obrigatoriamente na chamada forEach();

let sumNotas = 0;

notas.forEach(function (notas, index) {
    
    console.log(`Index atual é: ${index}`);
    console.log(notas);
    sumNotas += notas;

});
console.log();
console.log(`A soma de todas as notas é: ${sumNotas}`);
console.log();
console.log(`A média das notas é: ${sumNotas/notas.length}`);



