/ 1
const myBoolean = true;

// 2
const myString = 'hello world';

// 3
const firstNumber = 20;

// 4 
let secondNumber = 40;

// 5
secondNumber = 80;

// 6
const myArray = [myBoolean, myString];

// 7
const myObject = {
  firstProperty: myArray,
  sumProperty: firstNumber + secondNumber
};

// 8
console.log(myObject);


// 9 - Alternate solution
console.log(myObject.sumProperty);


// 10 - Alternate solution
console.log(myObject.firstProperty[1]);
