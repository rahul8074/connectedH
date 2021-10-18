var express = require("express");
var router =express.Router();
var ProductsModel = require("./models/productsModel");

router.get('/',async (req,res)=>{
    const result = await ProductsModel.find({})
    //console.log("==>",result)
    res.send(result)
})


module.exports = router;