// Write a function called percentOf that will take two numbers,
//  figure out what percent the first number represents of the second number,
//  and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function( num1 , num2){
  var result = ((num1 * 100) / (num2));
  console.log(num1 +" is " + result + " % of "+ num2);
 return result;
};
percentOf( 4 ,10);
