// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
var calculator = function (numberInput){
  var halfTheNumber = numberInput/2;
  console.log("Half of " + numberInput + " is = "+ halfTheNumber);
  var square = Math.pow(halfTheNumber,2);
  console.log("Square of "+ halfTheNumber + " = "+ square );
  var areaOfCircle = (Math.PI*Math.pow(square , 2)).toFixed(2);
  console.log("Area of circle is " + areaOfCircle);
  var percentage = ((areaOfCircle/(areaOfCircle-square))*100).toFixed(2);
  console.log(areaOfCircle + " is " + percentage + " of "+ square);

};

var input = prompt("Input");
calculator(input);
