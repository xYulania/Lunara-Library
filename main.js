const prompt = require(`prompt-sync`)()

let userChoice, userPress;

const books = []
const users = []

const userInfo = () => {
    const UserInfo = prompt(`Enter your email: `)
    users.push(UserInfo)
}

const addBook = () => {
    let inputBook = prompt(`Enter book title: `)
    let inputAuthor = prompt(`Enter author name: `)
    let inputISBN = prompt(`Enter ISBN: `)
    const newBook = {
        title: inputBook,
        author: inputAuthor,
        ISBN: inputISBN,
        // borrowed: false,
        // borrowedBy: 
    }
    books.push(newBook)
    console.log(`Book added: "${inputBook}" by ${inputAuthor} (ISBN: ${inputISBN})`)
};

const viewBook = () => {
    console.log(`Library Catalog: `)
    if(books.length === 0){
        console.log(`No books available.`)
    } else {
        books.forEach((book, index) => {
            console.log(`${index + 1}. "${book.title}" by ${book.author} (ISBN: ${book.ISBN})`)
        });
    }
};

const borrowBook = () => {
    const userISBN = prompt(`Enter ISBN of the book to borrow: `)
    const bookIndex = books.findIndex(book => book.ISBN === userISBN)
    const BookIndex = books.find(book => book.ISBN === userISBN)

    if(bookIndex !== -1){
        const borrowedBook = books.splice(bookIndex, 1)[0]
        console.log(`You have successfully borrowed "${borrowedBook.title}" by ${borrowedBook.author}.`)
    }else{
        console.log(`Book with ISBN ${userISBN} is not available.`)
    }
};
// Library Catalog:
// 1. The Great Gatsby by F. Scott Fitzgerald (ISBN: 9780743273565) - Borrowed
// 2. 1984 by George Orwell (ISBN: 9780451524935) - Available
const returnBook = () => {
    console.log(`Library Catalog: `);
    const userISBN = prompt(`Enter ISBN of the book to return: `);
    const returnedBookIndex = books.findIndex(book => book.ISBN === userISBN);

    if (returnedBookIndex !== -1) {
        console.log(`Book with ISBN ${userISBN} is already in the catalog.`);
    } else {
        const returnedBook = { title: prompt("Enter book title: "), author: prompt("Enter book author: "), ISBN: userISBN };
        books.push(returnedBook);
        console.log(`You have successfully returned "${returnedBook.title}" by ${returnedBook.author}`);
    }
};

do {
    console.log(`Library Management System`)
    console.log(`-------------------------`)
    console.log(`\nSelect Action: `)
    console.log(`1. Add a Book\n2. View All Books\n3. Borrow a Book\n4. Return a Book\n5. Search For a Book\n6. Exit\n`)    

    userChoice = parseInt(prompt(`Enter Your Choice: `), 10)

    if (userChoice === 1) {
        addBook()
    }
    if (userChoice === 2) {
        viewBook()
    }
    if (userChoice === 3) {
        borrowBook()
    }
    if (userChoice === 4) {
        returnBook()
    }
    if (userChoice === 5) {
        // Placeholder for searchBook function
        console.log(`Search Book functionality not implemented yet.`)
    }
    if (userChoice === 6) {
        console.log(`Exiting the system.`)
    }
    if (userChoice < 1 || userChoice > 6){
        console.log(`Invalid choice. Please enter a number between 1 and 6.`)
    }
} while (userChoice > 0 && userChoice < 7)