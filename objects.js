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

// If our object had logic we have to use an different way to create them.
// This can be made with factoring or constructors.

// Factoring functions.

cicle.draw(); //Method, because is related to an object.

