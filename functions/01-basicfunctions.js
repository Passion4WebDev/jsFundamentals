/*
  FUNCTIONS
  Functions are processes the we call upon to run an action. They can do the following:
    - Take in an input to process, modify, or respond to (not required)
    - Return a value (not required)
    - Can be invoked (or called) as often as needed
*/
// (1)   (2)
function hi() {
    // (3)
    console.log('Hi!');
    // 1: function keyword - we use this to define a function
    // 2: name of the function, followed by parenthesis - this is how we will call the function
    // 3: code goes here - this will be the "brains" of the function
}
// CALLING THE FUNCTION
// a.k.a putting the "fun" in function
// in order to invoke (call) a function, we will simply write it's name and put parenthesis after it
hi()
    // console.log(hi());
    // When we console.log a function, javascript will first evaluate the function, meaning it will run all of the code and look for a value from it. IF we do not have a return statement within the function, we will get back undefined
    // Will not work because javascript is case sensitive
    // Hi()
    // let myName = 'Jerome';
    // console.log(myName)
let myName = 'Jerome';

function myNameCap() {
    myName = myName.toUpperCase();
    // AVOID THIS IF YOU CAN (until much later)
    // THIS IS CALLED RECURSION
    // (calling a function within itself)
    // myNameCap()
    hi();
}
// console.log() will not always run, or save, changes we make to see in the console. it is PURELY for us to see what is happening
// I get to look at this
// console.log(myName);
// THE COMPUTER gets to look at this
// myName
myNameCap();
console.log(myName);

function hi() {
    console.log('Hi!'); // we see it
    'Hi!'; // computer sees it
}
hi();
let myName = 'Jerome';

function myNameCap() {
    myName = myName.toUpperCase();
    hi();
}
myNameCap();
console.log(`This is working ${myName}`);
/*
  FUNCTION DECLARATION
  a chunk of code that performs a set chunk of code when it is invoked (or called)
*/
function funcOne() {
    console.log('This is the code that we run in function one');
}
// console.log(funcOne); // funcOne will still refer to the function, but without () it will not invoke
funcOne(); // we invoke (or call) a function by writing it's declared name followed by parenthesis
/*
  FUNCTION EXPRESSIONS
  assigning a function to a variable is what we call an expression!
*/
let first = function funcTwo() {
    console.log('Code being run in the function expression');
}
first();
let example = function() {
    console.log('What is my name?');
}
example();
console.log(typeof example); // function
console.log(typeof example()); // undefined
/*
  ANONYMOUS FUNCTIONS
  anonymous functions are stored in memory but the runtime does not automatically create a reference to it.
  the main use would be to pass these functions through another functions. Maybe have a ternary where if something is true we run one function, else we run a different function
*/
// Common use would be to assign these to a variable
let anon = function() {
    console.log('Anonymous Function');
}
anon();
// EXAMPLE OF WRITING ANONYMOUS FUNCTIONS
// fetch('something')
//    .then(function(response) { response.json() })
/*
  PARAMETERS
  we will be using functions to pass in information and return a result
  parameters will allow our functions to take in ourside information
*/
function parameterFunc(num) {
    console.log(num + 1);
    return num + 5; // sends back a value for the function when it is run
}

// return will essentially set the function = to something.

//parameterFunc(7);
//parameterFunc('bruce');
//parameterFunc('another test');
//parameterFunc([1, 2, 3, 4, 5]);

let returnTest = 15;
parameterFunc(returnTest); // 6
console.log(parameterFunc(returnTest)) // 10

let myReturn = parameterFunc(15)
console.log('RETURN:', myReturn)


let firstName = "Jane";
let lastName = "Doe";

function greeting(first, last) {
    console.log(`Hi, ${first}! Welcome back!`);
    console.log(`This is the first parameter: ${first}`);
    console.log(`This is the first parameter: ${last}`);
}

greeting(firstName);
greeting(lastName);
greeting();
greeting(firstName, lastName);
greeting(firstName, null);
greeting('', lastName);



let studentName = "pAul";
let capName;

for (let x in studentName){
    if (x == 0){
        capName = studentName[x].toUpperCase();
        } else{
            capName += studentName[x].toLowerCase();
        }
}
console.log(capName);

let student = { name:"Peter", awesome: true, degree:"JavaScript", week: 1}



let catArray =['tabby', 'british shorthair',' burmese', 'main coon'];
for (let cat in catArray){
    console.log(cat)
}

function hi(){console.log('Hello!')}

blah = function (){
    returm lala;
    lala = "hi";
    } 
    console.log(blah());


function sum(a, b) {
return a + b;
    }
    console.log(sum(1, 2, 3, 4));

  
    function foo(){
        return Bar();
        function bar() {
return "Poppin' bottles";
        }
    }
    console.log(foo());

    function whatDoesItDo(val){
        return val ? 1 : 2;
    };


    function whatDoesItDo(color){
        if (color !== 'blue') || color !== 'green'){
            color = 'red';
        }
        return color;
    };

    console.log(whatDoesItDo());


    let apples = x => console.log(`There are ${x} apple.`);
    apples(10);


    /* ! CHALLENGE 7.26.2021 Monday

    Write a for loop that counts from 1 to 100
    -for numbers that one evenly divisible by 3, print: 'FIZZ'
    -for numbers that are evenly divisible by 5, print: 'BUZZ'
    -for numbers that one evely divisible by BOTH by 3 and 5, print:
    'FIZZ BUZZ'

    remainder: a number is evenly divisible by another number when the remainder is 0
    */
   
   for(let i = 0; i <= 100; i++) {
       console.log(i)
       if(i % 3 == 0) {
       console.log('FIZZ');
       }// I = 26;
// 5 * 5 - 25
// 26-25 = 1

// 26 % 5 = 1

    if(i % 5 == 0);{
    console.log('BUZZ');
       }
   }
   for (let i = 0; i <=100; i++){
    console.log(i)
    if(i % 3 == 0){
    console.log('FIZZ');
    console.log(i, 'is evenly divisible by 3');
    if(i % 5 == 0);
    console.log('BUZZ');
}
}

for (let k = 1; k <= 100; k++) {
    //if (k % 3 == 0 && k % 5 == 0) {
    if(k % 15 == 0) {
    console.log('FIZZ BUZZ');
    } else if(k % 3 == 0) {
    console.log('FIZZ');
    } else if(k & 5 == 0) {
        console.log('BUZZ')
    } else{
        console.log(k);
    }
}

   





 

