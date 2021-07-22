/*
CONDITIONALS

FALSY VALUES:
A falsy value is a value that is considered false when
encountered in a boolean context. There are 6 falsey values in JS:
- false
- 0
- "", '', ``
- null
- undefined
- NaN (not a number) 

what does this mean? Whenever JS is expecting a boolean
value and is given of these 6, it is evaluated as false

side note: there are also Truthy values in JS, which tend to be
much less limited. 
Examples include: 
-true 
-{}
-[]
-42 (any number)
-3.14 (any decimal)
-"false"(any non-empty string)
*/

//test if fractions are truthy

/*
IF STATEMENTS

When we use comparison operators, we typically are asking if we can move 
on to the next ection of code. "If" something is true, do "this thing"
*/

// keyword expression
if (true) {
    // code to run if the expression evaluates to true
    console.log('Truthy Test');
}
// telling it the condition is false
if (false) {
    console.log('Falsy Test')
}
let light = 'on';

if (light = 'on') {
    console.log("The light is on");
}
let weather = 65;
let rain = true;

if (weather <= 70 && rain == true) {
    console.log("Maybe wear a jacket");
}

//! CHALLENGE
/*
create two variable :
1) let batman = "is the night"
2) let bruce = true

Create an if statement that returns true and console log "Batman"
*/
let batman = "is the night";
let bruce = true;
// / !bruce will check that bruce is not equal to true

if (bruce && batman == "is the night") {
    console.log("BATMAN!");
}

/*
IF ELSE

We can think of this as not only providingan an answer if our condition
evaluates to be true, but also one if it ends up being false
*/
let today = 68;

if (today < 70) {
    //      string interpolation
    console.log(`It's ${today}, wear a jacket`);
} else {
    console.log(`It 's ${today}. No jacket needed!`);

}
/*
ELSE IF

this is a condition that will be checked if the above condition
was not met
*/
let cooktime = 60;


if (cooktime === 45) {
    console.log('Let us feast!');
} else if (cooktime > 45) {
    console.log(`It has been ${cooktime} minutes??? Might need a glass of water with this one!`);
} else if (cooktime >= 30) {
    console.log(`It has only ${cooktime} minutes. Wait another 5-15 minutes.`);
} else if (cooktime >= 20) {
    console.log(`It has only been ${cooktime} minutes. Wait another 10-25 minutes.`);
} else {
    console.log(`It has only been ${cooktime}minutes. Perhaps we could at least try cooking it ...`);
}

//! CHALLENGE
/* 
Set a variable of age and give it a number of your choice 
Create an else if statement that checks the following:

If the age is 17 or younger, console.log "Sorry , you're too young to do anything."
If the age is at least 18, console.log "You can vote!"
If the age is at least 21, console.log "You can drink!"
If the age is at least 25, console.log "You can rent a car!"

*/

let age = 22;

if (age <= 17) {
    console.log("Sorry, you are too young to do anything");
} else if (age >= 25) {
    console.log("You can rent a car!");
} else if (age >= 21) {
    console.log("You can drink!");
} else if (age >= 18) {
    console.log("You can vote!");
}

let age2 = 19;

if (age2 >= 25) {
    console.log("You can rent a car!");
} else if (age2 >= 21) {
    console.log("You can drink!");

} else if (age2 >= 18) {
    console.log("You can vote!");
} else {
    console.log("Sorry, you are too young to do anything ")
}
/*
TERNARIES

They are if/else statements but they look weird!
*/

let myName = "Sophie"

//TERNARY
// condition ? if true : else result
// condition  if true run this  else run this

myName === "Sophie" ? console.log(`Hi, ${myName}!`);
console.log(`Not sure I know ${myName}`);
//condition
myName === "Sophie" ?
    // if true
    console.log(`Hi, ${myName}!`) :
    // else false
    console.log(`Not sure I know ${myName}`);


let hero = "Batman";
let villain = "Mr. Freeze";

hero == "Batman" && villain == "Riddler" ?
    console.log("What has a head and a tail but no body ?") :
    hero == "Batman" && villain == "Joker" ?
    console.log("Why so serious?") :
    hero == "Batman" && villain == "Mr. Freeze" ?
    console.log("Ice to meet you!") :
    console.log(`${hero} is the night!`);


//! CHALLENGE
//TERNARY
// condition ? if true : else result
// condition  if true run this  else run this
//ternaries order: condition ? firstCodeBlock : secondCodeBlock

