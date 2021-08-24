products = [{title:"Iphone", Price:100}, {title:"Samsung Galaxy", Price:200}]

module.exports = class Product{
  constructor(t){
    this.title = t
  }

  static fetchall(){
    return products;
  }
}
