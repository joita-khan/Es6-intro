const numbers = [2,4,6,8];
// const output =  [];
// for(const namber of numbers){
//     const doubled = namber * 2;
//     output.push(doubled);
// } 
// console.log( output);


function getDoubled(numbers){
    const output =  [];
for(const namber of numbers){
    const doubled = doubledIt(namber);
    output.push(doubled);
}
return output;
}
const doubledIt = num => num * 2;

const OlddoubledIt = numbers.map(doubledIt);
const OlddoubledMake = numbers.map(num => num * 2);
// console.log(OlddoubledMake);
const fiveTime = [1,2,3,4,5].map(num => num * 2);
// console.log(fiveTime);

const result = getDoubled(numbers);
// console.log(result);
// console.log(OlddoubledIt);

const friends = ['joita', "khan", "jameya", "tom"];
const friendList = friends.map(friend => friend[0]);
// console.log(friendList);
const friendLenght = friends.map(friend => friend.length);
// console.log(friendLenght);

const products = [
    {id:1, name:'phone', price: 40000},
    {id:2, name:'laptop', price: 55000},
    {id:3, name:'watch', price: 25000},
    {id:4, name:'tablat', price: 30000},
]

const items = products.map(products => products.name);
const price = products.map(products => products.price);
console.log(items);
console.log(price);

