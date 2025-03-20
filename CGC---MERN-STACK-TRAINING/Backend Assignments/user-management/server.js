const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

app.listen(process.env.PORT || 5000, () => console.log("Server is Up & Running!"));

app.use(express.json());

// app.use((req, res, next) => {
//   console.log("I am in middleware!");
//   next();
// });

//Creating directory path manually.
const dir = path.join(__dirname, "logs");

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);   //mkdirSync is used to create folder/directory.
}

//creating file path manually
const filePath = path.join(__dirname, "logs", "request.log");
const stream = fs.createWriteStream(filePath, {
  flags: "a",
});

app.use(morgan("combined", { stream }));

app.use("/api/v1/", require("./routes/routes"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected to Server!"))
  .catch((err) => console.log(err));