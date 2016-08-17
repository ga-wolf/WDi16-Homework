console.log("Aloha");

// Create a function called mixUp. It should take in two strings,
// and return the concatenation of the two strings (separated by a space)
// slicing out and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long. For example:
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function ( x, y ) {
  var firstWordNoLetter = x.slice ( 2 );
  var firstLetter = x.slice ( 0, 2 )
  var secondWordNoLetter = y.slice ( 2 );
  var secondLetter = y.slice ( 0, 2 );

  console.log (  secondLetter + firstWordNoLetter + " " + firstLetter + secondWordNoLetter );
};
mixUp ( "dog", "dinner" );
