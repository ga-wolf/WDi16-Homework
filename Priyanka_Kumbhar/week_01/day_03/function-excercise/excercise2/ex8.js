// FixStart
//
// Create a function called fixStart. It should take a single argument,
// a string, and return a version where all occurences of its first character have been
//  replaced with '*', except for the first character itself. You can assume that the
//  string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

var fixStart = function( word ){
  var firstCharacter = word.charAt(0);
  var tempWord = word.substring(1,word.length);
  for (i= 1; i<word.length; i++){
    var singleChar = word[i];

    if(singleChar === firstCharacter ){
    tempWord = tempWord.replace(singleChar ," * ");
      //console.log(tempWord);
    }

  }
  tempWord = firstCharacter+ tempWord;
  console.log(tempWord); 
};
fixStart( "babble" );
