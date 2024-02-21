const { register, kgToPound, simpleInterest, saveJSON } = require('./functions');



//first function 
register('Marry', 'Jane');

//second function
const weightInPounds = kgToPound(10);
console.log('Weight in pounds:', weightInPounds);

//third function
const interest = simpleInterest(1000, 5, 2);
console.log('Simple interest:', interest);

//fourth function
saveJSON('https://jsonplaceholder.typicode.com/todos/1', './data.json');
