const notas = [10, 6.5, 8, 7.5];

let sumNotas = 0;

for (let grade of notas) {
    console.log(grade);

    sumNotas += grade;

}

console.log(sumNotas);

const media = sumNotas/notas.length;

console.log(media);

for (let i = notas.length - 1; i >= 0; i--) {
  console.log(notas[i]);
}

for (let i = notas.length - 1; i >= 0; i-= 2) {
    console.log(notas[i]);
}


for (let i = notas.length - 1; notas[i] >= 6; i--) {
    console.log(notas[i]);
}

const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);

const numerosImpares = [];

for (let i = 1; i <= 100; i += 2) {
  numerosImpares.push(i);
}

console.log(numerosImpares);