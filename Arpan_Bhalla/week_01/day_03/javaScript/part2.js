// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations,
//using the functions you wrote earlier1:
var x = prompt("Enter The Number you want to Half and then Square:");
// Take half of the number and store the result.


function halfNumber(number){
  var calculateHalf = number/2;
  return calculateHalf;
};
//Stored the result of half
var outputHalf= halfNumber(x);

// Square the result of #1 and store that result.
function squareNumber() {
  var calculateSquare = Math.pow(outputHalf,2);
  return calculateSquare;
};
//Stored the result of Square
var outputSquare = squareNumber();
// window.alert("Result is " +" " +outputSquare);
// // Calculate the area of a circle with the result of #2 as the radius.
function areaOfCircle(){
  var calculateAreaOfCircle = Math.PI * Math.pow(outputSquare,2);
  return calculateAreaOfCircle;
};
var outputAreaOfCircle = areaOfCircle();
window.alert("The area for a circle is" + " " + outputAreaOfCircle.toFixed([2]));

// // Calculate what percentage that area is of the squared result (#3).
function percentOf(outputAreaOfCircle,outputSquare){
  var calculatePercentage = ((outputAreaOfCircle/(outputAreaOfCircle-outputSquare))*100);
  return calculatePercentage;
};
// // Write a function called percentOf that will take two numbers, figure out what percent the
// first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
var outputPercentage = percentOf(outputAreaOfCircle,outputSquare);
window.alert("Percentage that area is of the squared " + " " + outputPercentage.toFixed([2])+"%");
