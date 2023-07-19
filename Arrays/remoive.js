const notas = [10, 6, 8, 5.5, 10];

notas.pop();

console.log(notas);

const media = (notas[0]+ notas[1]+ notas[2]+ notas[3])/notas.length;

console.log(`A média é ${media}`);

const notas2 = [6, 10, 8, 5.5, 10];

notas2.shift();

console.log(notas2);

const media2 = (notas2[0]+ notas2[1]+ notas2[2]+ notas2[3])/notas2.length;

console.log(`A média é ${media2}`);

const notas3 = [6, 10, 8, 5.5, 10];

notas3.unshift(9);
notas3.pop();
notas3.pop();

console.log(notas3);

const media3 = (notas3[0]+ notas3[1]+ notas3[2]+ notas3[3])/notas3.length;

console.log(`A média é ${media3}`);

const notas4 = [6, 10, 8, 5.5, 10];

notas4.reverse();
notas4.unshift(9);
notas4.pop();
notas4.pop();

console.log(notas4);

const media4 = (notas4[0]+ notas4[1]+ notas4[2]+ notas4[3])/notas3.length;

console.log(`A média é ${media4}`);