const users = [{id: 1, name: 'joita', job: "student"}]

// console.log(users[0].name);

const data = {
    count: 500,
    data:[
        {id: 1 , name:"jameya", job:"student"},
        {id: 2 , name:"khan", job:"student"},
    ]
}
const firstJob = data.data[1].job;
// console.log(data.data[1].job);

const user = {
    id: 1,
    name: "jameya khan joita",
    addraddess: {
        street: {
          First:"35/A tongi,gazipur",
          second:  "secend flor"
        },
        postOffice: "tongi",
        city:'gazipur'
    }
}
// const findAddress = user.addraddess.stret?.second;
const findAddress = user.addraddess.street.second;
console.log(findAddress);