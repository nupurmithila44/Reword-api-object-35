
// 1.json => stringify parse 
const student ={
    name : 'methila',
    age: 27,
    roll: 3,
    subject :[ 'bangla','enlish','math']
}

//aita stringify kore
const studentStringify = JSON.stringify(student);
console.log(studentStringify)

//aita object kore
// const studentParse = JSON.parse(studentStringify)
// console.log(studentParse)

// // fetch (async await)
// fetch(url)
// .then(res => res.json())
// .then (data => console.log(data))

// keys, values
const keys = Object.keys(student)
console.log(keys)

const values =Object.values(student)
console.log(values)

const product =[
    {phone:"iphone", price: 100000, barand:"ipnonebarand",color: "gray"},
    {phone:"samsung", price: 20000, barand:"samsungbarand",color: "black"},
    {phone:"oppo", price: 15000, barand:"oppobarand",color: "white"},
    {phone:"itel", price: 5000, barand:"itelbarand",color: "black"},
    {phone:"nokia", price: 10000, barand:"inokiabarand",color: "esh"},

]
const newproduct= {phone:"sawami", price: 25000, barand:"abarand",color: "red"}
const newproductadd = [...product,newproduct];
console.log(newproductadd)

//ternary operator
let many = 50;
let myvar = 120;
// const food1 = many >100 ? 'biriyani': 'cha biskuut';
// console.log(food1);

const food2= many>100 || many<100 ? 'coke': 'water';
console.log(food2)

const food3 = many > 100 && myvar>100? 'error': 'not error';
console.log(food3)
