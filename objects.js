// Objects are collections if key value pairs.
// Object-oriented Programming OOP.


const cicle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};

cicle.draw(); //Method, because is related to an object.
// If our object had logic we have to use an different way to create them.
// This can be made with factoring or constructors.

// Factoring Functions.
// This one must be written on camelnotation.
// Aka; oneTwoThreeFour


function createCircle(radius){
    return  {
        radius,
        draw(){
        console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1)

// Constructor Function.
// By other way, all Constructors Functions must be written in Pascal Notation.
// Aka; OneTwoThreeFour
// this is an reference of the object which is Executing.



function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);

// Objects in "JS" are Dynamic, 
// You can always add, delete properties or methods.

// IMPORTANT
//  constant means you can't reassign the same variable to a new one.
//  But, as rather of fact, it's perfect possible "crud" new methods 
//  or functions as long you don't reassign on it.

// Constructor properties. 
//

console.log(Circle.constructor);

// In Javascript functions are Objects
// In Javascript Value and Reference types. 
// Lesson 54

//Value Types, aka primitives.
// ->Numbers, Strings, Boolean, Symbol, undefined, null.
//Reference Types.
// -> Object, Array, Function.

// Does types has not the same behaviour.

//Primitives are copied by their value.
//Objects types are copied by  their reference.


let number = 10;

function increase(number){
    number++;
}

console.log(" --->  ");
console.log(increase(number));
console.log(number);

// Lesson 55
// Enumerating Properties of an Objects.
//
// Loop in | Loop out.

const circle3 = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

//For in Loop;

console.log("--------------------------")
for (let key in circle3)
    console.log(key, circle3[key]);
console.log("--------------------------")

//For of Loop, now.....
//Using For of on non iterate objects will show an error.
//But this can be solved using Object.keys(circle) method.
// As result, An Array will return.


for (let key of Object.keys(circle3))
    console.log(key);

for (let entry of Object.entries(circle3))
    console.log(entry);


// All functions on JS are Objects, so they has properties and Methods that 
//  we can access using the dot notation.


if ('color' in circle3) console.log('yes');


// Lesson 56, Cloning an Object from other objects

console.log("--------------------------")
console.log("--------------------------")


const circle4 = {
    radius : 1,
    draw(){
        console.log('draw');
    }
};

const another = {};

    for (let key in circle4)
        another[key]= circle4[key];

console.log(another);
        
//const another2 = Object.assign({color: 'yellow'},circle4);


// The spread operator ...

console.log("-------The spread operator-----------");
const another2 = {...circle4};


console.log(another2);

// Lesson 57 . The Garbage Collection.
// Means the deallocate processes on  Javascript.
//
console.log("-------The Garbage Collection-----------");


// Lesson 58 . The Math JavaScript Object.
// Means the deallocate processes on  Javascript.
//
console.log("-------The Math Java Script Object-----------");

console.log(Math.round(Math.random()));

// Lesson 59 . String...
// In Javascript we have two types of string.
// 1-String Primitive
// 2-String Object
//
console.log("-------String-----------");
// Primitive,
const message = 'This is my first message';
// If we use it with dot notation, Javascript warp this with a String Object.

// Object String.
const another3 = new String('h1');
// Lets show all types...

console.log(typeof(message));
console.log((message[1]));
console.log((message[2]));

//To see if the string has an especial word.
console.log((message.includes('my')));

//To see if it start with.
//
console.log((message.startsWith('This')));


console.log((message.length));
console.log(typeof(another3));











































