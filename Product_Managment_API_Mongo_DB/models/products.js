const mongoose = require("mongoose");

//Product Schema
const productSchema = mongoose.Schema({
    product_id : String,
    title : String,
    price : String,
    category : [{
        type:String
    }],
    company_id : String,
    seller_id : [{
        type:String
    }]
});

const productModel = mongoose.model("products",productSchema,"products");
module.exports = productModel;

