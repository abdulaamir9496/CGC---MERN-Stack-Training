//to keep our clean and much moreunderstandable
//clean code we use separate folder as routes

const express = require("express");
const booksRoutes = require("./bookRoutes");
const productRoutes = require("./productRoutes");
const router = express.Router();

//handling requests:
router.use("/books", booksRoutes);

router.use("/products", productRoutes);

module.exports = router;

/// domain.com/api/v1/books

//domain.com/api/v1/books/create    :it will come n this file