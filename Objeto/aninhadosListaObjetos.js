const client = {
    name: "João",
    age: 24,
    email: "joao@dominio.com",
    phone: ["2212345678", 
            "2287654321"],
    
};

console.log(client);

client.adresses = [{
    street: "R. Joseph Climber",
    number: 171,
    apartment: true,
    complement: "ap 106"
}];

console.log();
console.log(client);
console.log();
console.log(client.adresses);
console.log();
console.log(client["adresses"]);
console.log();
console.log(client.phone[1]);

client.adresses.push({
    street: "R. Joseph Letter",
    number: 100,
    apartment: false,
    complement: null,
});

console.log();
console.log(client);
console.log();
console.log(client.adresses);
console.log();
console.log(client.adresses[1].number);

const listAdressApart = client.adresses.filter((propertyadress) => propertyadress.apartment === true);

console.log(listAdressApart);

const listAdressApart2 = client.adresses.filter((propertyadress) => propertyadress.apartment === true);

console.log(listAdressApart);

