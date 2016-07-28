// // The Calculator
// //
// // Part 1
// //




// // Bonus: Round the result so there are only two digits after the decimal.
// // Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
// It should also log a string like "The result of squaring the number 3 is 9."

var x = prompt("Enter The Number you want to Square:");

function squareNumber(number) {
  var calculateSquare = Math.pow(number,2);
  return calculateSquare;
};
// // Write a function called halfNumber that will take one argument (a number), divide it by 2,
// and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber(number){
  var calculateHalf = number/2;
  return calculateHalf;
};

var outputSquare = squareNumber(x);
var outputHalf= halfNumber(x);

window.alert("The result of squaring the number " + x + " is " +outputSquare);
window.alert("Half of " + x + " is " +outputHalf);

function percentOf (numberOne,numberTwo){
  var calculatePercentage = ((numberOne/numberTwo)*100);
  return calculatePercentage;
};
// // Write a function called percentOf that will take two numbers, figure out what percent the
// first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var y = prompt("Enter first number to calculate % :");
var z = prompt("Enter second number to calculate % :");
var outputPercentage = percentOf(y,z);
window.alert(y + " is " + outputPercentage.toFixed([2])+" % "+ " of "+ z)

// // Write a function called areaOfCircle that will take one argument (the radius), calculate the
// area based on that, and return the result. It should also log a string like "The area for a
// circle with radius 2 is 12.566370614359172."

function areaOfCircle(theRadius){
  var calculateAreaOfCircle = Math.PI * Math.pow(theRadius,2);
  return calculateAreaOfCircle;
};
var a = prompt("Enter radius of cirle:");
var outputAreaOfCircle = areaOfCircle(a);
window.alert("The area for a circle with radius " + " " +a +" " + " is " +" "+ outputAreaOfCircle.toFixed([2]));
