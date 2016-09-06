// The Calculator
//
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
var squareNumber = function (inputNumber){
  var squareThenumber = Math.pow(inputNumber, 2);
  return squareThenumber;
};

var input = prompt("Input the Number you want to square: ");
var outputSquare = squareNumber(input);


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function (inputNumber){
  var divisionResult = inputNumber/2;
  return divisionResult;
};
var outputHalf = halfNumber(input)

window.alert("The result of squaring the number "+ input + " is "+ outputSquare +
" & Half of " +  input +" is " + outputHalf);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function (numOne,numTwo){
  var calcuatePercentage = ((numOne/numTwo)*100);
  return calcuatePercentage;
};
var numberOne  = prompt("Input the first number : ");
var numberTwo = prompt("Input the second number : ");

var percentageCalculator = percentOf(numberOne,numberTwo);
window.alert(numberOne +" is "+ percentageCalculator+"% of " + numberTwo);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var areaOfCircle = function(radius){
  var area = (Math.PI* Math.pow(radius,2));
  return area;
};

var radiusInput = prompt("Enter the radius of circle : ");
var circleArea = (areaOfCircle(radiusInput)).toFixed(2);
window.alert("Area of circle is : "+ circleArea)
