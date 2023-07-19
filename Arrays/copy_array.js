const notas = [7, 7, 8, 9];

const novasNotas = [notas];

novasNotas.push(10);

console.log(`As novas notas são: ${novasNotas}`);
console.log(`As notas originais são: ${notas}`);
console.log();
console.log();
const novasNotas2 = [...notas, 5];

console.log(`As novas notas2 são: ${novasNotas2}`);
console.log(`As notas originais são: ${notas}`);
console.log();
console.log();
const novasNotas4 = [10, 5, 3, ...notas, 5, 10];

console.log(`As novas notas4 são: ${novasNotas4}`);
console.log(`As notas originais são: ${notas}`);
console.log();
console.log();
const novasNotas3 = [notas];

novasNotas3.push(10, 5, 3);

console.log(`As novas notas3 são: ${novasNotas3}`);
console.log(`As notas originais são: ${notas}`);
console.log();
console.log();