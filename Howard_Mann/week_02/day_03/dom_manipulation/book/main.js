console.log("My Book List");

// Keep track of which books you read and which books you want to read!
//
// - Create a webpage with an h1 of "My Book List".
// - Add a script tag to the bottom of the page, where all your JS will go.
// - Copy this array of books:
//
// ```javascript
// var books = [
//   {
//     title: 'The Design of EveryDay Things',
//     author: 'Don Norman',
//     alreadyRead: false
//   },
//   {
//     title: 'The Most Human Human',
//     author: 'Brian Christian',
//     alreadyRead: true
//   }
// ];
// ```
//
// - Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// - Bonus: Use a ul and li to display the books.
// - Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// - Bonus: Change the style of the book depending on whether you have read it or not.
var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    cover: 'https://images-na.ssl-images-amazon.com/images/I/417eQ5d7FiL._SY344_BO1,204,203,200_.jpg',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    cover: 'http://ecx.images-amazon.com/images/I/411tzxSwnPL._SX322_BO1,204,203,200_.jpg',
    alreadyRead: true
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    cover: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/hobbit-book-covers/large/photo_5653_0-8.jpg?1384968217',
    alreadyRead: false
  },
  {
    title: 'Solaris',
    author: 'Stanislaw Lem',
    cover: 'http://payload.cargocollective.com/1/2/88505/1336778/1961_konstanty-sopocko-solaris.jpg',
    alreadyRead: true
  }
];

var body = document.querySelector("body");
var newUL = document.createElement('ul');


for (var i=0; i<books.length; i++) {
  var newList = document.createElement('li');
  var listText = document.createTextNode(books[i]["title"]+" by "+books[i]["author"]);

  newList.appendChild( listText );
  newUL.appendChild( newList );
  document.body.appendChild( newUL );

  var newImage = document.createElement('img');
  newImage.style.display = "block";
  newImage.style.width = "100px";
  newImage.style.margin = "10px";
  newImage.setAttribute('src',books[i]["cover"]);
  newList.appendChild( newImage );
  if (books[i]["alreadyRead"]) {
    newImage.style.border = "5px solid green";
  } else {
    newImage.style.border = "5px solid red";
  }
}


  // var newImage = document.createElement('img');
  // newImage.setAttribute('src',)

// var newImage = document.createElement('img');
// newImage.setAttribute('src','http://www.placecage.com/c/300/300');
// document.body.appendChild(newImage);
