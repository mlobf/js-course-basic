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