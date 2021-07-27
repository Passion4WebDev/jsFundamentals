/*
-Populating and Referring
-Methods
-Lengths
-Iterating
*/
//POPULATING and REFERRING
// 0        1          2
let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);
/* 
-when we call an array, we can append, or add square brackets
onto the end of the array name with the index number of the value
we want to reference. This is known as SQUARE BRACKET NOTATION.
-javascript starts count at 0, so when we console log 'list[1]
' we should see 'banana'
*/
/*
let students = {
    0: 'Evan'
    1: 'Ricky'
    2: 'Kali'
    ...
}
*/
let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Mathew',
    'Cameron', 'Phoenix', 25, true, ['Mathew', 'Shake n Bake', 'Sophie']
    , 15 % 4];
console.log(students[10]);
console.log(typeof students);
console.log(students instanceof Array); // true
// console.log(students instanceof array); // array is not defined
// the instanceof operator is used to check the of type of an object at run time. 
// remember arrays are technical objects

/*! CHALLENGE

console.log from the students array
-the name Mathew (the first one)
-the number 25
-the phrase "Shake n Bake"
-print out 'Hello Sophie'
*/
let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Mathew',
    'Cameron', 'Phoenix', 25, true, ['Mathew', 'Shake n Bake', 'Sophie']
    , 15 % 4];
console.log(students[4]);
console.log(students[7]);
console.log(students[9][1]);
console.log(`Hello ${students[9][2]}`)//interpolate
console.log('Hello', students[9][2]')//console log 2 things
console.log('Hello' + students[9][2]')//concatinate

// ARRAY METHODS
// we can call on multiple different array methods that will allow
//us to manipulate arrays as we need to.

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// add to our array
food.push('Pizza', 'Spring Onion');//.push() will add a value(s) to the end of the array. Multiple values
// to do multiple values separated by a comas
// console.log(food,push('Spring Onion');// gives me the length of the array
console.log('push:', food);

//Remove from array
food.pop(); // this should remove items from the array
console.log('pop:', food);

food.shift();// remove the first item in an array
console.log('shift', food);

food.unshift('Chicken', 'Garlic');// add item(s) to the beginning of an array
console.log('unshift:', food);

food.splice(2, 2, 'Bananas')// remove and inset item(s) from an array
console.log('splice:', food);
// (position to remove, how many to remove, what to add in that location)

food.splice(1, 0, 'Ice Cream');// insert ice cream into position 1
console.log('second splice:', food);

// LENGTH

let long = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length); // 11

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length); // 6
/*

// ITERATING


forEach -
-the forEach() method executes a provided function once for each element in an array.
-the forEach() method does the same thing as a for loop or a for of loop --> both
iterate over the properties in an array

-provide a callback function that has up to 3 arguments:
1. The value.
2. The index.
3. The array object itself
*/
let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];
for (let i = 0; i < colorList.length; i++) {
    console.log(colorList[i]);
}
colorList.forEach(color => console.log(color));

// how do i make an arrow function
//callback function is a function that is a either called or passed as a parameter to another function
//let something = (color) =>{/* code here */}
let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

let logItem = item => console.log(item);
colorList.forEach(logItem);

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

colorList.forEach((item, index) => {
    console.log(item);
    console.log(index);
})

