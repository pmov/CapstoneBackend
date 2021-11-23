let express = require("express");
let router = express.Router();
let wishlistController = require("../controller/wishlist.controller")
router.post("/storeWishlistProductId",wishlistController.storeWishListInfo);
router.get("/getWishListInfo/:id",wishlistController.retriveWishListInfo);
router.post("/deleteWishListProduct",wishlistController.deleteWishListByProductId);

module.exports= router;