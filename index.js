// This is an sample of JavaScript Code!!
console.log('Hello World!');


// This is related to 8.1 lesson, named "Variables"

console.log(name);

/* To naming variables in JS, 
    1-They cannot be a reserved keyword. 
    2-They should be related thru variable's propose.
    3-They can not start with a number.
    4-They can not contain space or hyphen.
    5-They are case sensitive.
    6-The best way to declare them is letting one line for each declared variable.
*/

const interestRate  = 0.3;
//interestRate = 1;
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
person.name= 'John';
console.log(person.name);

// Bracket Notation.
let selection = 'name'

person['selection'] = 'Mary';

console.log(person.name);


