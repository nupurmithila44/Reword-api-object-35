// array distructuring
const numbers = [20, 32];
const [x,y] =numbers
console.log(x,y)
const xx= numbers[1]
console.log(xx)
const [a,b] = [20,32]
console.log(a,b)

//object destructuring
// const {name,age} = {name: 'alu', age:14}
// console.log(name,age)
const {id, name, age} = {id:10 , name:'alu',salary:3000, age: 34}
console.log(id,name,age)