const productModel = require("../model/product-model")

exports.getProduct =  (req, res, next)=>{

  productName = new productModel("List of Products")

  res.render('product', {name:productName.title, products:productModel.fetchall(), hasProdcuts:true})

}


exports.getHome = (req, res, next)=>{

  res.render('product', {name:"Home page", hasProdcuts:false})

}
