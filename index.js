function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
//     then(function(response) {
// //   return response.json();
// // }).then(function(json) {
// //   console.log(json);
// //   console.log(`Holy cow! There are ${json["number"]} humans in space.`);
// // }); 
  .then(resp => resp.json())
  .then(json => renderBooks(json));

  // renderBooks()
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

// etch('http://api.open-notify.org/astros.json')
//  .then(function(response) {
//   return response.json();
// }).then(function(json) {
//   console.log(json);
//   console.log(`Holy cow! There are ${json["number"]} humans in space.`);
// }); 