const product =[
    {phone:"iphone", price: 100000, barand:"ipnonebarand",color: "gray"},
    {phone:"samsung", price: 20000, barand:"samsungbarand",color: "black"},
    {phone:"oppo", price: 15000, barand:"oppobarand",color: "white"},
    {phone:"itel", price: 5000, barand:"itelbarand",color: "black"},
    {phone:"nokia", price: 10000, barand:"inokiabarand",color: "esh"},

]

// const allProduct = product.map(res => res.price )
// // const allOutput = product.map(res=> console.log(res))
// console.log(allProduct)
// const allfilter = product.filter(res => res.price<=15000)
// const allfilterItem = product.filter(res => res.price>=10000)
// console.log(allfilterItem)
 
//যতটা মেচ খাবে ততটা দিবে 
const specificName = product.filter(r => r.phone.includes('n'))
console.log(specificName)

//প্রথমে যেটাকে মেচ খাবে সেটাই দিবে
//find 
const special = product.find(p => p.phone.includes('n'));
console.log(special)