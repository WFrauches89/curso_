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

for (let key in client) {
    
    let type = typeof client[key];
    
    if(type !== "object" && type !== "function") {
        console.log(`A key ${key} has the value ${client[key]}. `);

        console.log();
    }

    // console.log(key);
    
    // console.log(client[key]);
    //type !== "object" && type !== "function"


}

const paciente = {
    nome: "James T.",
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
      console.log(this.nome)
    }
   }

// for (let inf in paciente){
//     console.log(inf);
// }

