const bird = {
    name: "doyel pakhi",
    address: 'gazipur',
    color: "black or white",
    phone: '01711122233'
}

// const phone = bird.phone;
// const name = bird.name;
// console.log(phone);
// console.log(name);

const {age, name} = {name: 'joita', age:19, profession: 'student'}
console.log(age);

const {address} = bird;
console.log(address);

// arry distruturing
const nayok = ["sakib","raj","bappi"];
const [lost, king, noton] = nayok;
console.log(king);