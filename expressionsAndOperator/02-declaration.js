/*

What is a variable?

Variables are named containers for sorting data. We can thin of these containers 
as resources we can call upon later. Each variable allows
us to store data, which could be a value or a function, 
that we will want to reference back to.

*/
let a = 2;
/*
-"let" is our KEYWORD.
-"a" is a our NAME OF our variable.
-"=" is our ASSIGNMENT OPERATOR.
-"2" is a our variable's VALUE.
*/
let b = 1;

console.log(a + b); // what should we get? 3

/*
Restrictions with variables
-a variable must begin with a letter, underscore, or dollar sign. 
-numbers may follow the above characters, but cannot come first in the name.
-javascripts is a case sensitive - "hello" and "Hello" are different variables.
-no spaces are allowed in variable names
-camelCase is best practice for naming variable in js. This will help keep names of
of variables readable 
ex: 
let myName = "Sophie";
is easier to read than 
let myname = "Sophie";
*/
let startingWithLetter = "test";
let _startingWithUnderscore = "test";
let $startingWithDolarSign = "test";
// let 5 startingWithNumber = "test";
//let 5startingWithNumber = "Breaks"; // CANNOT start a
//variable with a number

// let -startingWithDash = "Breaks"; // cannot start with a -

console.log(startingWithLetter, _startingWithUnderscore,
    $startingWithDolarSign)

//ctrl + alt n will run code runner (windows)
//ctrl + option +n will run code runner (mac)

/*
KEYWORDS

var, let, const
-var: the "old" keyword for variable. We will not use this
much but it is still used depending on the project and when it
was made. We will focus on let and const.

-let: the "new" keyword for variables which was introduces in 
ES6 *newest variable of ECMAScript, which is a standardization of JS

-const: also "new" and declares an unchangeable, or constant,
variable. The only limit to const variables is that once they 
are declared/assigned their value will NEVER change.

*/

var varTest = "var variable";
let letVariable = "let variable";
const contvariable = "const variable";

console.log(variable, letVariable, constVariable);

/*
Declarations are the LEFT SIDE of the assignment operator (=)
within a variable
- let x
Initialzation are the RIGHT SIDE of the assignment operator (=)
and sets the value of the variable
- let x=10
10 would be the initialization

*/
let x;
console.log("Declaration:", x);

x = 10;
console.log("Initialization:", x);
x = 33;
console.log("Initialization:", x);
let y = "Hello";

console.log("Both: x, y");

let today = "Great!";
const efa = "Wonderful!";
console.log(today, efa); // Great! Wonderful!
today = "Awesome!;
console.log(today, efa); //Awesome! Wonderful!
efa = "Super!";
// console.log(today, efa); //Awesome! Wonderful! /error
// const example; //error

// example = "Testing";

// console.log(example);