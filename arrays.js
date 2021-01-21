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

const numbers70 = [1, 2, 3, 1, 4];

console.log(numbers70.indexOf('a')); //Will return the index of given element.

console.log(numbers70.indexOf(1)); //Will return the index of given element.
console.log(numbers70.indexOf(1, 2)); //Will return the index of given element.

console.log(numbers70.lastIndexOf(1)); //Will return the index of given element.

console.log(numbers70.lastIndexOf(1) !== -1);

console.log('    ');
console.log('Also it s possible do the same using .includes');
console.log(numbers70.includes(1));

console.log('    ');
console.log('----------------------------------------------------------------');


console.log('    ');
console.log('-----------Lesson 71 Finding Elements (References Types) --------');
console.log('    ');

const courses = [{
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    },
];

const course = courses.find(function (course) {
    return course.name === 'a';
});

console.log(course);


console.log('    ');
console.log('-----------Lesson 73 Arrow Functions  ------------------------------');
console.log('    ');

//Using as aka the last lesson, we will refactor using Arrow Function

const cursos = [
    {id: 1,name: 'a'},
    {id: 2, name: 'b'},
    ];
const curso = cursos.find(curso => curso.name === 'a');
console.log(curso);

console.log('    ');
console.log('-----------Lesson 74 Removing Elements  ------------------------------');
console.log('    ');


const numeros = [1, 2, 3, 4];

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
numeros.splice(2, 1);
console.log(numeros);

console.log('    ');
console.log('-----------Lesson 75 Emptying an Array  ------------------------------');
console.log('    ');

let num = [1, 2, 3, 4];
let another = num;

//Solution 1 Using let
num = [];

console.log('Soluction One')
console.log(num);
console.log(another);

//Solution Two.

let nume = [1, 2, 3, 4];

//Mosh preference.
nume.length = 0;
console.log('Soluction Two');
console.log(another);
console.log(nume);

//Solution Three.
//Using splice.

let numer = [1, 2, 3, 4];
console.log('Soluction Three');
numer.splice(0, numer.length);

console.log(another);
console.log(numer);

//Solution Four.
//Using pop.

console.log("Soluction Four")
console.log("Das pop")

n = [1, 2, 3, 4];

while (n.length > 0)
    n.pop();

console.log(another);
console.log(numer);


console.log('    ');
console.log('-----------Lesson 75 Combining and Slicing Arrays  ------------------------------');
console.log('    ');

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

//----------Slicing with slice--------------
/*
    IMPORTANT
        When an Object has been copied, on reality, has not, thus Object's reference's.
        Otherwise, Primitives types instead, copied they are.
*/

//console.log(combined.slice(2, 4));

const firsty = [{
    id: 1
}];
const secondy = [4, 5, 6];

const combinedy = first.concat(second);
firsty[0].id = 10;

const slice = combinedy.slice();

console.log(combinedy);
console.log(combined);

console.log('    ');
console.log('-----------Lesson 76 The Spread Operator  ------------------------------');
console.log('    ');
// This approach is more cleaner e flexible.

const lesson76first = [1, 2, 3];
const lesson76second = [4, 5, 6];

const lesson76combined = [...lesson76first, ...lesson76second];
// To copy other array use ... . This will result a copied array, not a reference.
const copy = [...lesson76combined];

console.log(copy);

console.log('    ');
console.log('-----------Lesson 77 Iterating an Array  ------------------------------');
console.log('    ');

const lesson77numbers = [1, 2, 3];

console.log("Using for in ")
for (let number in lesson77numbers) {
    console.log(number);
}

// Now is For each time!!!!
console.log("Using foreach....")

