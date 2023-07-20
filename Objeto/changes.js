// const person = {
//     name: "Luma",
//     profession: "Engineer"
// }

// console.log(person.name);

// console.log(person.phone);

// person.phone = "1122334455";

// console.log(person.phone);

// person.name = "Luma Silva";

// console.log(person);

const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
 }

 console.log(pessoa);

 pessoa.cpf = "12345678901";
 pessoa.seguroSocial = "10000001";
 console.log(`Os quatro primeiros dígitos do CPF são: ${pessoa.cpf.substring(0,4)} e da carteira de identidade são: ${pessoa.carteiraIdentidade.substring(0,4)}.`);



 