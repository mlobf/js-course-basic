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

/*
function countTruthy(array){

}
*/

//  Falsy 
//  undefined
//  null
//  ''
//  false
//  0
//   NaN

// My task here is create an function which does count all Truthy values.


const array = [1, 2, 3, 4, 5, 6, 3, 2, 1];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}


// String Properties,
// This function has to show all string's properties.


console.log(" ")
console.log(" ")
console.log("Show me your string!")
console.log(" ")
console.log(" ")


const movie = {
    title: 'a',
    realizeYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}

//Sum of multiples 3 and 5.
// Multiples of 3: 3, 6, 9.
// Multiples of 5: 5, 10.


console.log(sum(10));

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;
}


// Grade
// Calculate a Grade of student
// Simple average calculation

// 1-59: F
// 60-69:D
// 70-79:C
// 80-89:B
// 90-100:A
//--------------------------------------------------
const marks = [80, 80, 90];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let sum = 0;

    for (let mark of marks)
        sum += mark;

    let average = sum / marks.length;

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    else return "A";

}
//--------------------------------------------------
console.log(" ");
console.log(" Now solving using the SINGLE RESPONSIBILITY PRINCIPLE");
console.log(" ");
//--------------------------------------------------

function calculeAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}


showStars(29);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}

// Show Primes, lesson 47

showPrimes(100);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {

        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(number);
    }
}
