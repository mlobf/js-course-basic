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

//Using as aka the last lesson, we will refact using Arrow Function

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
//To ass something at begining of array.
numeros.unshift();
//To add somenthing in the middle.
numeros.splice();

//Remove
//To remove something at end of array.
const last = numeros.pop();

console.log('pop');
console.log(numeros);
console.log(last);

//To remove  something at begining of array.
const shift = numeros.shift();

console.log('shift');
console.log(numeros);
console.log(shift);

//To remove somenthing in the middle.
console.log('splice');
numeros.splice(2,1);
console.log(numeros);

console.log('    ');
console.log('-----------Lesson 75 Emptying an Array  ------------------------------');
console.log('    ');

let num = [ 1,2,3,4]; 
let another = num;

//Soluction 1 Using let
num = [];

console.log('Soluction One')
console.log(num);
console.log(another);

//Soluction Two.

let nume = [ 1,2,3,4]; 

//Mosh preference.
nume.length = 0;
console.log('Soluction Two');
console.log(another);
console.log(nume);

//Soluction Three.
//Using splice.

let numer = [ 1,2,3,4]; 
console.log('Soluction Three');
numer.splice(0,numer.length);

console.log(another);
console.log(numer);

//Soluction Four.
//Using pop.

console.log("Soluction Four")
console.log("Das pop")

n = [ 1,2,3,4];

while (n.length > 0)
    n.pop();

console.log(another);
console.log(numer);






























