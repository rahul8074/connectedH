const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Products = new Schema({
 imgurl:{
     type:"string",
     required:true
 },
 
name:{
    type:"string",
    required:true
},
price:{
    type:"Number",
    required:true
}
 
})

const ProductsModel = mongoose.model("Products",Products);
module.exports = ProductsModel;