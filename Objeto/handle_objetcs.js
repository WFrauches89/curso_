const clients = require("./clients.json");

//console.log(clients);


function search (local, key, value) {

    return local.find((item) => item[key].includes(value));

}

const found = search(clients, "nome", "Kirby");

const found2 = search(clients, "telefone", "79919437785");

console.log(found);
console.log(found2);

