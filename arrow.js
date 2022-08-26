// duncation declaration
// function add(first, secend){
//     const total = first + secend;
//     return total;
// } 

const number = 50;

// funcation expression
const add1 = function add1 (first, secend){
    const total = first + secend;
    return total;
} 
// funcation expression with anoymous funcation
const add2 = function (first, secend){
    const total = first + secend;
    return total;
} 

function add3(first, secend){
    return  first + secend;
} 

function add4(first, secend){
    return  first + secend;
}

// arrow funcation
const add5 = (first, secend) => first + secend;

const result = add(10,20);
console.log(result);