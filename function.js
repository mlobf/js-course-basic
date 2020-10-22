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