lesson77numbers.forEach(function (number) {
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

const lesson78numbers = [1, 2, 3];

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

//Using sort and output a string.

const lesson79numbers = [2, 1, 4];
lesson79numbers.sort();
console.log(lesson79numbers);

//Now using reverse.
lesson79numbers.reverse();
console.log(lesson79numbers);

//These works well if only strings and numbers are evolved.
//But to apply it to Objects, 

const lesson79courses = [{
        id: 1,
        name: "Node JS"
    },
    {
        id: 3,
        name: "javascript"
    },
];

lesson79courses.sort(function (a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;

});

console.log(lesson79courses);


console.log('    ');
console.log('-----------Lesson 80 Testing Elements of an Arrays --------------------------');
console.log('    ');

//Using .every -> The function will run throw all elements on array.
const lesson80numbers = [1, -2, 3];

const allPositive = lesson80numbers.every(function (value) {
    return value >= 0;
});

console.log(allPositive);

//Using .some -> Will run until some element fit .

const someallPositive = lesson80numbers.some(function (value) {
    return value >= 0;
});

console.log(someallPositive);

console.log('    ');
console.log('-----------Lesson 81 Filtering Elements in Arrays --------------------------');
console.log('    ');
//How to filter elements in array base in search criteria.

const lesson81numbers = [1, 2, 3, 4, 5, -4, 20, -3];

const newFiltedArray = lesson81numbers.filter(function (value) {
    return value >= 0;
});

console.log(newFiltedArray);
//Now the same using arrows;

const newArrowFiltedArray = lesson81numbers.filter(value => value >= 0);

console.log(newArrowFiltedArray);

console.log('    ');
console.log('-----------Lesson 82 Mapping an Arrays --------------------------');
console.log('    ');
// With map method we can map each element in array to something else.


const lesson82numbers = [1, 2, 3, 4, 5, -4, 20, -3];
//First, filter any value greater then 0.
const lesson82newArrowFiltedArray = lesson82numbers
    .filter(value => value >= 0)
    .map(n => ({
        value: n
    }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
//Now, put the <li>.....
//const mapItems = lesson82newArrowFiltedArray.map(n => '<li>' + n + '</li>');
//Now....get out arrays and welcome strings.
//const html = '<ul>'+ mapItems.join('') + '</ul>';

console.log(lesson82newArrowFiltedArray);

console.log('    ');
console.log('-----------Lesson 83 Reducing an Arrays --------------------------');
console.log('    ');
//We will sum of all numbers in this array. Like doing the total of shopping card.

const card = [1, 2, 3, 4, 5];
//IMPORTANT - If we use for in instead for of, result will be an string rather then numbers.
/*
let sum = 0;
for (let element of card)
    sum += element;
*/
//console.log(sum);
//Now its time to refactor this code using .reduce.
//card.reduce()

const sum = card.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);

console.log('    ');
console.log('-----------Lesson 84 Exercise 1 => Array from Range --------------------------');
console.log('    ');

//Array from range. This function should take two parameters, min and max, thus will create a new array.
//Steps.
//Create a Loop.


const numbersLesson84 = arrayFromRange(-1000, -4);

console.log(numbersLesson84);

function arrayFromRange(min, max) {
    const output = [];
    for (let iterator84 = min; iterator84 <= max; iterator84++)
        output.push(iterator84);
    return output;
}

console.log('    ');
console.log('-----------Lesson 85 Exercise 2 Includes --------------------------');
console.log('    ');
//My job is create an function that does the same as .includes 


const lesson85numbers = [1, 2, 3, 4, 5];

console.log(includes(lesson85numbers, 11));

function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}


console.log('    ');
console.log('-----------Lesson 86 Exercise 3 Except --------------------------');
console.log('    ');
//Create a function that excluded an element of specific array, returning a new one.

const lesson86numbers = [1, 2, 3, 4, 5];

const output = except(lesson86numbers, [3, 5]);
console.log(output);

function except(array, excluded) {
    const output = [];
    for (let element86 of array)
        if (!excluded.includes(element86))
            output.push(element86);
    return output;
}


console.log('    ');
console.log('-----------Lesson 87 Exercise 4 Moving an Element --------------------------');
console.log('    ');
//Create a function that moves an element in array.

const numbers87 = [1, 2, 3, 4];

const output87 = move(numbers87, 1, 3);

console.log(output87);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }

    const output87 = [...array];
    const element87 = output87.splice(index, 1)[0];
    output87.splice(position, 0, element87);
    return output87;
}

console.log('    ');
console.log('-----------Lesson 88 Exercise 5 Count Ocurrences --------------------------');
console.log('    ');
//Create a function that takes an array and a search element.

const number88 = [1, 2, 3, 4, 1, 1, 1, 1, 1, 1];
const count = countOccurences(number88, 1);

console.log(count);

function countOccurences(array, searchElement) {
    /*
        let count = 0;
        for (let element of array)
            if (element === searchElement)
                count++;
        return count;
    */
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurence;
    }, 0);
}


console.log('    ');
console.log('-----------Lesson 89 Exercise 6 Get Max --------------------------');
console.log('    ');
//

const numbers89 = [1, 2, 3, 4, 5, 6, 1212];
const max = getMax(numbers89);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    return array.reduce((a, b) => (a > b) ? a : b);
}


console.log('    ');
console.log('-----------Lesson 90 Exercise 7 Movies --------------------------');
console.log('    ');
//


const movies = [{
        title: 'a',
        year: 2018,
        rating: 4.5
    },
    {
        title: 'b',
        year: 2018,
        rating: 4.7
    },
    {
        title: 'c',
        year: 2018,
        rating: 3
    },
    {
        title: 'd',
        year: 2017,
        rating: 4.5
    },
];

//Get all the movies in 2018 with rating > 4
//Sort then by the rating
//In descending order
//Pick the title and display on the console
//The result should be B and A

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)
// Teste 123


console.log(titles);

const title = 2;

