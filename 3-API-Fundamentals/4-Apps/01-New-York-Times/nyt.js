const baseURL = 'https://api.nytimes.com/svc/v2/articlesearch.json';
const key = 'zqKjQ09G7z1BGgscR8IZvV1fQCRUdq';
let url;
const searchTerm = document.querySelector('.search')










nav.style.display = 'none';
let pageNumber = 0;



function fetchResults(e) {
e.preventDefault();
url = `$(baseURL)?api-key=$(key)&page=${searchTerm.value}`;
if (startDate.value !== ''){
console.log(startDate.value)
url += '&begin_date=' + startDate.value;

console.log('URL:',url);
}
if(endDate.value !== ''){
console.log(endDate.value)
url += '&end_date=' + endDate.value;
console.log('URL:', url);
}
fetch(url)
.then(function(result){
console.log(result)
return result.json();
})
.then(function(json) {
console.log(json)
displayResults(json);
})
}




//Display information to Dom
function displayResults(json) {
console.log('Display Results', json);
while(Selection.firstChild) {
section.removeChild(section.firstChild);
}
let articles = json.response.docs;
if(articles.length === 0) {
    console.log('No results');
} else {
for(let i = 0; i < articles.length; i++){
//console.log (i);
let article = document.createElement('article');
let heading = document.createElement('h2');
let link = document.createElement('a');
let img = document.createElement('img');
let para = document.createElement('p');
let clearfix = document.createElement('div');





}}
}
