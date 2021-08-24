// #let and const

let name ="abhiram"
const age = 10

console.log("My name is "+ name +" and my age is"+age)


// arrow functions

x = (name, age) => {
  console.log("My name is "+ name +" and my age is"+age)
}

z = name => {
  console.log("My name is "+name)
}

y = () => {
  return "abhiram"
}


x(name, age)
z(name)
console.log(y())


//objects, properties

data ={
  name:"abhiram_c",
  age:10,
  x:function getName(){
    console.log(this.name)
  }
}

data.x()


//arrays

a = [1, 2, 3, 4, 5]
console.log(a[0])


//spread and rest operator

_x = {...data}
console.log(_x)

_y = [...a]
console.log(_y)


// Deststructuring

number = ["one", "two"]
const [num1, num2]=number

console.log(num1)
