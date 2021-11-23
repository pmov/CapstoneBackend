let wishlistItemModel = require("../model/wishlist.model");

let storeWishListInfo = (req, res) => {
    let wishlisItem = req.body;
    let wishItem = new wishlistItemModel({
        userId: req.body.userId,
        productId: req.body.productId
    });


    wishItem.save((err, doc) => {
        if (!err) {
            console.log("SUCCESS ADDED Wishlist Item");
            res.json("SUCCESS ADDED Wishlist Item")
        } else {
            //res.send(err);
            console.log("Failed to add wish item" + err);
            res.json("Failed to add wish item");
        }
    })
}

let retriveWishListInfo = async (req, res) => {
    console.log("REQ USERID " + req.params.id);
    try {
        let userId = req.params.id;
        console.log("USERID " + userId);
        wishlistItemModel.find({ userId: userId }, (err, result) => {
            if (!err) {
                if (result != null) {
                    console.log("wish list " + result);
                    res.json(result);
                } else {
                    res.json({ "msg": "Record not present with id is " + id });
                }
            } else {
                res.json(err);
            }
        });


    } catch (Exp) {
        res.send(Exp);
    }
}

let deleteWishListByProductId = (req, res) => {
    let productId = req.body.productId;
    let userId = req.body.userId;
    wishlistItemModel.deleteOne({ productid: productId, userId: userId }, (err, result) => {
        if (!err) {
            if (result.deletedCount > 0) {
                console.log("Wishlist Record deleted successfully");
                res.json({ "msg": "Wishlist Record deleted successfully" })
            } else {
                res.json({ "msg": "Wishlist Record not present with product id " + productId })
            }
        } else {
            res.send(err);
        }
    })
}


module.exports = { storeWishListInfo, retriveWishListInfo, deleteWishListByProductId }