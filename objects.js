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






















