const clientList = require("./clients.json");

function sortOrder (list, property) {
    const result = list.sort((a,b) => {
        if (a[property] < b[property]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    } );
    return result;
}

const orderly = sortOrder(clientList, "nome" );
const orderlyRev = orderly.reverse();


console.log(orderly);
console.log(orderlyRev);