//BACKEND : handling request and response.
//Javascript file
//This file contains the JavaScript code for the HTML file
//It is used to add interactivity to the HTML elements
//It is also used to handle events and update the DOM dynamically

// console.log("Welcome to coder's camp");

//how to import a module in JavaScript
const http = require("http");
const { json } = require("stream/consumers");
// console.log(http);

//controllers are request handler: request & resolve
let controller = function(res, req){
    // console.log("Hello from controller");
    console.log(req);
};

let books = [
    {
        "id": 1,
        "title": "Book 1",
        "author": "Author 1",
        "price": 10.99
    },
    {
        "id": 2,
        "title": "Book 2",
        "author": "Author 2",
        "price": 12.99
    },
    {
        "id": 3,
        "title": "Book 3",
        "author": "Author 3",
        "price": 14.99
    },
]

//create server: create a server using http module
//request handler
const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url.includes("Welcome")) {
    res.statusCode = 200;
    res.write("Welcome to my server!");
    }
    else if(req.url.includes("books")) {
        res.statusCode = 200;
        res.write(JSON.stringify(books));
    }
    else {
    res.statusCode = 404;
    console.log("Request not found");
    }
    res.end();
});
//running a server
server.listen(5000, () => console.log("Server has started. Welcome!"));

//servers used for front end: 3000 and for backend server: 5000

