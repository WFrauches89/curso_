const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesSet = new Set(nomes);

const nomesAtt = [... nomesSet];

console.log(nomesSet);
console.log(nomesAtt);

//Refatorando


const nomesAtt2 = [... new Set(nomes)];

console.log();
console.log('Refatorado');
console.log();

console.log(nomesAtt2);