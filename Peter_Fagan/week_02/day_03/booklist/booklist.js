// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or no

var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    cover: 'https://upload.wikimedia.org/wikipedia/en/3/33/The_Design_of_Everyday_Things_%28cover_1988%29.jpg',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    cover: "http://d.gr-assets.com/books/1295465264l/8884400.jpg",
    alreadyRead: true
  }
];


  for (i=0; i <books.length; i+=1) {
    var newBook = books[i];

  var newParagraph = document.createElement("p");
  var coverImage = document.createElement("img");
  var paraText = document.createTextNode(newBook.title + " by " + newBook.author);
  var newCover = document.createElement ("src", "newBook.cover");
  newParagraph.appendChild(paraText);
  document.body.appendChild(newParagraph);
  document.body.appendChild(newCover);
}
