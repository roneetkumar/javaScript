// this code works the modern way
"use strict";

//log function
console.log('Hello World');

// let variable (can be changed throughout program)
let name = 'Roneet';
// concatinate string with variable
console.log('My name is ' + name);
// use backtick to place variable in string
console.log(`My name is ${name}`);
// use backtick to evaluate expression in placeholders
console.log(`I am ${20 + 2} years old`);

// const variable (can't be change in the program)
const PI = 3.14;
console.log(PI);


// datatypes
//string
let string = "String";
//number
let number = 2;
//boolean
let boolean = true; //or false or 0 or 1
//null
let data = null; // variable data has no value;
//undefined
let box;
console.log(box); // variable box has no been defined;

//type of function or operator
console.log(typeof 1); // it return "number" and as function (typeof(1));
console.log('string');
console.log(typeof true); // boolean
console.log(typeof null); // its a error in the language, null is not an object
console.log(typeof alert); // it returns "function" (alert is function)

// explicit typecast tostring
let value = true;
value = String(value); // it will return boolean true converted to string "true"

// explicit typecast number
console.log('5' + '4'); // this will concatinate the two strings together without convertion.
console.log('3' * '4'); //this will convert the type first and then logs it
console.log('6' / '4'); //this will convert the type first and then logs it
console.log('2' - '4'); //this will convert the type first and then logs it
let age = Number("random string");
console.log(age); // NaN, conversion failed because we cannot change random string to number.

// explicit typecast boolean
console.log(Boolean("0")); // true
console.log(Boolean("hello")); // true
console.log(Boolean(" ")); // spaces, also true (any non-empty string is true)
console.log(Boolean("")); // false


//unary + -
let apples = "2";
let oranges = "3";

//unary operator
console.log(apples + oranges); // "23", the binary plus concatenates strings
console.log(+apples + +oranges); // unary + has higher precedence

// power (exponentiation)
console.log(2 ** 2); // 4  (2 * 2)
console.log(2 ** 3); // 8  (2 * 2 * 2)
console.log(2 ** 4); // 16 (2 * 2 * 2 * 2)

//increment
let plusCounter = 2;
plusCounter++;
console.log(plusCounter);
//decrement
let minusCounter = 2;
minusCounter--; // works the same as counter = counter - 1, but is shorter
console.log(minusCounter); // 1

// comma operator
let a = (1 + 2, 3 + 4); //(only result of last operator will be evaluated)
console.log(a); // 7 (the result of 3 + 4)

// boolean
console.log(2 > 1); // true (correct)
console.log(2 == 1); // false (wrong)
console.log(2 != 1); // true (correct)
// string comaprison
console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // true

// comparison of diffrent type
console.log('2' > 1); // true, string '2' becomes a number 2
console.log('01' == 1); // true, string '01' becomes a number 1

//prompt
// let Age = prompt('How old are you?', 100); //(message,default value)
// console.log(`You are ${Age} years old!`); // You are 100 years old!

//confirm
// let isBoss = confirm("Are you the boss?");
// console.log(isBoss); // true if OK is pressed

//Non-traditional use of ‘?’
let company = 'Netscape';
(company == 'Netscape') ?
console.log('Right!'):
    console.log('Wrong.');

// short-circuit evaluation
let x;
true || (x = 1);
console.log(x); // undefined, because (x = 1) not evaluated

let y;
false || (y = 1);
console.log(y); // 1

// arror function
let sum = (num1, num2) => num1 + num2;

console.log(sum(3, 5));
console.log(sum(5, 5));
console.log(sum(7, 5));

//ommiting paranthesis if one argument
let square = num1 => num1 * num1;

console.log(square(4));
console.log(square(10));
console.log(square(21));

//empty paranthesis if no arguments
let hello = () => console.log('yolo');

hello();

//example

// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Do you agree?",
//     () => console.log("You agreed."),
//     () => console.log("You canceled the execution.")
// );