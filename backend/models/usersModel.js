const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Users = new Schema({
 name:{
     type:"string",
     required:true
 },
 
username:{
    type:"string",
    required:true
},
password:{
    type:"string",
    required:true
}, 
dob:{
    type:"string",
    required:true
},
 mobile:{
    type:"string",
    required:true
}
})

const UsersModel = mongoose.model("Users",Users);
module.exports = UsersModel;