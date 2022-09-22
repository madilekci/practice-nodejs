
const books = [
    {name:"Book 1", author:"Author 1"},
    {name:"Book 2", author:"Author 2"},
    {name:"Book 3", author:"Author 3"},
    {name:"Book 4", author:"Author 4"},
    {name:"Book 5", author:"Author 5"},
    {name:"Book 6", author:"Author 6"}
]

function addBook(newBook,callback) {
    books.push(newBook);
    callback();
}

function listBooks(){
    books.map( book => {
        console.log(book.name);
    })
    console.log("---");
}

listBooks();

book9 = {name:"Book 9", author:"Author 9"};
addBook(book9,listBooks);