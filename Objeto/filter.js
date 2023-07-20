const clientsList = require("./clients.json");

function filterApart (clientsList) {

    return clientsList.filter((clientParam) => {
        return ( clientParam.endereco.apartamento 
            && !clientParam.endereco.hasOwnProperty("complemento"));
    });

};

const founded = filterApart(clientsList);



console.log(founded);

