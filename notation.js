const student = {
    name: 'joita khan',
    age: 15,
    class: 'Ten',
    marks: {
        math: 80,
        physics: 89,
        chemistry: 50
    },
}

const marks = student.marks;
const math = student.marks.math;

console.log(math);