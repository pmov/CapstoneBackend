let User = require("../model/user.model");
//let bcrypt = require("bcryptjs");       // password 
//let jwt = require("jsonwebtoken")           // to generate token 

let register = async (req,res)=> {

    console.log("Trying to register "+req.body.user_type+"::"+req.body.password);
  
    let user = new User({
        email: req.body.email,
        password:req.body.password,
        user_type:req.body.user_type
    });
    //User.insertMany()
    user.save((err,doc)=> {
        if(!err){
            console.log("Account Created successfully");
            res.json("Account Created successfully")
        }else {
            //res.send(err);
            console.log("Account Creation Failed"+err);
            res.json("Account Creation Failed");
        }
    })
}

// emailid and password 
let login = async (req,res)=> {
    console.log("Trying to LOGIN "+req.body.user_type+"::"+req.body.password);
      User.findOne({email:req.body.email},async (err,user)=> {
          if(!err){
                if(user){
                    //let validPassword = await bcrypt.compare(req.body.password,user.password);
                    if(req.body.password != user.password){
                        //return res.status(401).send("Invalid Password");
                        res.json("Account Login Successful");
                    }else {
                    // let payload = {id:user._id,user_type:req.body.user_type}
                    // let token = jwt.sign(payload,"secretKey");
                    // res.status(200).header("auth-token",token).send("Account Created successfully");
                    //res.status(200).send({token});
                    res.json("Account Password doesn't match or invalid email");
                   }
                }
          }else {
              //res.status(404).send(err);
              res.json("Account Login Failed");
          }
      })  
}


module.exports= {register,login}