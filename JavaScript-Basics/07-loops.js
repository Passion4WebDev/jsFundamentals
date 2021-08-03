console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
.
.
.
console.log(100);
for (let i = 1, i <= 100; i + = 1) {
    console.log(i); // line 2
} // line 3

for ([initialExpression];
    [condition];
    [incrementExpression]) statement

//1   //2   //3
for (let i = 1; i <= 10; i++) {
    console.log("Number:", i);

    for (var i = 0; i <= 50; i += 5) {
        console.log(i);
    }
    for (var i = 20; i >= 1) i--{
        console.log(i);
    }
    for (var i = 3; i < 30; i += 5) {
        console.log(i);
    }