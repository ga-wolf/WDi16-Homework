// // Strings
// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and
//return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

function drEvil(amount){


  if (amount === "1"){
  var output = amount + " dollar";
  return output;
  }
  else if (amount === "1000000"){
  var output = amount + " dollars (pinky)";
  return output;
  }
  else {
    var output = amount + " dollars";
    return output;
  }
};
  var x = prompt("Input amount")
  var outputDrEvil=drEvil(x);

window.alert(outputDrEvil);
