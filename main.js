const prompt = require(`prompt-sync`)()

let userChoice, userPress;

const books = []

const addBook = () => {
    let inputBook = prompt(`Enter book title: `)
    let inputAuthor = prompt(`Enter author name: `)
    let inputISBN = prompt(`Enter ISBN: `)
    const newBook = {
        title: inputBook,
        author: inputAuthor,
        ISBN: inputISBN
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

    if(bookIndex !== -1){
        const borrowedBook = books.splice(bookIndex, 1)[0]
        console.log(`You have successfully borrowed "${borrowedBook.title}" by ${borrowedBook.author}.`)
    }else{
        console.log(`Book with ISBN ${userISBN} is not available.`)
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
    } else if (userChoice === 2) {
        viewBook()
    } else if (userChoice === 3) {
        borrowBook()
    } else if (userChoice === 4) {
        // Placeholder for returnBook function
        console.log(`Return Book functionality not implemented yet.`)
    } else if (userChoice === 5) {
        // Placeholder for searchBook function
        console.log(`Search Book functionality not implemented yet.`)
    } else if (userChoice === 6) {
        console.log(`Exiting the system.`)
        break
    } else {
        console.log(`Invalid choice. Please enter a number between 1 and 6.`)
    }
} while (userChoice > 0 && userChoice < 7)
    // hello