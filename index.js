// This is an sample of JavaScript Code!!
console.log('Hello World!');

// This is related to 8.1 lesson, named "Variables"
let name = 'Mosh'
console.log(name);

/* To naming variables in JS, 
    1-They cannot be a reserved keyword. 
    2-They should be related thru variable's propose.
    3-They can not start with a number.
    4-They can not contain space or hyphen.
    5-They are case sensitive.
    6-The best way to declare them is letting one line for each declared variable.
*/

const interestRate = 0.3;
//interestRate = 1;
// Variables defined with const behave like let variables, except they cannot be reassigned:
console.log(interestRate);

//let name = 'Mosh';
let isApproved = true;
let firstName = undefined;
let lastName = null; // We use null in situations to clear the value of variable.

// Objects

let person = {
    name: 'Mosh',
    age: 30
};

// Dot notation
person.name = 'John';
console.log(person.name);

// Bracket Notation.
let selection = 'name'

person['selection'] = 'Mary';

console.log(person.name);

//Arrays

let selectedColors = ['red', 'blue'];
selectedColors[2] = 3;
console.log(selectedColors);

//Functions
function greet(name, lastName) {
    console.log('Hello ' + name + " " + lastName);
}
greet('John', 'MacLoud');
greet('Mary', 'da Silva');

//Performing a task.
function greet(name, lastName) {
    console.log('Hello ' + name + " " + lastName);
}
greet('John', 'MacLoud');
greet('Mary', 'da Silva');

//Calculating a Value.
function square(number) {
    return number * number;
}
console.log(square(5));



