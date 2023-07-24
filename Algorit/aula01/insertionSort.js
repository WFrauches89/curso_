const books = require('./bookslist');
const changeList = require('./changeList');





function insertionSort (list) {

    for (let i= 0; i < list.length; i++) {

        let analytics = i;

        while (analytics > 0 && list[analytics].price < list[analytics - 1].price) {
            
            changeList(list, analytics);

            // let itemList = list[analytics];
            // //console.log('Livro atual é ',books[i]);
            // let itemPrevList = list[analytics -1];
            // //console.log('Livro menor preço é ', books[smaller]);
            // list[analytics] = itemPrevList;
            // list[analytics -1] = itemList;

            analytics--;
    
        }  

    };
    
    console.log(list);
}

insertionSort(books);



