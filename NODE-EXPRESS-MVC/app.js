const express = require("express");
const product = require('./controller/product-controller.js')
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.get("/products", product.getProduct)
app.get("/",  product.getHome)

app.listen(3001);
