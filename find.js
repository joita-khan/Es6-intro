const numbers = [23, 45, 645, 843, 60, 50, 80];

const five = numbers.find(numbers => numbers % 5 === 0)
console.log(five);

const products = [
    {id:1, name:'phone', price: 40000},
    {id:2, name:'laptop', price: 55000},
    {id:3, name:'watch', price: 25000},
    {id:4, name:'tablat', price: 30000},
];

const chips = products.find(products => products.price < 40000)
console.log(chips);
