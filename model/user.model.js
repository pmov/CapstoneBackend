let mongoose = require("mongoose");
mongoose.pluralize(null);   // avoid s post fix and lower case for collection 
let userSchema = mongoose.Schema({
    email: String,
    password:String,
    user_type:String
});
let userModel = mongoose.model("User",userSchema);

module.exports=userModel;