let x = 15;
console.log(x);
x = 'Olá';
console.log(x);


function soma(numA,numB) {
    return numA + numB;
}

console.log(soma(15,742));
console.log(soma(-815,742));
console.log(soma(156,-742));


function mult(numA, numB) {
    return numA * numB;
}

console.log(mult(15,742));
console.log(mult(-815,742));
console.log(mult(-156,-742));
console.log(mult(soma(15,18),soma(-742, 142)));

function eText (namA, idd, cdd, job) {
    return `Olá meu nome é ${namA}, tenho ${idd}, moro em ${cdd} e trabalho com ${job}`
}

console.log(eText('Wanderson', soma(2023, -1989), 'Nova Friburgo', 'TI'));
console.log(eText('Nova Friburgo', 'Wanderson', soma(2023, -1989), 'TI'));
console.log(eText(soma(2023, -1989), 'Nova Friburgo', 'TI',  'Wanderson'));



