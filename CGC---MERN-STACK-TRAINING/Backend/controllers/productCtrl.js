const ProductModel = require("../models/productModel");
const { responseObjGenerator } = require("../utils/utils");

// PAGINATION
// page => The page being visited
// pageSie => The number of items per page (records per page)
// Skip => (page -1) * paegSize The number of items to skip before starting to return items

const getProducts = async (req, res) => {
    const { page, pageSize } = req.params;
    // console.log(page, pageSize);
    const skip = (page - 1) * pageSize;
    const data = req.body;
    let filter = {};
    if(data) {
        if(data.isSearch) {
            filter = {
                $or: [
                    {name: {$regex: data.searchTerm, $options: 'i'}}, {category: {$regex: data.searchTerm, $options: 'i'}}
                ]
            };
        } else {
            filter = {
                ...data 
            };
        }
    };

    // SORTING: on basis of rating/reveiws or price basis
    const { sort, dir } = req.query;
    console.log(req.query);

    const products = await ProductModel.find().
        sort({
            [sort]: dir,
        })
        .skip(skip)
        .limit(pageSize);  //order matters for skipping the page
    const count = await ProductModel.countDocuments();  //Total records
    res.status(200).json(products, count);
};

//using filters :DRY (dont repeat yourself while coding)

const addProduct = async (req, res) => {
    try {
        const data = req.body;
        const product = new ProductModel(data);
        await product.save();
        let resObj = responseObjGenerator(true, "Product Added Successfully!", product);
        res.status(201).json(resObj);
    } catch (e) {
        let resObj = responseObjGenerator(false);
        res.status(500).json(resObj);
    }
};

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const data = req.body;
        const product = await ProductModel.findOneAndUpdate({ _id: productId }, data, { new: true });
      // const prd = await ProductModel.findOne({ _id: productId });
        let resObj = responseObjGenerator(true, "Product Updated Successfully!", product);
        res.status(200).json(resObj);
    } catch (e) {
        console.log(e);
        let resObj = responseObjGenerator(false);
        res.status(500).json(resObj);
    }
};

const updateCompProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const data = req.body;
        const product = await ProductModel.updateOne(
            { _id: productId },
            {
                $set: {
                    name: data.name,
                    price: data.price,
                    category: data.category,
                    inStock: data.inStock,
                    discountType: data.discountType,
                    discount: data.discount,
                },
            },
        { new: true }
        );
        let resObj = responseObjGenerator(true, "Product Updated Successfully!", product);
        res.status(200).json(resObj);
    } catch (e) {
        console.log(e);
        let resObj = responseObjGenerator(false);
        res.status(500).json(resObj);
    }
};

const deleteProduct = async (req, res) => {
    try {
        let productId = req.params.id;
        await ProductModel.deleteOne({ _id: productId });
        let resObj = responseObjGenerator(true, "Product Deleted Successfully!");
    res.status(200).json(resObj);
        } catch (e) {
    console.log(e);
        let resObj = responseObjGenerator(false);
        res.status(500).json(resObj);
    }
};

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    updateCompProduct,
};