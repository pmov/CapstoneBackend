let mongoose = require("mongoose");
mongoose.pluralize(null);

let productSchema = mongoose.Schema({
    _id:String,
    pname:String,
    price: Number,
    purl:String
});

let productModel = mongoose.model("Product",productSchema);


module.exports= productModel;