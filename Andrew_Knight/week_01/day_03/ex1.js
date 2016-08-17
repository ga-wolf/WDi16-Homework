console.log("Say something");
// Write a function called squareNumber that will take one argument (a number),
// square that number, and return the result.
// It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number),
// divide it by 2, and return the result.
// It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent
// the first number represents of the second number, and return the result.
// It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius),
// calculate the area based on that, and return the result.
// It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

// Function 1
var squareNumber = function ( x ) {
  var result = x * x;
  console.log("The result of squaring the number " + x + " is " + result);
};
squareNumber(9);

// Function 2
var halfNumber = function ( x ) {
  var result = x / 2;
  console.log("Half of " + x + " is " + result)
};
halfNumber(12);

// Function 3
var percentOf = function ( x, y ) {
  var result = x / y * 100;
  console.log( x + " is " + result + "% of " + y);
};
percentOf( 4, 5 );

// Funtion 4
var areaOfCircle = function ( x ) {
  var area = x * x * 3.1415926;
  console.log( "The area for a circle with radius " + x + " is " + area.toFixed(2));
};
areaOfCircle(4);

// Write a function that will take one argument (a number) and perform
// the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var combination = function (squareNumber, halfNumber, percentOf, areaOfCircle) {
  var result = halfNumber
  var squaredResult = squareNumber * squareNumber;
  var areaOfQuestionTwoResult = 3.151926 * squaredResult;
  var percentageOfSquaredResult = areaOfQuestionTwoResult / squaredResult * 100;
  console.log( "The answer to part two is " + percentageOfSquaredResult);
};
combination(4);
