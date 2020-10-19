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














































