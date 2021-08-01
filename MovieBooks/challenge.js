console.log('challenge')

// make an array of movies
// display the movies on the html page
//EITHER by selecting a tag that is already on the page (a la querySelector or
// what have you) OR create it from scratch using DOM


const books = ['Lord of the Rings', 'The Richest Man in Babylon', 'The Red Tent', 'Sell Anything to Anyone', 'Pride and Predjudice', 'Stormlight Archives', 'The Book of Joy', 'The Winds of Winter'];
/*
  <table>
    <tr>
      <th>Book Name</th>
    </tr>
    <tr>
      <td>book 1</td>
    </tr>
  </table>
*/
let table = document.createElement('table'); // <table></table>
let headerRow = document.createElement('tr'); // <tr></tr>
let tHeader = document.createElement('th'); // <th></th>
tHeader.innerText = 'Book Names'; // <th>Book Names</th>
headerRow.appendChild(tHeader); // <tr> <th>Book Names</th> </tr>
table.appendChild(headerRow); // <table> <tr> ... </tr> </table>
document.body.appendChild(table); // <body> <table> ... </table>
//                     books[i]
books.forEach(function(current) {
  // get some block of code
  // this will run on each element of the array one time
  console.log(current)
  let row2 = document.createElement('tr');
  let firstBook = document.createElement('td');
  firstBook.innerText = current;
  table.appendChild(row2);
  row2.appendChild(firstBook);
});
//   initial      condition      iterator
for(let i = 0; i < books.length; i++) {
  let row2 = document.createElement('tr');
  let firstBook = document.createElement('td');
  firstBook.innerText = books[i];
  table.appendChild(row2);
  row2.appendChild(firstBook);
}