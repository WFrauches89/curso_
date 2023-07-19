const names = ['Evaldo','Cristina','Lucas','Camis'];

names.forEach(function(nNames){
    console.log(nNames);
});
console.log();

names.forEach((nNames) => {
    console.log(nNames);

});
console.log();

names.forEach(nNames => {
    console.log(nNames);
});
console.log();
function printname(nNames) {    
    console.log(nNames);
}
console.log();
printname (names);
console.log();
names.forEach(printname);

