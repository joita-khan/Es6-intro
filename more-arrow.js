const add = (first, secend) => first + secend;
const fullName = (first, last) => first + ' ' + last;
const multiply =  (a,b) => a * b;

const result = multiply(2,20);
console.log(result);


// no peramiter arrow function
const getPai = () => 3.14;

// one peramiter 
const double = (num) => num * 2;

// one peramiter simple
const fiveTime = num => num * 5;

// multi line arrow funcation
const x = 20;
const y = 10;
const z = 5;
const doMath = (x,y,z) => {
    const first = x + y;
    const secend = y + z;
    const multiplyResult = first * secend;
    const result = multiplyResult / 2;
    return result;
};