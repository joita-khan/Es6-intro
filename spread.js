const max = Math.max(10,20,30,40,50,60);
const number = [10,20,30,40,50,60];
const largest = Math.max(...number,);
// console.log(...number);
// console.log(largest);

const number2 = [11,12,...number,11];
number.push(55);
number2.push(555);
console.log(number);
console.log(number2); 