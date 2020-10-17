//Conditionals Statements
/*
if (conditional){
    statement
}
else if (anotherConditional){
    statement
}
else if (yetAnotherCondition){
    statement
}
else
    statement
*/
//If hour is between 6am and 12pm: Good morning!
//If it is between 12pm and 6pm: Good afternoon!
//Otherwise: Good Evening.
let hour = 20;


if (hour >= 6 && hour < 12) {
    console.log("Good Morning")
} else if (hour >= 12 && hour < 18) {
    console.log("Good Afternoon")
} else
    console.log("Good Evening")

// Switch and Case

let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');
}

// For
for (let i = 0; i < 5; i++) {
    console.log("Hello word!!", i)
}

// This is a Translation from for to while loop;
console.log('Translation for loop to while loop')

for (let i = 5; i <= 1; i--) {
    if (i % 2 != 0) console.log(i);
}

// While Loop;
// This I is not the same previous I.

/*let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}
*/
// Do While loop.
// Important, on this loop, the condition is checked only at end.
let i = 0;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);

// Infinite Loops.
console.log('infinite')

let o = 0;
while (o < 5) {
    console.log(i);
    o++;
}

// For in -> Used to iterate in properties.
const person = {
    name: 'Mosh',
    age: 30,
};
for (let key in person)
    console.log(key, person[key]);
//Reminder, to access properties there is 2 ways, Dot Notation and Bracket Notation.

const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);

//For...of Loop; BBF of Array S2
for (let color of colors)
    console.log(color);

//Break and continue.
console.log("Break an Continue");
let t = 0;
while (t <= 10) {
    //if (t === 5) break;// Break go out of loop.
    if (t % 2 === 0) {
        t++;
        continue; //Continue go to the next iteration.
    }
    console.log(t);
    t++;
}
//Exercise.
// Write a functions that takes two numbers and returns the maximum of two.
let number = max(5, 60);
console.log(number);

function max(number1, number2) {
    //if (number1 > number2) return number1;
    //else return number2;
    //Using Conditional Operator
    return (number1 > number2) ? number1 : number2;
}
//Function isLandScape, shall return true or false.


console.log(isLandScape(555, 33));

function isLandScape(width, height) {
    return (width > height);
}

//fizzBuzz problem.
/*
If the number is / by 3 = fizz;
if the number is / by 5 = buzz;
if the number is / by 3 and 5 = fizzBuzz;
if the number is not / by 3 or 5 or 3 and 5 = return the number;
if the number is not a number = print("It's not a number")
*/
console.log('FizzBuzz Challenge!!!!')
console.log(' ------- ')

const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;
}

/*
    Speed Limited.
        Max Speed = 70
        5 -> + 1 point
        Math.floor(1.3)
        12 points -> suspended
        Below Max Speed = Ok 
*/

console.log('Speed Challenge !!!!')
console.log(' ------- ')


//const output = speedChallenge(30);
//console.log(output);

checkSpeed(75);

function checkSpeed(speed) {
    const maxSpeed = 70;
    const kilometerPerPoint = 5;

    if (speed < maxSpeed + kilometerPerPoint)
        console.log('OK');
    else {
        const points = Math.floor((speed - maxSpeed) / kilometerPerPoint);
        if (points >= 12)
            console.log('No more drive license for you!!');
        else {
            console.log('Points ', points);
        }
    }
}

// Count Truthy

