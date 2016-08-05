// Create a function called mixUp. It should take in two strings, and return the
// concatenation of the two strings (separated by a space) slicing out and swapping
// the first 2 characters of each. You can assume that the strings are at least 2 characters
// long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!


var mixUp = function ( word1, word2){
var newWord = word1.slice(0, 2);
var secondWord = word1.substring(2,word1.length);
var newWord2 = word2.slice(0, 2);
var secondWord2 = word2.substring(2,word2.length);
var result = newWord.concat(secondWord2);
console.log( result );
var result1 = newWord2.concat(secondWord);
console.log( result1 );
console.log(newWord2+secondWord);
};

mixUp('dinner', 'pod');
