
const client = {
    name: "João",
    age: 24,
    email: "joao@dominio.com",
    phone: ["2212345678", 
            "2287654321"],
    
};

client.adresses = [{
    street: "R. Joseph Climber",
    number: 171,
    apartment: true,
    complement: "ap 106"
}];

const keysObj = Object.keys(client);

console.log(keysObj);

if (!keysObj.includes("adresses")) {

    console.error("Sem endereço cadastrado.");

}

