let express = require("express");
let router = express.Router();
let productController = require("../controller/product.controller")
router.post("/storeProductInfo",productController.storeProductInfo);
router.get("/getProductInfo",productController.retriveProductInfo);
router.post("/updateProductInfo",productController.updateProductInfo);
router.delete("/deleteProduct/:id",productController.deleteProductById);

module.exports= router;