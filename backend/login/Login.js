var express = require("express");
var router =express.Router();
var UsersModel = require("../models/usersModel");


//getting users from database
router.get('/users',async (req,res) =>{
    const result = await UsersModel.find({})
   //console.log("==>",result)
   res.send(result)
})



  router.post('/',function(req, res, next) {
    var email=req.body.email;
    var password=req.body.password;
    console.log("login data received in server")
    var checkUser=UsersModel.findOne({username:email});
    checkUser.exec((err, data)=>{
     if(data==null){
      res.send({ msg:"Please Enter password" });
  
     }
     else{
    if(err) throw err;
  var getUserID=data._id;
  var getPassword=data.password;
  if(password==getPassword){
     
    res.send({user:email,msg:"token successfully assigned"})
 

     
  }else{
    res.send({ msg:"Invalid email and Password." });
  
  }
     }
    });
   
  });
 
module.exports = router;