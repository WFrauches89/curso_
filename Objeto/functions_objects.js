const client = {
    name: "João",
    age: 24,
    email: "joao@dominio.com",
    phone: ["2212345678", 
            "2287654321"],
    
};

console.log(client);

client.currentFunds = 1200;

client.makePayment = function(currentValue){

    if (currentValue > this.currentFunds){
        console.log(`Insufficient funds for this requirement ${currentValue}.`);

    } else {
        this.currentFunds -= currentValue;
        console.log(`Successful payment! Your current funds is ${this.currentFunds}.`);

    }
}



client.makePayment(1500);
console.log(client);
console.log();
console.log();
console.log();
client.makePayment(500);

// Método igual da aula

const client2 = {
    name: "João",
    age: 24,
    email: "joao@dominio.com",
    phone: ["2212345678", "2287654321"],
    funds: 1000,
    makePay: function (currentBill){
        if (currentBill > this.funds) {
            console.log(`You don't have enough funds.`);
        } else {
            this.funds -= currentBill;
            console.log(`Successful payment, your new funds is: ${this.funds} reais.`);
        }
    }
};

console.log(client2);

console.log();

client2.makePay(1200);
console.log();

console.log();
client2.makePay(217);

// Exemplos da matéria

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem) 
   console.log(objPersonagem2)



   const cliente = {
    nome: "Jose",
    idade:33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
   }
    cliente.animalEstimacao = [{
    nome: "Kripto",
    raça: "Cão",
    vacinado: true
   }]
    cliente.animalEstimacao.push({
    nome: "Lex",
    raça: "Gato",
    vacinado: false
   })

   console.log(cliente);