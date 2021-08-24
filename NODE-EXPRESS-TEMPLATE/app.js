const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.get("/", (req, resp, next)=>{

products = [{title:"Iphone", Price:100}, {title:"Samsung Galaxy", Price:200}]

// console.log({pagetitle:"Rudra mani", hasProdcuts: products.length > 0, prods:products })

resp.render('product', {pagetitle:"Products", hasProdcuts: products.length > 0, prods:products })

})


app.listen(3001);
