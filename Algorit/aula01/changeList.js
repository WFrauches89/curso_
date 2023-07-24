function changeList (list, analytics) {

    let itemList = list[analytics];
    //console.log('Livro atual é ',books[i]);
    let itemPrevList = list[analytics -1];
    //console.log('Livro menor preço é ', books[smaller]);
    list[analytics] = itemPrevList;
    list[analytics -1] = itemList;

};

module.exports = changeList;