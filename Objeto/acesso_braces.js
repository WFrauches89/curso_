const cliente = {
    name: "Jose",
    age: 34,
    ssn: "12345678901",
    email: "jose@dominio.com",
}

console.log(
    `O nome do cliente é ${cliente['name']} e essa pessoa tem ${cliente["age"]} anos.`
);

console.log(
    `Os três últimos dígitos do cpf deste cliente ${cliente["ssn"].substring(8, 11)}.`
);

const chaves = ["name", "age", "ssn", "email", "heigth"];

chaves.forEach((propriedadeBuscada) => 
console.log(`A propriedade buscada é ${propriedadeBuscada} e tem o valor de ${cliente[propriedadeBuscada]}.`));

