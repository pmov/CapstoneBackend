let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let productRouter = require("./router/product.router");
let wishlistRouter = require("./router/wishlist.router");
let userRouter = require("./router/user.router");
let app = express();

app.use(cors());
app.use(express.json());

// let url = "mongodb://localhost:27017/projectinfo";
let url = "mongodb+srv://dbadmin1:dbadmin1@cluster0.idoqn.mongodb.net/productInfo?retryWrites=true&w=majority";

mongoose.connect(url);

// http://localhost:9090/api/product/
app.use("/api/product",productRouter);
app.use("/api/wishlist",wishlistRouter);
app.use("/api/login",userRouter);


app.listen(9090,()=>console.log("Server running on port number 9090"));




