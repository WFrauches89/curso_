const alunos =['João','Luiz','Ana', 'Carla'];
const medias =[8, 7, 9, 6];

const listAluMed = [alunos, medias];

console.log(listAluMed);

// >>>> Funcional porém foi realizado dois processos de refatoração <<<<<


//function exibNomeENota (aluno) {
//     if (listAluMed[0].includes(aluno)) {

//         const index = listAluMed[0].indexOf(aluno);

//         const mediaAlun = listAluMed[1][index];

//         //console.log(index);
//         //console.log(mediaAlun);

//         console.log(`${aluno} sua média é: ${mediaAlun}.`);

//     } else {
//         console.log(`O(A) aluno(a) não está cadastrado(a)!`);
//     }
// }

//                >>>>>>>>>REFATORAÇÃO 01 <<<<<<<<<<<<< 


// function exibNomeENota (aluno) {
//     if (listAluMed[0].includes(aluno)) {
        
//         const alunos = listAluMed[0];
//         const medias = listAluMed[1];

//         const index = alunos.indexOf(aluno);

//         const mediaAlun = medias[index];

//         //console.log(index);
//         //console.log(mediaAlun);

//         console.log(`${aluno} sua média é: ${mediaAlun}.`);

//     } else {
//         console.log(`O(A) aluno(a) não está cadastrado(a)!`);
//     }
// }

//                >>>>>>>>>REFATORAÇÃO 02 Destructing<<<<<<<<<<<<< 


function exibNomeENota (aluno) {
    if (listAluMed[0].includes(aluno)) {
        
        const [alunos, medias] = listAluMed; 
        
        // Refatorando com declaração de constante com [];
        // const alunos = listAluMed[0];
        // const medias = listAluMed[1];

        const index = alunos.indexOf(aluno);

        const mediaAlun = medias[index];

        //console.log(index);
        //console.log(mediaAlun);

        console.log(`${aluno} sua média é: ${mediaAlun}.`);

    } else {
        console.log(`O(A) aluno(a) não está cadastrado(a)!`);
    }
}


exibNomeENota('Ana');

exibNomeENota('Carlos');