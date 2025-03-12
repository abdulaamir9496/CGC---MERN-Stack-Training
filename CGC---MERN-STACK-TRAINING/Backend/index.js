const express = require('express')
const app = express()


//we can also write with end points as shown below:
app.get('/', function (req, res) {
    res.send('This is home page Welcome to Express.Js world')
})

app.get('/about', function (req, res) {
    res.send('This is about page')
})

app.get('/contact', function(req, res) {
    res.send("This is contacts page")
})

app.listen(5000, () => console.log("Server is running up...!"));

//request goes to through Use : middleware (everytime )
// app.use((req, res) => {
//     res.status(200);  //converting ot method
//     res.send("Welcome to my Express Js Server!");  //we can send any type of data
// });

//we also do chaingin of mehods.
