const client = {
    name: "João",
    age: 24,
    email: "joao@dominio.com",
    phone: ["2212345678", 
            "2287654321"],
    
};

console.log(client);

client.adress = {
    street: "R. Joseph Climber",
    number: 171,
    apartment: true,
    complement: "ap 106"
}

console.log();
console.log(client);
console.log();
console.log(client.adress);
console.log();
console.log(client["adress"]);
console.log();
console.log(client.phone[1]);