let lampOn = false;
let daytime = true;
// != is ! = (with no spaces)
if (lampOn == true && daytime != true) {
    console.log('The lamp is on during the night')
} else if (lampOn != true && daytime != true) {
    console.log('The lamp is off during the night')
} else if (lampOn == true && daytime == true) {
    console.log('The lamp is on during the day')
} else if (lampOn != true && daytime == true) {
    console.log('The lamp is off during the day')
} else {
    console.log('What lamp?')
}
lampOn == true && daytime != true ?
    console.log('The lamp is on at night') :
    lampOn != true && daytime != true ?
    console.log('The lamp is off during the night') :
    lampOn == true && daytime == true ?
    console.log('The lamp is on during the day') :
    lampOn != true && daytime == true ?
    console.log('The lamp is off during the day') :
    console.log('What lamp?');
/*
SWTICH STATEMENTS

The switch statement executes ablock of code depending on a different cases
*/
let instructor = "Jerome"
switch (instructor) {
    // if instructor === 'Jerome'
    case 'Jerome':
        console.log(`${instructor} is a part of the Web Development Team`);
        // }
        break;
    case 'Summer':
        console.log(`${instructor} is a part of the Web Development Team`);
        break;
    case 'Josh':
        console.log(`${instructor} is a part of the Software Development Team`);
        break;
        //else {
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches at this time`);
        // }
        break;
}



let staff = 'Jerome'

switch (staff) {
    case 'Jerome':
    case 'Summer':
    case 'Levi':
    case 'Adam':
    case 'Hustin':
        console.log(`${staff} is a part of the Web development Team`);
        break;
    case 'Josh':
    case 'Casey':
    case 'Junior':
        console.log(`${staff} is a part of the Software Development Team`);
        break;
    default:
        console.log(`Sorry, I can't find what ${staff}teach.`);
        break;
}

let switchConditional = 'example';
switch (typeof switchConditional == 'string' || typeof switchConditional == 'boolean') {
    case true:
        console.log(`${switchConditional} is a string or boolean!`);
        break;
    default:
        console.log(`${switchConditional} is NOT a string or boolean`);
}

// When we use|| (or) only one sideof the || needs to be true for the expressions to be true
// Whenwe use && (and) Both sides of the && need to betrue for the expression to be true//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/


let grade = 80;

switch (true) {
    case grade >= 89:
        console.log(`Your grade is ${grade}, you have an A`);
        break;
    case grade >= 79:
        console.log(`Your grade is ${grade}, you have an B`);
        break;
    case grade >= 66:
        console.log(`Your grade is ${grade}, you have an c`);
        break;
    case grade >= 59:
        console.log(`Your grade is ${grade}, you have an D`);
        break;
    case grade >= 0:
        console.log(`Your grade is ${grade}, you have an F`);
        break;
    default:
        console.log("Please insert a vaule");
        break;
}

//! Challenge
/*
  Take this if else statement and translate it to both a ternary and a switch statement
*/
let character = "";
if (character === 'Michael') {
    console.log('That\'s what she said!');
} else if (character === 'Dwight') {
    console.log('It\'s not weed! It\'s hemp!');
} else if (character === 'Jim') {
    console.log('Bears. Beets. Battlestar Galactica.');
} else {
    console.log('*slow camera zoom*');
}
// ! Ternary
let character = "";
"Michael" ? console.log("That's what she said!"):
    "Dwight" ? console.log("It's not weed, its hemp!") :
    "Jim" ? console.log("Bears. Beats. Battlestar Galactica") :
    console.log("*slow camera zoom*");
// ! Switch
//Solution 1
let character = "";
switch (character) {
    case "Michael":
        console.log(`That's what she said ${character}`);
        break;
    case "Dwight":
        console.log(`It's not weed its hemp! ${character}`);
        break;
    case "Jim":
        console.log(`Bears. Beats. Battlestar Galactica ${character}`);
        break;
    default:
        console.log('*slow camera zoom*');
}
//Solution 2 (simpler)
let character = "Michael";
switch (character) {
    case "Michael":
        console.log(`That's what she said (${character})`);
        break;
    case "Dwight":
        console.log(`It's not weed its hemp! ${character}`);
        break;
    case "Jim":
        console.log(`Bears. Beats. Battlestar Galactica ${character}`);
        break;
    default:
        console.log('*slow camera zoom*');
}