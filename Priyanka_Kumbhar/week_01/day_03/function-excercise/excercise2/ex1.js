// Write a function called squareNumber that will take one argument (a number),
// square that number, and return the result.
//  It should also log a string like "The result of squaring the number 3 is 9."


var squareNumber = function( num ){
  var result= (num * num);
  console.log("The result of squaring the number" + num + " is " + result);
}
squareNumber( 4 );
