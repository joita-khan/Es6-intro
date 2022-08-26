const person = 'joita khan';
const person2 = "jameya khan";
const person3 = `jameya khan joita`;


// old version
const multiLine = 'my name is joita \n' +
'i am a collage student \n'+
'i love to do sleep \n'+
'my frvt hobbi also sleep';
// console.log(multiLine);

// new version
const newMultiLine = `my name is joita
i am a collage student 
i love to do sleep 
my frvt hobbi also sleep`;
// console.log(newMultiLine);

// old
const  a = 20;
const b = 20;
const numbers = [10, 20, 30, 40];
const summary = 'sum of: ' + a + ' and ' + b + ' is '+ (a+b);
// console.log(summary);

// new
const newSummary = `sum of ${a} and sum of ${numbers.length} is: ${a+b}`;
console.log(newSummary);