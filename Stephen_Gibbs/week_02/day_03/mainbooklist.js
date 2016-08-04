console.log("heloow");

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

for (var i = 0; i<2; i+=1) {
  var titleA = books[i].title;
  var authorA = books[i].author;
  console.log(titleA, authorA);
var newBook = document.createElement("p");
var newBookText = document.createTextNode("Title is " + titleA + " and book is written by " + authorA);
newBook.appendChild(newBookText);
document.body.appendChild(newBook);
}
