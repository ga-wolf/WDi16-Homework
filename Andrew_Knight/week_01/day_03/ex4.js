console.log("Ahoy me hearties");
//
// Create a function called fixStart. It should take a single argument,
// a string, and return a version where all occurences of its first character
// have been replaced with '*', except for the first character itself.
// You can assume that the string is at least one character long. For example:
// fixStart('babble'): 'ba**le'

var fixStart = function ( x ) {
  var firstLetter = x.slice ( 0, 1 );
  var adjustedWord = x.replace(firstLetter, '*' ).slice( 1 );
  console.log( firstLetter + adjustedWord );
};
fixStart( 'high' );
// use newRegEx. 
