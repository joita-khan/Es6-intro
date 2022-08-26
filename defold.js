// function add(first, secend){
//     const total = first + secend;
//     return total;
// } 
// const result = add(10,20)
// console.log(result);

function add(first=0, secend = 0){
    const total = first + secend;
    return total;
}
const result = add(10,20)
console.log(result);


function fullName(first, last = 'khan') {
    const name = first + ' ' + last;
    return name;
}
const name = fullName('jameya');
console.log(name);
