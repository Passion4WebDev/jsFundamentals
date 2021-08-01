//console.log('Hello World!') have full filed their role.
//selecting the body tag from the document

//does the same as the same as document.body.appendchile(header1);
//const body = document.querySelector('body');
// const body = document.body;
//need an <h1>
document.createElement('h1');
let header1 = document.createElement('h1'); // <h1></h1>
//make it say something
header1.innerText = 'Our Favorite Books!'//<h1>Our Favorite 
//Books!</h1>
//put it on the page
//using the document and using dot notation to get the body tag
document.body.appendChild(header1);

//put it on the page
// parent.appendChild(child) 
// parent.appendChild(item);
 

const books = ['Lord of the Rings', 'The Richest man in Babylon',
 'The Red Tent', 'Sell anything to Anyone', 'Pride and predjustice',
'StormLight Archives', 'The Book of Joy', 'The Winds of Winter'];

/* 
<table>
<tr>
<th>Book Name</th>
</tr>
<tr>
<td>Book 1</td>
</tr>
</table>
*/

let table = document.createElement('table');//<table></table>
let headerRow = document.createElement('tr');//<tr></tr>
let tHeader = document.createElement('th');//<th></th>

tHeader.innerText ='Book Names'; //<th>Book Names</th>

headerRow.appendChild(tHeader);//<tr><th>Book Names</th></tr>
table.appendChild(headerRow)//<table><tr>...</tr>
document.body.appendChild(table);//<body><table>...</table>

// books indexs of [i]
books.forEach(function(current){
// get some block of code
// this will run on each element of array
console.log(current)

let row2 = document.createElement('tr');
let firstBook = document.createComment('td');

firstBook.innerText = current;

table.appendChild(row2);
row2.appendChild(firstBook);

});

//(For loops) initial condition iterator
for(let i = 0; i <books.length;i++){
    let row2 = document.createElement('tr');
    let firstBook = document.createComment('td');
    
    firstBook.innerText = books[i];
    
    table.appendChild(row2);
    row2.appendChild(firstBook);
}

