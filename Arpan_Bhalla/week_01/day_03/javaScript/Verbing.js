// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If
//  its length is at least 3, it should add 'ing' to its end, unless it already ends
//  in 'ing', in which case it should add 'ly' instead. If the string length is less
//  than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
var inputTheString = prompt ("Input the verb");

function verbing (inputTheString)
  if (inputTheString.endsWith("ing") === true){
  var outputVerb = inputTheString + "ly";
  }

  else if (inputTheString.length>2){
    var outputVerb=inputTheString + "ing";

  }
  else {
    var outputVerb = inputTheString;

  }
return outputVerb;
};
var output = verbing (inputTheString);
window.alert(output);
