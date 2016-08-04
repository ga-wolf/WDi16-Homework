
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

for (var i = 0; i<books.length; i++) {
	var currentBook = books[i];


	var newPara = document.createElement("p");
	var paraText = document.createTextNode(books[i].title + " by " + books[i].author);
	newPara.appendChild(paraText);

  var body = document.getElementsByTagName("body");
  document.body.appendChild(newPara);
}

// Bonus: Use a ul and li to display the books.




for (var i = 0; i<books.length; i++) {
	var currentBook = books[i];

  var newUl = document.createElement("ul");
  document.body.appendChild(newUl);

	var newLi = document.createElement("li");
  document.body.appendChild(newLi);

	var liText = document.createTextNode(books[i].title);

  var newLi1 = document.createElement("li");
  document.body.appendChild(newLi1);

  var liText1 = document.createTextNode(books[i].author);

  var newLi2 = document.createElement("li");
  document.body.appendChild(newLi2);

  var liText2 = document.createTextNode(books[i].alreadyRead);

  newLi.appendChild(liText);
	newLi1.appendChild(liText1);
	newLi2.appendChild(liText2);

}

// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.



// Bonus: Change the style of the book depending on whether you have read it or not.
