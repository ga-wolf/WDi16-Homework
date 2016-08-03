// Write a function called halfNumber that will take one argument (a number),
//  divide it by 2, and return the result.
// It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function (num){
  var result = (num / 2);
  var result1 = (num % 2);
  output = ( result + result1 );
  console.log("Half of" + num + "is" + output )

};
halfNumber( 7 );
