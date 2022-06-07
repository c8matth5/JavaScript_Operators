console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
let a = 20;
let b = 4;

let sum = a + b; // 24
let minus = a - b; // 16
let multiply = a * b; // 80
let dividing = a / b; // 5
let remainder = a % b; // 0

console.log(sum, minus, multiply, dividing, remainder)

// Exercise 2
let num = 11; 
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

console.log(num + str); // "1111"
console.log(num + str2); // "11eleven"
console.log(num + isPresent); // 12
console.log(firstName + num); // "Frodo11"
console.log(isPresent + str); // "true11"
console.log(firstName + lastName); // "FrodoBaggins"

// Exercise 3

console.log("EXERCISE 3:\n==========\n");

let val = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;

console.log(val = str3); // 5
console.log(val === str3); // true
console.log(!isPresent2); // true
console.log('eleven' == str4 && val >= str3); // false
console.log(!isPresent2 || isPresent); // true
console.log(0 == false); // true
console.log(0 === false); // false
console.log(0 != false); // false
console.log(0 !== false); // true