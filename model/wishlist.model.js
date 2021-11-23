let mongoose = require("mongoose");
mongoose.pluralize(null);

let wishlistItemSchema = mongoose.Schema({
    userId:String,
    productId:String,   
});

let wishlistItemModel = mongoose.model("WishList",wishlistItemSchema);


module.exports= wishlistItemModel;