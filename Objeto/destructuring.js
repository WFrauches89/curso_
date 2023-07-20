// >>>>>SPREAD OPERATOR <<<<< Destructuring


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

// function callClient (phoneWork, phoneHome) {
//     console.log(`Ligando para ${phoneWork}`);
//     console.log(`Ligando para ${phoneHome}`);
// }

// //callClient(client.phone[0], client.phone[1]);
// // Refatorando e desestruturando ... 
// callClient(...client.phone);

// const order = {
//     recipient: client.name,
//     adress: client.adresses[0].street,
//     adressNumb: client.adresses[0].number,


// };

// console.log(order);

// Refatorando order
const order = {
    recipient: client.name,
    ...client.adresses[0],

}

console.log(order);
