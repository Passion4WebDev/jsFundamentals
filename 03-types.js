/* DATA and STRUCTURE TYPES

-Primitive Data types;
-boolean
-undefined
-string
-number
-bigInt *
-symbol *
-null
-Object
-Function
*/

/*
BOOLEAN

A boolean has two possible values: true and false

*/

let on = true;
let off = false;

console.log(on);
console.log(off);


/*
NULL
A nullvalue is an empty value. Think of it as an 
empty container that has space to fill. Note:null and 
undefined are 2 different things
*/

let empty = null;
console.log(empty);
/*
UNDEFINED

No value has been assigned to a container and doesn't even act as
an empty container
*/
let unknown;
let undef = undefined;

// What's the difference between null and undefined? 
/*
-Null is like a container with nothing in it
-Undefined is a variable that has never been set, or it hasn't been created yet
*/

/*

NUMBERS Literally just numbers

*/
let degrees = 82
console.log(degrees);

let precise = 9999999999999999; //15 9's in the console
console: log(pricise);

let rounded = 999999999999999999; // 16 9's become 1 with 16 0's
console: log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let whatIf = (0.2 * 10 + 0.1 * 10) / 10;
console.log(whatIf);

/* 
STRINGS 

Strings represent text and one wrapped in either single or double quotes.

*/

let doubleQuote = "Double Quote"
let singleQuote = "Single Quote"
console.log(doubleQuote);
console.log(singleQuote);

let bothQuotes = "I said, It is pretty cool right";
console.log(bothQuotes);
console.log(bothQuotesAlt);

//const contractions1 = "now you can't run into any issues";
//const contractions2 = "now you can't run into any issues";
//console.log(contraction1);
//console.log(contractions);
// Numbers and strings
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = "1050" + "100";
console.log(addTheseAlso);

// We can use an operation called "typeof" to returna string of the variable's type

console.log(typeof addThese);
console.log(typeof addTheseAlso);

let addTest = 1050 + '100';
console.log(addTest);

//let addTest = "1050" +100;
//console.log(addtest);

/*
Objects

Objects are used to store many values instead of just one.
Consider them as a collection of different variables in one container 
denoted by curly brackets: {}
*/

let frodo = {
    //an object has man properties inside of it
    race: "Hobbit", // string
    // name : value
    // we must separate properties in an object with a comma
    rings: 1, // number
    sting: true // boolean
}
console.log(frodo);
console.log(typeof frodo);
console.log(frodo.rings); // Dot Notation example 

/*
ARRAYS

Containers that hold a list of items
denoted by square brackets: []
all items are within the quare brackets
regardless of the data type, all items are separated by commas
*/

let arrayList = ["position1, position2, position 3"];
console.log(arrayList);

let anotherExample = ["muffins, pizza toppings, true, 17, 9007199254740992, false, null, undefined, "];
console.log(anotherExample);
console.log(anotherExample[0]); // square bracket notation

console.log(typeof anotherExample);

/*
ADDITON vs CONCATENATION

JS sees the + symbol in two different ways
- When we use it with numbers, it will use the built-in math
functionality
-When we use it with strings, it will ignore the math
functionality and concats, or combines, the two strings into one
*/

let strings = "one" + '' + " is a number";
console.log(strings);

let concatDiff = 1050 + "100";
console.log(concatDiff);
console.log(typeof concatDiff);


//! CHALLENGE

/* 
Set 7 (or 8) variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode

set each variable to its respective type.
console.log your whole address (with a space between variables).
*/

let firstName = "Sophie";
let lastName = "Russell";
let houseNumber = 615;
let street = "Antioch Cir West";
let city = "Terre Haute";
let state = "IN";
let zipCode = 47803;

console.log(firstName, lastName + ',', houseNumber, street, city + ',', state, zipcode);
/*
STRING: PROPERTIES

Properties are qualities associated with a data type
strings have properties, or qualities, assocaited with them
the length of a string is a property
*/

let myName = "Sophie ";
console.log(myName.length);

/* 
STRING: METHODS

methods one tools that can help us manipulate data
.property .method()
no parens parens
*/

let myNameIs = "Sophie"
console.log(myNameIs.toUpperCase());

let home = "My home is in TerreHaute";
console.log("Includes Method:", home, includes("TerreHaute"));
// ! Challenge
/*
Use google, find MDN documentation for strings, research and use the split method 
to get an array back from this string.
*/
let sent = "This sentence will be split into individual parts";

const str = 'The quick brown fox jumps over the lazy dog.';

const word = sent.split(' ');
console.log(word);