const numbers = [3, 4, 6, 8, 6, 5, 8];
// const total = numbers.reduce( ( previous, current) => previous + current , 0);
const total = numbers.reduce( ( previous, current) => {
    console.log(previous , current);
    return previous + current
} , 0);
console.log(total);