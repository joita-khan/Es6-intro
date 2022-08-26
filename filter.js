const numbers = [23, 45, 645, 843, 60, 50, 80];
const bigNum = numbers.filter(number => number > 50);
const little = numbers.filter(number => number < 50);
const even = numbers.filter(number => number % 2 === 0);
console.log(bigNum);
console.log(little);
console.log(even);

const products = [
    {id:1, name:'phone', price: 40000},
    {id:2, name:'laptop', price: 55000},
    {id:3, name:'watch', price: 25000},
    {id:4, name:'tablat', price: 30000},
];
const expensive = products.filter(products => products.price < 40000);
console.log(expensive);