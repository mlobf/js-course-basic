//Final Round
console.log("-----------Lesson 91 ---- Functions Declarations VS Expressions-------------");

//Function Declaration
function walk() {
    console.log('walk');
}

// Named Function Expression.
let run = function walk() {
    console.log('run');
}

//Anonymus Function Expression.
let run1 = function () {
    console.log('run');
}
let move = run1;
run1();
move();

console.log("-----------Lesson 92 ---- Hoisting -------------");
// Topic
//  Declare a Function before at function in self.
//  If is a Function Declaration, OK.
//  If is an Anonymus Function, NOT ALOWED.
// Hoisting is the process to move the function to the top of the file.

console.log("-----------Lesson 94 ---- Arguments -------------");
//JavaScript is an Dynamic Language.
//You can change the value of an function.

function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 10));

console.log("-----------Lesson 95 ---- The Rest Operator -------------");
//To use a lot of paramets in function, use rest operator.
// Rest operator will put all the arguments on array.
// IMPORTANT the rest operator must be the last operator on function.
function sumArg(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount)
}

console.log(sumArg(0.1, 20, 30));

console.log("-----------Lesson 96 ---- Default Parameters-------------");
//With EC6 we have a better way to  archive this, as long as we use ....
// .... a default value.
// IMPORTANT => All values forward defaul value must be setted on equal way. 
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));

console.log("-----------Lesson 97 ---- Getters and Setters-------------");
// getters => access properties
// setters => to change them or mutate them.
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'John Smith';
console.log(person);

console.log("-----------Lesson 98 ----  Try and Catch-------------");
//Defensive programming: Using Error Handling to Avoid Bugs.

const person98 = {
    firstName: 'Mosh',
    lastName: 'Hamedani',

    set fullName98(value) {

        if (typeof value !== 'string')
            throw new Error('Value is not String.');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name.');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person98.fullName = '';
} catch (e) {
    alert(e);
}
console.log(person98);


console.log("-----------Lesson 99 ----Local VS Global Scope -------------");
//Scope of a varible can be set using Blocks for Local Scope.
// Local Varibles have precedence over global varibles.
//Global Scope.
const color = "Red";
//Local Scope
function localScope() {
    const message = "Hello Local Scope";
    const color = "Blue";

    console.log(message);
    console.log(color);
};
// Global
console.log(color);
//Local
localScope();

console.log("-----------Lesson 100 ----Let VS Var -------------");
// When using 'var' instead 'let', the scope is not limited by Blocks.
// let and const create block-scope varibles.
// var creates function-scope varables.


function start() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    };
}

start();

console.log("-----------Lesson 101 ---- The 'this.' Key Word -------------");
// What is "this"?
// -> Is the object that is executing the current function. 
// If a function is part of object = So is a method.

//method -> obj
//function -> global (window, global)

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();

console.log("-----------Lesson 102 ---- Changing the value of 'this' -------------");
// Using arrow functions, they inherit the this value from the container function.
//.call = Old Way
//.apply = Old Way
//.blind = Old Way

const videos = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTag() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

videos.showTag();

console.log("-----------Lesson 103 ---- Exercise 1 Sum of arguments -------------");

console.log(sum103([1, 2, 3, 4]));

function sum103(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    console.log(items);
    return items.reduce((a, b) => a + b);
}

console.log("-----------Lesson 104 ---- Exercise 2 Area of Circle -------------")
// We can not set area from outside, read only property.

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;

    }
};
console.log(circle.area);

console.log("-----------Lesson 105 ---- Exercise 3 Error Handling -------------");
//Make some changes in order to be able to handling Errors related to wrog type parameters. 

try {
    const number = [1, 2, 3, 4];
    const count = countOccurences(number, 1);
    console.log(count);
} catch (e) {
    console.log(e.message);
}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.')

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurence;
    }, 0);
}