// Lesson 1 -Introduction, ----------------------

console.log('----------------Lesson 1 intro --------------------------------');

console.log('    ');
console.log('Add new elements');
console.log('Finding elements');
console.log('Removing elements');

console.log('Splitting arrays');
console.log('Combinings arrays');
console.log('    ');
console.log('---------------------------------------------------------------');
console.log('    ');
console.log('----------------Lesson 2 Adding Elements ----------------------');
console.log('    ');

const numbers = [3, 4];

// End 

console.log('push');

numbers.push(5, 6);

console.log(numbers);

console.log('    ');
// Beginning

console.log('unshift');

numbers.unshift(1, 2);

console.log(numbers);


//Middle
console.log('    ');

console.log('splice');

numbers.splice(2, 0, 'a', 'b');

console.log(numbers);

console.log('    ');


console.log('    ');
console.log('----------------------------------------------------------------');
console.log('    ');
console.log('----------------Lesson 70 Finding Elements (Primitives) --------');
console.log('    ');

const numbers70 = [1,2,3,1,4];

console.log(numbers70.indexOf('a'));//Will return the index of given element.

console.log(numbers70.indexOf(1));//Will return the index of given element.
console.log(numbers70.indexOf(1, 2));//Will return the index of given element.

console.log(numbers70.lastIndexOf(1));//Will return the index of given element.

console.log(numbers70.lastIndexOf(1) !==-1);

console.log('    ');
console.log('Also it s possible do the same using .includes');
console.log(numbers70.includes(1));

console.log('    ');
console.log('----------------------------------------------------------------');


console.log('    ');
console.log('-----------Lesson 71 Finding Elements (References Types) --------');
console.log('    ');

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const course = courses.find(function(course)  {
    return course.name === 'a';
});

console.log(course);


console.log('    ');
console.log('-----------Lesson 73 Arrow Functions  ------------------------------');
console.log('    ');

//Using as aka the last lesson, we will refactor using Arrow Function

const cursos = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];
const curso = cursos.find(curso => curso.name=== 'a'); 
console.log(curso);

console.log('    ');
console.log('-----------Lesson 74 Removing Elements  ------------------------------');
console.log('    ');


const numeros = [ 1,2,3,4];

//Add
//To add something at end of array.
numeros.push();
//To ass something at beginning of array.
numeros.unshift();
//To add something in the middle.
numeros.splice();

//Remove
//To remove something at end of array.
const last = numeros.pop();

console.log('pop');
console.log(numeros);
console.log(last);

//To remove  something at beginning of array.
const shift = numeros.shift();

console.log('shift');
console.log(numeros);
console.log(shift);

//To remove something in the middle.
console.log('splice');
numeros.splice(2,1);
console.log(numeros);

console.log('    ');
console.log('-----------Lesson 75 Emptying an Array  ------------------------------');
console.log('    ');

let num = [ 1,2,3,4]; 
let another = num;

//Solution 1 Using let
num = [];

console.log('Soluction One')
console.log(num);
console.log(another);

//Solution Two.

let nume = [ 1,2,3,4]; 

//Mosh preference.
nume.length = 0;
console.log('Soluction Two');
console.log(another);
console.log(nume);

//Solution Three.
//Using splice.

let numer = [ 1,2,3,4]; 
console.log('Soluction Three');
numer.splice(0,numer.length);

console.log(another);
console.log(numer);

//Solution Four.
//Using pop.

console.log("Soluction Four")
console.log("Das pop")

n = [ 1,2,3,4];

while (n.length > 0)
    n.pop();

console.log(another);
console.log(numer);


console.log('    ');
console.log('-----------Lesson 75 Combining and Slicing Arrays  ------------------------------');
console.log('    ');

const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second);
console.log(combined);

//----------Slicing with slice--------------
/*
    IMPORTANT
        When an Object has been copied, on reality, has not, thus Object's reference's.
        Otherwise, Primitives types instead, copied they are.
*/

//console.log(combined.slice(2, 4));

const firsty = [ { id: 1}];
const secondy = [4,5,6];

const combinedy = first.concat(second);
firsty[0].id = 10;

const slice = combinedy.slice();

console.log(combinedy);
console.log(combined);

console.log('    ');
console.log('-----------Lesson 76 The Spread Operator  ------------------------------');
console.log('    ');
// This approach is more cleaner e flexible.

const lesson76first = [1,2,3];
const lesson76second = [4,5,6];

const lesson76combined = [...lesson76first, ...lesson76second];
// To copy other array use ... . This will result a copied array, not a reference.
const copy = [...lesson76combined];

console.log(copy);

console.log('    ');
console.log('-----------Lesson 77 Iterating an Array  ------------------------------');
console.log('    ');

const lesson77numbers = [1,2,3];

console.log("Using for in ")
for (let number in lesson77numbers){
    console.log(number);
}

// Now is For each time!!!!
console.log("Using foreach....")

lesson77numbers.forEach(function(number){
    console.log(number);
});

// Now is For each time with Arrow Syntax !!!!
console.log("Using foreach....with Arrow Syntax")

lesson77numbers.forEach(number => console.log(number));

// Now is For each time with Arrow Syntax + Index!!!!
console.log("Using foreach....with Arrow Syntax Plus Index")

lesson77numbers.forEach((number, index) => console.log(number, index));

console.log('    ');
console.log('-----------Lesson 78 Join Arrays  ------------------------------');
console.log('    ');

const lesson78numbers = [1,2,3];

const joined = lesson78numbers.join(',');

console.log(joined);
console.log(lesson78numbers);

// Now using split string's method. 
// This tech is useful when we are made a "URLs" slug as then do not accept 
//  empty spaces.
const message = "This is my first message";
const parts = message.split(' ');

console.log(parts);
parts.join('-');

const combinedy1 = parts.join('-');
console.log(combinedy1);


console.log('    ');
console.log('-----------Lesson 79 Sorting Arrays --------------------------');
console.log('    ');

























