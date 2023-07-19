const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = alunos.slice(0, alunos.length/2);
const sala2 = alunos.slice(alunos.length/2, alunos.length);
// Atencao Slice e Splice 
sala2.splice(0, 2, 'Ana', 'Wesley');
sala2.sort();

console.log(alunos);
console.log(sala1);
console.log(sala2);


animaisDoAquario = ['a', 'b', 'c', 'd']

animaisDoAquario.splice(1,0,'k')
animaisDoAquario.splice(3,2,'w')

console.log(animaisDoAquario)
