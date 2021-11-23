let productModel = require("../model/product.model");

let storeProductInfo = (req,res)=> {
    
    let product = req.body;
   productModel.insertMany(product,(err,result)=> {
       if(!err){
           console.log("SUCCESS ADDED "+result);
           res.json(result)
       }else {
           res.json(err);
       }
   });
}


let retriveProductInfo = async (req,res)=> {
    try{
        let products = await productModel.find();
        res.json(products);
    }catch(Exp){
        res.send(Exp);
    }
}

let updateProductInfo  = (req,res)=> {
    let product = req.body;
    console.log("UPDATED entered with id :"+product._id);
    productModel.updateOne({_id:product._id},{$set:{pname:product.pname, price:product.price, purl:product.purl}},(err,result)=> {
        if(!err){
            // if(result.nModified>0 || result.n>0){
            //     res.json({"msg":"Product Record updated successfully"})
            // }else {
            //     res.json({"msg":"Product Record not present with id "+product._id});   
            // }
            console.log(result);
            res.json({"msg":"Product Record updated successfully"})
        }else {
            res.json(err);
        }
    })
}

let deleteProductById = (req,res)=> {
    console.log("Entered Delete :"+req.params.id);
    let id = eval(req.params.id);
    
    productModel.deleteOne({_id:id},(err,result)=> {
        if(!err){
            if(result.deletedCount>0){
                    res.json({"msg":"Record deleted successfully"})
            }else {
                    res.json({"msg":"Record not present with id "+id})
            }
        }else {
            res.send(err);
        }
    })
}


module.exports={storeProductInfo,retriveProductInfo,updateProductInfo,deleteProductById}