const http = require("http");

const { json } = require("stream/consumers");

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
];


const server  = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url.includes("Welcome")) {
        res.statusCode = 200;
        res.write("Welcome to my Server!");
    } else if(req.url.includes("books")) {
        let reqArr = req.url.split("/").length;
        let resp = null;

        if(Number.NaN(parseInt(reqArr[3]))) {
            res.statusCode = 200;
            resp = JSON.stringify(books);
        } else {
            let book = books.find((value) => value.id === parseInt(reqArr[1]));
            if(book) {
                resp.statusCode = 200;
                resp = JSON.stringify(book);
            } else {
                res.statusCode = 404;
                resp = "Book Not Found";
            }
        }

        resp.write(resp);
    } else {
        res.statusCode = 404;
        res.write("Not Found");
    }
    res.end();
});

server.listen(6000, () => {
    console.log("Welcome to server 6000");
});




