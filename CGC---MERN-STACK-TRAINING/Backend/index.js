const express = require('express')
const app = express()

// Sample book data
let books = [
    { id: 1, title: "Book 1", author: "Author 1", price: 10.99 },
    { id: 2, title: "Book 2", author: "Author 2", price: 12.99 },
    { id: 3, title: "Book 3", author: "Author 3", price: 14.99 },
];

// Middleware to parse JSON (optional for future use)
app.use(express.json());
// Home route
app.get('/', (req, res) => {
    res.send('<h1>This is the home page. Welcome to Express.js world!</h1>');
});

// About route
app.get('/about', (req, res) => {
    res.send('<h1>This is the about page.</h1>');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('<h1>This is the contact page.</h1>');
});

// Get all books
app.get('/books', (req, res) => {
    res.status(200).json(books);   //data goes in json format
});

// Get a single book by id
app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(value => value.id === bookId);

    if (book) {
        res.status(200).json(books)
        // return res.status(404).send('<h1>No id found from the books</h1>');
    } else {
        res.status(404).send('<h1>No books found. Please check the id.</h1>');
    }
});

// app.get('/books/:author', (req, res) => {
//     const bookAuthor = parseInt(req.params.author);
//     const book = books.find(b => b.author === bookAuthor);

//     if(!book) {
//         return res.status(404).send('<h1>No Author found from the books</h1>')
//     }
// });

// Handle incorrect routes
// app.use((req, res) => {
//     res.status(404).send('<h1>URL is incorrect, Enter the correct URL</h1>');
// });



// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//request goes to through Use : middleware (everytime )
// app.use((req, res) => {
//     res.status(200);  //converting ot method
//     res.send("Welcome to my Express Js Server!");  //we can send any type of data
// });

//we also do chaingin of mehods.
