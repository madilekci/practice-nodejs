
const books = [
    {name:"Book 1", author:"Author 1"},
    {name:"Book 2", author:"Author 2"},
    {name:"Book 3", author:"Author 3"},
]

function listBooks(){
    books.map( book => {
        console.log(book.name);
    })
    console.log("---");
}

function addBook(newBook) {

    const mypromise = new Promise( (resolve,reject)=>{
        
        if(newBook != null){
            books.push(newBook);
            resolve(books);
        }

        reject("Unknown error 404");
    } );

    return mypromise;

}


book9 = {name:"Book 9", author:"Author 9"};

addBook(book9,listBooks).then(()=>{
    console.log("New list : ");
    listBooks();
}).catch((error)=>{
    console.log("Error: ",error);
});

addBook(null,listBooks).then(()=>{
    console.log("New list : ");
    listBooks();
}).catch((error)=>{
    console.log("Error: ",error);
});