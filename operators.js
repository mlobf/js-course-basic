let x = 10;
let y = 12;

console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(x % y);
console.log(x ** y);

//Increment (++)
console.log(" Increment ++ ")
console.log(x++);
console.log(x);

//Decrement
console.log(" Decrement -- ")
console.log(--x);

//Increment with add.
let z = 5;
console.log(" Increment with add.")
console.log(z += 5);
console.log(z -= 5);
console.log(z *= 5);
console.log(z /= 5);
console.log(z **= 5);
console.log(z %= 5);

//Comparison Operator. 
console.log(" Comparison Operator")
let h = 1;

//Relation Operators.
console.log(h > 0);
console.log(h >= 0);
console.log(h < 0);
console.log(h <= 0);

//Equality Operators.
console.log(h === 1);
console.log(h !== 1);

//Strict Equality. => (Type + Value)
console.log(1 === 1);
console.log('1' === 1);
//Lose Equality. => (Type ! Value)
console.log(" Lose Equality")
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

//Ternary operators.
// If a customer has more than 100 points,
// they are 'gold' customers, otherwise,
// they are 'silver' customer.

let points = 90;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);
//Logical Operators.
console.log(" Logical Operators")
// Logical AND (&&)
console.log('Logical AND')
// Returns TRUE if both operands are TRUE
console.log(true && true)

//EligibleForLoan
console.log('Eligible For Loan')
/*
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);
*/
// Logical OR (||) 

// This will return TRUE if one of operands id TRUE.
/*
console.log('Eligible For Loan')

console.log('Logical OR')

let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan);
*/
// NOT (!) 

console.log('Eligible For Loan')

console.log('Logical OR')

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

console.log('Eligible ', eligibleForLoan);

let applicationRefused = !eligibleForLoan;

console.log('Application Refused ', applicationRefused);

// Logical operators with non Boolean.
// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything is not Falsy -> Truthy

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);
// Operator Precedence.

let f = (2 + 3) * 4;

console.log(f);

// Exercise , Swap Values. 

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
console.log(c);
