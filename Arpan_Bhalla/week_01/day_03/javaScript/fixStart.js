// FixStart
//
// Create a function called fixStart. It should take a single argument, a string,
// and return a version where all occurences of its first character have been replaced
// with '*', except for the first character itself. You can assume that the string is
// at least one character long. For example:
//
// fixStart('babble'): 'ba**le'
function fixStart (inputString){
  var returnString = inputString.charAt(0);
  for (var i = 1;i<=inputString.length;i++){
    if (inputString.charAt(0)===inputString.charAt(i)){
      returnString = returnString + "*";
    }
    else {
      returnString = returnString + inputString.charAt(i);
    }
  };
  return returnString;
};
var input = prompt("Enter the string:")
var output = fixStart(input);
window.alert(output);


// console.log()
